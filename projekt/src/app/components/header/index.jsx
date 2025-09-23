
import "./header.scss"
import Image from "next/image"
import Link from "next/link"
import Logo from "../logo"
export default function Header() {

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
       <Link href="">Listing</Link> 
    </li>
    <li>
       <Link href="">Community</Link> 
    </li>
    <li>
        <Link href="">Contact</Link> 
    </li>
 </ul>

 <ul className="header__wrapper__section-signin">
    <li>
        <Link href="/login" className="signin">Sign in</Link>
    </li>
    <li>
        <Link href="/register" className="register">Register</Link>
    </li>
 </ul>   
   </section>
    </nav>
    </header>
    </>)
 
}