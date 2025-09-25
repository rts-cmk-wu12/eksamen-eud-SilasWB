// taget fra tidligere projekt

"use client";

import { useActionState, useEffect, useState } from "react";
import "./contact.scss"
import ContactMe from "@/actions/contactForm/contactme";

export default function ContactUsForm() {
    const [formState, formAction, isPending] = useActionState(ContactMe)

    return (
         <>
        <h2>Contact us</h2>
        
        <form className="contact__form" action={formAction}>
            <section className="contact">
            <div>
                <label>
                    <span>Email</span>
                    <input className="contact__search-input" type="email" name="email" defaultValue={formState?.data?.email} />
    	            <p>{formState?.properties?.email?.errors}</p>
                </label>
            </div>
            <div>
                <label>
                    <span>Firstname</span>
                    <input className="contact__search-input" type="text" name="firstname" defaultValue={formState?.data?.firstname} />
                    	<p>{formState?.properties?.firstname?.errors}</p>
                </label>
            </div>
            <div>
            <label>
                    <span>Message</span>
                     <input className="contact__search-input" type="text" name="message" defaultValue={formState?.data?.message} />
                    	<p>{formState?.properties?.message?.errors}</p>
                </label>
            </div>
            <button type="submit">Contact Us</button>
        </section>
        </form> 
        </>
    );
}