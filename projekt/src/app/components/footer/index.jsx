import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer>
                <nav>
                    <div>  
                        <Image />
                        <ul>
                            <li><Link href="x.com" /></li>
                            <li><Link href="instagram.com" /></li>
                            <li><Link href="youtube.com" /></li>
                            <li><Link href="linkedin.com" /></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><span>About SwapHub</span></li>
                            <li><p>How it works</p></li>
                            <li><p>Community guidelines</p></li>
                            <li><p>Our mission</p></li>
                            <li><Link href="./contact">Contact us</Link></li>
                            </ul>
                        </div>
                    <div>
                        <ul>
                            <li><span>Discover</span></li>
                            <li><p>Browse categories</p></li>
                            <li><p>Popular Swaps</p></li>
                            <li><p>Successful stories</p></li>
                            <li><p>Upcoming events</p></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><span>Support</span></li>
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