'use client'
import { FormEvent } from "react";
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Form() {
    const router = useRouter();
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const response = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false
        });

        console.log("login/form.tsx:", {response});
        if (!response?.error){
            router.push("/");
            router.refresh();
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 mx-auto max-w-md mt-10">
            <input name="email" className="border border-black text-black" type="email"/>
            <input name="password" className="border border-black text-black" type="password"/>
            <button type="submit">Login</button>
        </form>      
    )
}