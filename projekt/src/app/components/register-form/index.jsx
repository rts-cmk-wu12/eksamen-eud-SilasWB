// taget fra tidligere projekt

"use client";

import createUserForm from "@/actions/createUserform/createUserform";
import { useActionState, useEffect, useState } from "react";

export default function CreateUserForm() {
	const [formState, formAction, isPending] = useActionState(createUserForm)

	return (
		<form action={formAction}>
			<div>
				<label>
					<span>Email</span>
					<input type="email" name="email" defaultValue={formState?.data?.email} />
	
				</label>
			</div>
			<div>
				<label>
					<span>Password</span>
					<input type="password" name="password" defaultValue={formState?.data?.password} />
				</label>
			</div>
			<div>
				<label>
					<span>Firstname</span>
					<input type="text" name="firstname" defaultValue={formState?.data?.firstname} />
				</label>
			</div>
			<div>
			<label>
					<span>Lastname</span>
					<input type="text" name="lastname" defaultValue={formState?.data?.lastname} />
				</label>
			</div>
			<button type="submit">Opret</button>
		</form>
	);
}