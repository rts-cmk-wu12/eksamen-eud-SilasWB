"use server";

import z from "zod";

export default async function ContactMe(prevState, formData) {
    const email = formData.get("email");
    const firstname = formData.get("firstname");
    const message = formData.get("message");

    const schema = z.object({
        email: z.string().min(1, { message: "Email not filled out" }),
        firstname: z.string().min(1, { message: "First Name not filled out" }),
        message: z.string().min(1, { message: "Message not filled out" }).max(100, {message: "Message is to long"}),
    });

    const validated = schema.safeParse({
        email,
        firstname,
        message,
    });

    if (!validated.success) return {
        ...validated,
        ...(z.treeifyError(validated.error))
    }
}
