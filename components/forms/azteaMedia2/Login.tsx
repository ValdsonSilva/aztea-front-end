"use client";

import Image from "next/image";
import AzteaIcon from "../../../public/aztea-logos/aztea-media-icon.png";
import { ILoginForm } from "../Login";
import Link from "next/link";

const inputStyle = `
    w-[303px] h-[44px] rounded-[10px] 
    border-solid border-[var(--gray)] 
    bg-[var(--white)] p-2.5 mb-[22px]
    text-[15px] outline-none
`

const linkStyle = "text-[12px] font-medium"

function LoginForm({showForm}: ILoginForm) {

    return (
        <div className={`${showForm ? "flex" : "hidden"} bg-[var(--black)] justify-center min-h-max items-center mb-[36px]`}>
            <form action="" method="post" className="flex flex-col justify-center items-center min-h-screen">
                <figure className="mb-[40px]">
                    <Image
                        src={AzteaIcon}
                        alt="Aztea media icon"
                        priority
                        width={200}    
                        height={200}
                    />
                </figure>
                <h1 className="text-[var(--white)] text-[25px] font-medium mb-[27px]">Sign In</h1>

                <input type="email" className={inputStyle}/>

                <input type="password" className={inputStyle}/>

                <button type="submit" 
                        className="w-[303px] h-[35px] rounded-[10px] 
                                    border border-solid border-[var(--gray)] 
                                    mb-[22px] text-[20px] font-medium cursor-pointer" 
                >
                                        Let's go
                </button>

                <Link href={"#"} className="mb-[22px] text-[13px]">
                    forgot password?
                </Link>

                <div className="flex justify-center gap-10 w-[303px] mb-[22px]">
                    <Link href={""} className={linkStyle}>About</Link>
                    <Link href={""} className={linkStyle}>Privicy Policy</Link>
                    <Link href={""} className={linkStyle}>Terms of Service</Link>
                </div>

                <Link href={"#"} className="text-[13px]">
                    Don't have an account?
                </Link>
            </form>
        </div>
    )
}

export default LoginForm;