import Link from "next/link";
import { BsCollection, BsFileBarGraph, BsFilePost, BsImage, BsPlayBtn } from "react-icons/bs";
import { FaHeadphones, FaPencil, FaPlus, FaUser } from "react-icons/fa6";
import { FiCheckSquare } from "react-icons/fi";


const linkStyle = `
    flex justify-center items-center gap-3
    text-[15px]
`;

const ulStyle = `
    text-left flex
    justify-start
`;

export function SideBar() {
    return (
            <div className="bg-[var(--black)] fixed left-0 top-0 flex min-h-screen flex-col items-center gap-7 md:w-[30%] lg:w-[20%]">
                <figure className="mt-15">
                    <img src="#" alt="Aztea Media logo" />
                </figure>
                <aside className="flex flex-col gap-5">
                    <ul className={ulStyle}>
                        <Link href={"/dashboard"} className={linkStyle}>
                            <FiCheckSquare size={20}/>
                            Dashboard
                        </Link>
                    </ul>
                    <ul className={ulStyle}>
                        <Link href={"#"} className={linkStyle}>
                            <BsFilePost size={20}/>
                            Posts
                        </Link>
                    </ul>
                    <ul className={ulStyle}>
                        <Link href={"#"} className={linkStyle}>
                            <FaHeadphones size={20}/>
                            Tracks
                        </Link>
                    </ul>
                    <ul className={ulStyle}>
                        <Link href={"#"} className={linkStyle}>
                            <BsPlayBtn size={20}/>
                            Videos
                        </Link>
                    </ul>
                    <ul className={ulStyle}>
                        <Link href={"#"} className={linkStyle}>
                            <BsCollection size={20}/>
                            Collages
                        </Link>
                    </ul>
                    <ul className={ulStyle}>
                        <Link href={"#"} className={linkStyle}>
                            <FaPencil size={20}/>
                            Poems
                        </Link>
                    </ul>
                    <ul className={ulStyle}>
                        <Link href={"#"} className={linkStyle}>
                            <FaUser size={20}/>
                            Users
                        </Link>
                    </ul>
                    <ul className={ulStyle}>
                        <Link href={"#"} className={linkStyle}>
                            <BsFileBarGraph className={linkStyle}/>
                            Statistic
                        </Link>
                    </ul>
                    <ul className={ulStyle}>
                        <Link href={"#"} className={linkStyle}>
                            <BsImage/>
                            Media
                        </Link>
                    </ul>
                </aside>
                <Link href="/new_content" className="mt-[100px] border-[0.5px] border-solid border-[var(--white)] rounded-[10px] flex justify-center items-center gap-2 w-[90%] h-[45px] m-4 text-[15px] ">
                    <FaPlus size={20}/>
                    New content
                </Link>
            </div>
    )
}