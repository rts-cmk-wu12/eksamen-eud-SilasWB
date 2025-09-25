"use server"

import { cookies } from "next/headers"

export default async function ButtonModRemover() {

const cookieStore = await cookies();

cookieStore.delete("auth_token")
cookieStore.delete("userid")
cookieStore.delete("login")


}
