"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import z from "zod";

export default async function createUserForm(prevState, formData) {
	const email = formData.get("email");
	const password = formData.get("password");
	const firstname = formData.get("firstname");
	const lastname = formData.get("lastname");

	const schema = z.object({
		email: z.string().min(1, { message: "Navn skal være udfyldt" }).max(50, { message: "Navnet er for langt. Maks 50 tegn." }),
		password: z.string().min(1, { message: "password skal være udfyldt" }),
		firstname: z.string().min(1, { message: "Dej skal være udfyldt" }),
		lastname: z.string().min(1, { message: "Glasur skal være udfyldt" }),
	});

	const validated = schema.safeParse({
		email,
		password,
		firstname,
		lastname,
	});

	if (!validated.success) return {
		...validated,
		...(z.treeifyError(validated.error))
	}

	const response = await fetch("http://localhost:4000/api/v1/users", {
	method: "POST",	
	headers: {
    "Content-Type": "application/json"
		},
		
		"body": {
			email: validated.data.email,
			password: validated.data.password,
			firstname: validated.data.firstname,
			lastname: validated.data.lastname,
		}

	});

	if (response.status !== 201) return {
		success: false,
		errors: ["Something went wrong on the server try again later"]
	}

	revalidatePath("http://localhost:3000/abc");
console.log("success")
	return await response.json();
}
