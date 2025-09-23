import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import CreateUserForm from "@/app/components/register-form";


export default function Register() {
    return (
        <>
<Header />
<main>
    <h1>Create your own user</h1>
   <CreateUserForm />
</main>
<Footer />
        </>
    )
}