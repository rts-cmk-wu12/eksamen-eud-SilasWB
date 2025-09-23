//Taget fra Tidligere Projekt

"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import z from "zod";

export default async function doTheLoginThing(prevState, formData) {

	const email = formData.get("email");
	const password = formData.get("password");

	const schema = z.object({
		email: z.string().min(1, { message: "Email must be filled in" }),
		password: z.string().min(1, { message: "Password must be filled in" })
	});

	const validated = schema.safeParse({
		email, password
	});

	if (!validated.success) return {
		...validated,
		...(z.treeifyError(validated.error))
	}

	const tokenresponse = await fetch("http://localhost:4000/auth/token", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "email": validated.data.email,
    "password": validated.data.password
  }) 
})

	if (!tokenresponse.ok) return {
		success: false,
		errors: ["Email or Password is Wrong"]
	}

const { token, userId } = await tokenresponse.json();
console.log("token:", token);
console.log("userid:", userId);


const userresponse = await fetch(`http://localhost:4000/api/v1/users/${userId}`, {
  "method": "GET",
  "headers": {
    Authorization: `Bearer ${token}`
  }
})

	if (!userresponse.ok) return {
		success: false,
		errors: ["Email or Password is Wrong"]
	}

const { user } = await userresponse.json();
console.log("user:", user);

	if (userresponse.ok) {
		const cookieStore = await cookies();
		cookieStore.set("auth_token", "Locked in", {
			maxAge: 60 * 60
		},
		cookieStore.set("userid", userId), {
			maxAge: 60 * 60
		},
);

		redirect("/profile")
	}

	return { success: true, user }

}
