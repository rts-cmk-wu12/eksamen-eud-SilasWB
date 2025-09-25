// taget fra gammel projekt

"use server"

import { NextResponse } from "next/server"

export default async function middleware(request) {


     const cookie = request.cookies.get("login")

     if (!cookie) {
        return NextResponse.redirect(new URL("/", request.url));
     }

}

export const config = {
    matcher: ["/profile/:path*"]
}