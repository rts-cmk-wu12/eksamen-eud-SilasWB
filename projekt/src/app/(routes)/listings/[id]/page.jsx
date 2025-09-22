// Taget fra tidligere projekt
import Footer from "@/app/components/footer";
// import "./aktiviterdetail.scss"
import Image from "next/image";

export async function generateMetadata({ params }) {
    const { id } = await params;

    const response = await fetch(`http://localhost:4000/api/v1/listings/${id}`);
    const json = await response.json();
console.log(id)
    return {
        title: json.name
       
    } 
}

export default async function AktivitetPage({ params }) {
    const { id } = await params;

    const response = await fetch(`http://localhost:4000/api/v1/listings/${id}`);
    const json = await response.json();
console.log(json)


    return (
        <>
        <section className="aktivitetDetail">
            <div className="aktivitetDetail__image-wrapper">
        <Image src={json.asset.url} width={200} height={100} alt={json.id} priority></Image>
        <button>Tilmeld</button>
</div>
<div className="aktivitetDetail__layout">
            <h2>{json.name}</h2>
                <span>{json.minAge}-{json.maxAge}</span>
            <p>{json.description}</p>
            </div>
            </section>



            <Footer />
        </>
    );
}

