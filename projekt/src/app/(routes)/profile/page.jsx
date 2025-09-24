"use server"

import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import ProfileCard from "@/app/components/profilecard";
import { cookies } from "next/headers";



export default async function Profile() {
    const cookieStore = await cookies();
    const userid = cookieStore.get("userid");
    const token = cookieStore.get("auth_token");

    const response = await fetch(`http://localhost:4000/api/v1/users/${userid.value}`, {
        // "method": "GET",
        "headers": {
            Authorization: "Bearer " + token.value
        }
    })
    const json = await response.json()
console.log(json)

    return (
        <>
            <Header />
            <main>        
                  <ProfileCard json={json}/>
                  </main>
  
            <Footer />
        </>
    )
}