//Taget fra Tidligere Projekt

"use server";


import z from "zod";

export default async function News(prevState, formData) {

    const emailnews = formData.get("emailnews");

    const schema = z.object({
        emailnews: z.string().min(1, { message: "Email must be filled in" }),
    });

    const validated = schema.safeParse({
        emailnews
    });

    if (!validated.success) return {
        ...validated,
        ...(z.treeifyError(validated.error))
    }

    const newsresponse = await fetch("http://localhost:4000/api/v1/newsletter", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json"
  },
  body: {
    "email": validated.data.emailnews
  }
})

    if (!newsresponse.ok) return {
        success: false,
        errors: ["Email is wrong!"]
    }

const { news } = await newsresponse.json();
console.log(news)


	return { success: true, news }


}
