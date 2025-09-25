import ContactUsForm from "@/app/components/contactus-form";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Nyhedsbrev from "@/app/components/nyhedsbrev";



export default function Contact() {
    return (
        <>
<Header />
<main className="contact-wrap">
 <ContactUsForm />
 <Nyhedsbrev />
</main>
<Footer />
        </>
    )
}