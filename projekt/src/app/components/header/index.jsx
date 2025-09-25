"use server"
import "./header.scss"
import Image from "next/image"
import Link from "next/link"
import Logo from "../logo"
import { cookies } from "next/headers"
import ButtonModRemover from "@/actions/buttonModifyer/button"


export default async function Header() {
const cookieStore = await cookies();

    return ( 
          <>
    <header className="header">
    <nav className="header__wrapper">
    <div className="header__wrapper-image">
    <Logo />
   </div> 
   <section className="header__wrapper__section">
    <ul className="header__wrapper__section-links">
    <li>
       <Link href="/">Listing</Link> 
    </li>
    <li>
       <Link href="/">Community</Link> 
    </li>
    <li>
        <Link href="./contact">Contact</Link> 
    </li>
 </ul>
{ cookieStore.get("auth_token") && cookieStore.get("userid") || cookieStore.get("login") && cookieStore.get("userid") ? (
       <ul className="header__wrapper__section-signin">
    <li>
        <Link href={"/"} onClick={ButtonModRemover}  className="signin">Log out</Link>
    </li>
    <li>
        <Link href="/profile" className="register-btn">Profile</Link>
    </li>
 </ul> 
 
)  : (
    <ul className="header__wrapper__section-signin">
    <li>
        <Link href="/login" className="signin">Sign in</Link>
    </li>
    <li>
        <Link href="/register" className="register-btn">Register</Link>
    </li>
 </ul>   
)
}



   </section>
    </nav>
    </header>
    </>)
 
}