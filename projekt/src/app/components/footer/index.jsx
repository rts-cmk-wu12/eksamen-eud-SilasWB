import Image from "next/image";
import Link from "next/link";
import Logo from "../logo";
import "./footer.scss"
import { PiXLogoThin } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube,FaLinkedin } from "react-icons/fa";


export default function Footer() {
    return (
        <>
            <footer className="Footer">
                <nav>
                    <div className="Footer__socials">  
                        <Logo />
                        <ul className="icons">
                            <li><Link href="x.com" /><PiXLogoThin /></li>
                            <li><Link href="instagram.com" /><FaInstagram /></li>
                            <li><Link href="youtube.com" /><FaYoutube /></li>
                            <li><Link href="linkedin.com" /><FaLinkedin /></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><h5>About SwapHub</h5></li>
                            <li><p>How it works</p></li>
                            <li><p>Community guidelines</p></li>
                            <li><p>Our mission</p></li>
                            <li><Link href="./contact">Contact us</Link></li>
                            </ul>
                        </div>
                    <div>
                        <ul>
                            <li><h5>Discover</h5></li>
                            <li><p>Browse categories</p></li>
                            <li><p>Popular Swaps</p></li>
                            <li><p>Successful stories</p></li>
                            <li><p>Upcoming events</p></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><h5>Support</h5></li>
                            <li><p>Help Center</p></li>
                            <li><p>FAQs</p></li>
                            <li><p>Safety tips</p></li>
                            <li><p>Report an issue</p></li>
                        </ul>
                    </div>



                </nav>
            </footer>
        </>
    )
}