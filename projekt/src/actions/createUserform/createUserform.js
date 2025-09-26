"use server";

import z from "zod";

export default async function createUserForm(prevState, formData) {
	const email = formData.get("email");
	const password = formData.get("password");
	const firstname = formData.get("firstname");
	const lastname = formData.get("lastname");

	const schema = z.object({
		email: z.string().min(1, { message: "Email not filled out" }),
		password: z.string().min(1, { message: "Password not filled out" }),
		firstname: z.string().min(1, { message: "FirstName not filled out" }),
		lastname: z.string().min(1, { message: "LastName not filled out" }),
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

	return await response.json();
}
