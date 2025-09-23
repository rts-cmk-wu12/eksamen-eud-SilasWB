// taget fra tidligere projekt
"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import "./searchbar.scss"
import Image from 'next/image';

function SearchBar() {
    const [query, setQuery] = useState('');
    const [listings, setListings] = useState([]);



    useEffect(() => {
        const fetchListings = async () => {
            const response = await fetch(
                `http://localhost:4000/api/v1/listings`
            );
            const data = await response.json();
            setListings(data);
        };

        fetchListings();
    }, []);

    const filtered = query ? listings.filter((list) => list.title.toLowerCase().includes(query.toLowerCase())) : listings


    return (
        <>
            <div className="search-container">
                <input type="search" placeholder='Search' onChange={(event) => setQuery(event.target.value)} className='search-input' />
            </div>

            {filtered.length > 0 ? (
                <ul className='listing-wrapper'>
                    {filtered.map((listing) => (
                        <Link key={listing.id} href={`/listings/${listing.id}`}>
                            <li className='ListingCard__li'>
                                <Image src={listing.asset.url} width={350} height={340} alt={listing.title}></Image>
                                <div className="text-container"> 
                                    <h2>{listing.title}</h2>
                                    <p>{listing.description}</p>
                                </div>
                            </li>
                    </Link>
                )).slice(0, 6)}
                </ul>
            ) : (
                <p>Ingen resultater</p>
            )

            };


        </>
    );
}

export default SearchBar;