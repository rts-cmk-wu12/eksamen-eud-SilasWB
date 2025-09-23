import Image from "next/image";
import Link from "next/link";
import logo from "@/imgs/Icon.svg"
import "./logo.scss"

export default function Logo() {
    return (
        <Link href="/">
          <div className="logo-wrap">
            <Image src={logo} alt="Logo"/>
            <p>SwapHub</p>
          </div>
        </Link>
    )
}