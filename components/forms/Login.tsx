"use client"

import { FormEvent, useState } from "react";
import { FaCircleXmark } from "react-icons/fa6";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loginSchema, LoginForm } from "../../lib/schema/loginSchema";


interface ILoginForm {
    showForm: boolean,
    setShowForm: (value: boolean) => void,
}

const formInputStyle = `
  bg-[var(--white)] text-[var(--black)] w-[80%] p-2 rounded-lg outline-0
  md:w-full
`


export function Login({showForm, setShowForm}:ILoginForm) {
    
    const [loading, setLoading] = useState(false);
    const [logedIn, setLoggedIn] = useState(false);
    const [formData, setFormData] = useState<LoginForm>({email: "", password: ""});
    const [errors, setErrors] = useState<Partial<LoginForm>>({});

    const router = useRouter();

    const toLogin = async (event: FormEvent) => {
        event.preventDefault()
        // testando entrada de dados
        const testType = loginSchema.safeParse(formData);

        if (!testType.success) {
            const fieldErrors = testType.error.flatten().fieldErrors;
            setErrors({
                email: fieldErrors.email?.[0],
                password: fieldErrors.password?.[0]
            })
            return
        }
        setErrors({});
        setLoading(true)
        router.push("/dashboard")
    }

    const onResetForm = () => {
        setFormData({
            email: "",
            password: ""
        })
    }

    return (
        <div className={`${showForm ? "flex" : "hidden"} flex-col items-center bg-[var(--black)] w-full h-dvh z-10 text-white absolute right-0 top-0 md:w-[50%] md:border-l md:border-white lg:w-[30%] lg:border-l lg:border-white`}>
            <form action="" onSubmit={toLogin} className="flex flex-col items-center gap-10 w-full h-[400px] mt-[50px] p-20">
                <button type="button" onClick={() => setShowForm(false)} className="flex absolute left-5 top-5 text-white cursor-pointer">
                <FaCircleXmark size={20}/>
                </button>
                <h1 className="font-black text-3xl text-center">Welcome to Aztea-Media</h1>
                <input type="email" placeholder="Inform your email" className={formInputStyle} value={formData.email} onChange={(event) => setFormData({...formData, email: event.target.value})}/>
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                <input type={"password"} placeholder="Inform your password" className={formInputStyle} value={formData.password} onChange={(event) => setFormData({...formData, password: event.target.value})}/>
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

                <div className="flex justify-center items-center gap-2 lg:flex-row">
                    <Link href="/register" className="flex justify-center items-center bg-[var(--white)] text-[var(--black)] rounded-lg cursor-pointer font-light p-2 w-32 sm:p-3 sm:w-36">request access</Link>
                    <button type="submit" className="flex justify-center items-center border-1 border-white rounded-lg cursor-pointer font-lightd p-2 w-32 sm:p-3 sm:w-36">{loading ? "entering..." : "sign in"}</button>
                </div>
            </form>
      </div>
    )
}