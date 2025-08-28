"use client";

import { ILoginForm } from "../Login";
import Link from "next/link";
import { z } from "zod";
import React, { useContext, useState } from "react";
import { VscLoading } from "react-icons/vsc";
import Image from "next/image";
import AzteaIcon from "../../../public/aztea-logos/aztea-media-icon.png";
import { authContext, useAuthContext } from "@/services/authContext";
import { useRouter } from "next/navigation";


const loginSchema = z.object({
    email: z.string().email({ message: "Type a valid e-mail" }),
    password: z.string().min(6, { message: "The password should have 6 characters at minimum" })
});

const inputStyle = `
    w-[303px] h-[44px] rounded-[15px]
    border-2 border-solid border-[var(--gray)]
    bg-[#f5ecd7] text-[var(--black)] p-4 mb-[22px]
    text-[18px] outline-none font-medium
`;

const inputErrorStyle = `
    w-[303px] h-[44px] rounded-[15px]
    border-2 border-solid border-red-500
    bg-[#f5ecd7] text-[var(--black)] p-4 mb-[22px]
    text-[18px] outline-none font-medium
`;

const buttonStyle = `
    w-[303px] h-[44px] rounded-[15px]
    border-2 border-solid border-[var(--gray)]
    bg-transparent text-[var(--white)] text-[22px] font-medium
    mb-[22px] cursor-pointer transition-all
    hover:bg-[var(--gray)] hover:text-[var(--black)]
`;

const linkStyle = "text-[12px] font-medium";

function LoginForm({ showForm }: ILoginForm) {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState<{ email?: string, password?: string }>({});
    const [loading, setLoading] = useState<boolean>(false);
    const { login } = useAuthContext();
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: undefined });
    };
    const navigator = useRouter();

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            login();
            setLoading(false);
        }, 2000);
        login();
        navigator.replace("/");
    }

    // function handleSubmit(e: React.FormEvent) {
    //     e.preventDefault();
    //     setLoading(true);
    //     const result = loginSchema.safeParse(formData);

    //     setTimeout(() => {
    //         () => console.log("Carregando");
    //     }, 5000)

    //     try {
    //         if (!result.success) {
    //             const fieldErrors: { email?: string; password?: string } = {};
    //             result.error.errors.forEach(err => {
    //                 if (err.path[0]) fieldErrors[err.path[0] as "email" | "password"] = err.message;
    //             });
    //             setErrors(fieldErrors);
    //             if (login) {
    //                 login();
    //             }
    //         } else {
    //             setErrors({});
    //             // Aqui você pode prosseguir com o login
    //         }
    //     } catch (error) {
    //         console.log("erro no processamento");
    //     } finally {
    //         setLoading(false);
    //     }
    // }

    return (
        <div
            className={`${showForm ? "flex" : "hidden"} justify-center min-h-screen items-center mb-[36px]`}
        >
            <form onSubmit={handleSubmit} method="post" className="flex flex-col justify-center items-center min-h-screen w-full max-w-md">
                <figure className="mb-[40px] flex flex-col items-center">
                    <Image
                        src={AzteaIcon}
                        alt="Aztea media icon"
                        priority
                        width={200}
                        height={80}
                        style={{ objectFit: "contain" }}
                    />
                </figure>

                <h1 className="text-[var(--white)] text-[32px] font-normal mb-[27px]">Let's get started</h1>

                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    required
                    placeholder="Email"
                    onChange={handleInputChange}
                    className={errors.email ? inputErrorStyle : inputStyle}
                    autoComplete="email"
                />
                {errors.email && (
                    <span className="text-red-500 text-[13px] mb-[10px] mt-[-18px]">{errors.email}</span>
                )}

                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    required
                    placeholder="Password"
                    onChange={handleInputChange}
                    className={errors.password ? inputErrorStyle : inputStyle}
                    autoComplete="current-password"
                />
                {errors.password && (
                    <span className="text-red-500 text-[13px] mb-[10px] mt-[18px]">{errors.password}</span>
                )}

                <button
                    type="submit"
                    className={buttonStyle}
                    aria-busy={loading}
                >
                    {loading ? <VscLoading /> : "Sign in"}
                </button>

                <div className="w-[303px] flex justify-end mb-[22px]">
                    <Link href={"#"} className="text-[13px]">forgot password?</Link>
                </div>

                <div className="flex justify-center gap-10 w-[303px] mb-[22px]">
                    <Link href={""} className={linkStyle}>About</Link>
                    <Link href={""} className={linkStyle}>Privacy Policy</Link>
                    <Link href={""} className={linkStyle}>Terms of service</Link>
                </div>

                <div className="w-[303px] flex justify-center">
                    <Link href={"#"} className="text-[13px]">
                        Don't have an account?
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;