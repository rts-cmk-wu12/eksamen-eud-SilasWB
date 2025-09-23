import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import LoginForm from "@/app/components/login-form";
import "./loginpage.scss"


export default function Login() {
    return (
        <>
<Header />
<main>
    <LoginForm />
</main>
<Footer />
        </>
    )
}