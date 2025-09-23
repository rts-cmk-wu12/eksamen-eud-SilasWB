// Taget fra tidligere projekt

"use client";

import doTheLoginThing from "@/actions/logindthing/logIndThingThing";
import { useActionState } from "react";
import { CircleLoader } from "react-spinners";
import Link from "next/link";
import "./login.scss"

const override = {
	display: "block",
	margin: "0 auto",
}

export default function LoginForm() {
	const [formState, formAction, isPending] = useActionState(doTheLoginThing);

	return isPending ? (
		<CircleLoader
			color="#0d0d7cff"
			loading={true}
			cssOverride={override}
			size={200}
		/>
	) : (
		<form action={formAction}>
			<section className="login">
			  <div>	
				<label>
					<h5>Email</h5>
					<input className="login__search-input" type="text" name="email" placeholder="Value" />
					<p>{formState?.properties?.email?.errors}</p>
				</label>
			</div>
			<div>
				<label>
					<h5>Password</h5>
					<input className="login__search-input" type="password" name="password" placeholder="Value"/>
					<p>{formState?.properties?.password?.errors}</p>
				</label>
			</div>
			<button type="submit">Sign in</button>
            <Link href="#">Forgot password?</Link>
			<p>{formState?.errors}</p>
            </section>
			
		</form>
	);
}
