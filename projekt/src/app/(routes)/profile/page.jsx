import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Profilefetchuser from "@/app/components/profilefetchuser";


export default async function Profile() {
    const response = await fetch(`http://localhost:4000/api/v1/users/${userid}`)
    const json = response.json()

    
    return (
        <>
            <Header />
            <main>
             <Profilefetchuser />
            </main>
            <Footer />
        </>
    )
}