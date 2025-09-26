# Opgavetitel
**Dit navn** Silas

**Hold nr.** WU12

**Valgfri opgave** Opgave C

## Tech-Stack
- JavaScript
Programmeringsprog der kører køre på både browser og server
---
- Next
Next er et React baseret framework til rendering på server side
---
- React
React er et Javascript bibliotek til at lave bruger interfaces
---
- React-dom
React dom er nøglen til DOM og server rendering for React
---
- React-icons
React icons er et Bibliotek med færdige ikoner som kan bruges til din kode
---
- React-spinners
React spinners er et React Bibliotek med animeret loading spinners
---
- Sass-embedded
Sass-embedded er en CSS udvidelse der stukturere og genandvender CSS
---
- Zod
Zod er et TypeScript first validerings bibliotek du kan definere schemas som du kan bruge til at validere data
---
## Kode Eksempel

```jsx
// Jeg bruger "use server" her fordi det er en server action i next så funktionen kører på serveren og ikke browseren som "use client"
"use server";

//importering af zod som bruges til at validere min form
import z from "zod";
// laver en asynkronsk function hvor jeg bruger parameterne prevState og formData. 
//prevState bruger jeg til at holde styr på tidligere state som fx valideringsfejl og formData bruges til at hente selve dataen fra html formen


export default async function createUserForm(prevState, formData) {
    // henter dataen fra felterne
	const email = formData.get("email");
	const password = formData.get("password");
	const firstname = formData.get("firstname");
	const lastname = formData.get("lastname");

//object funktionen laver et schema som beskriver hvordan objektet ska se ud
	const schema = z.object({
        //validere om felteterne er en string og valuen har en længde længere end 1 ellers skal den komme med en error 
		email: z.string().min(1, { message: "Email not filled out" }),
		password: z.string().min(1, { message: "Password not filled out" }),
		firstname: z.string().min(1, { message: "FirstName not filled out" }),
		lastname: z.string().min(1, { message: "LastName not filled out" }),
	});
// tjekker om objektet matcher de regler som er blevet defineret i mit zod schema
	const validated = schema.safeParse({
		email,
		password,
		firstname,
		lastname,
	});
// guard clause til at checke om alt er okay ellers skal den med det samme returnere ...valitated som spreder alle felterne fra objektet og ind i return også bruger jeg treeifyError til at formatere errors
	if (!validated.success) return {
		...validated,
		...(z.treeifyError(validated.error))
	}
//  bruger fetch metoden som laver en HTTP forespørgsel som returnere et promise som man kan await responsen fetch bruges til at hente / sende data i dette tilfælde sender jeg data pga POST som man bruger til at oprette noget også bruger jeg headers til at fortælle serveren at dataen jeg sender i body er JSON
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
// endnu en guard clause til at tjekke om HTTP statuskoden giver 201 ved hjælp af Comparison operatoren hvis status koden er fx 400 returnere den erroren
	if (response.status !== 201) return {
		success: false,
		errors: ["Something went wrong on the server try again later"]
	}
// venter på JSON dataen bliver hentet
	return await response.json();
}



```

