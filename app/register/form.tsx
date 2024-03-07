'use client'
import { FormEvent } from "react";

export default function Form() {
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify({
                email: formData.get('email'),
                password: formData.get('password'),
            }),
        });
        console.log("register/form:", {response});
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 mx-auto max-w-md mt-10">
            <input name="email" className="border border-black text-black" type="email"/>
            <input name="password" className="border border-black text-black" type="password"/>
            <button type="submit">Register</button>
        </form>      
    )
}