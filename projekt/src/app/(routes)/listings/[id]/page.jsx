// Taget fra tidligere projekt
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
// import "./aktiviterdetail.scss"
import Image from "next/image";
import "./listingdetail.scss";

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
        <Header />
        <section className="listingDetail">
            <div className="listingDetail__image-wrapper">
        <Image src={json.asset.url} width={415} height={415} alt={json.id} priority></Image>
</div>
<div className="listingDetail__layout">
            <h2>{json.title}</h2>
            <p>{json.description}</p>
            <p>On SwapHub since: {json.createdAt.slice(0,10)}</p>
            <button>Propose a swap</button>
            </div>
            </section>



            <Footer />
        </>
    );
}

