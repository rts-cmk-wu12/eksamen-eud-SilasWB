import Image from "next/image";
import Link from "next/link";
import placeholder from "@/imgs/Image.svg"
import "./profilecard.scss"
export default function ProfileCard({json}){
    
    return(

        <>
    <section className="listing-section">
        <h1>Hello {json.firstname} {json.lastname}</h1>
    

<h3>Your Listings:</h3>
   
         {json.listings && json.listings.length > 0 ? (
                <ul className='listing-wrapper'>
                    {json.listings.map((listings) => (
                        <Link key={listings.id} href={`/listings/${listings.id}`}>
                            <Image src={placeholder} width={175} height={205} alt={listings.title} />
                            <li className='ListingCard-wrapper__li'>
                                <div className="text-container"> 
                                    <h2>{listings.title}</h2>
                                </div>
                            </li>
                    </Link>
                ))}
                </ul>
            ) : (
                <p>Ingen resultater</p>
            )

            }; 
            </section>
        </>
    )
}