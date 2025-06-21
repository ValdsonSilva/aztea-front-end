import Link from "next/link";
import { Bs1SquareFill, BsCollection, BsDatabaseX, BsFileBarGraph, BsFileBarGraphFill, BsFileEarmarkBarGraph, BsFileEarmarkBarGraphFill, BsFilePost, BsFullscreen, BsGraphUpArrow, BsImage, BsPlayBtn, BsShield, BsShieldExclamation, BsWindowFullscreen, BsWordpress } from "react-icons/bs";
import { FaHeadphonesAlt, FaRegPlayCircle } from "react-icons/fa";
import { FaHeadphones, FaHeadphonesSimple, FaImage, FaImages, FaPaperPlane, FaPencil, FaPlay, FaPlaystation, FaPlus, FaSatelliteDish, FaScreenpal, FaSheetPlastic, FaUser, FaVideo } from "react-icons/fa6";
import {FcCheckmark, FcDataProtection, FcDataSheet} from "react-icons/fc"
import { FiCheckSquare, FiShield } from "react-icons/fi";

const linkStyle = `
    flex justify-center items-center gap-2
`

const ulStyle = `
    text-left flex
    justify-start
`

export default function Dashboard() {
    return(
        <div className="w-full h-dvh flex justify-center bg-[var(--super-ligth-pink)]">
            {/* sideBar */}
            <div className="bg-[var(--black)] absolute left-0 top-0 h-full flex flex-col items-center gap-7 md:w-[30%] lg:w-[20%]">
                <figure className="mt-15">
                    <img src="#" alt="Aztea Media logo" />
                </figure>
                <div className="flex flex-col gap-5">
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
                </div>
                <Link href="/new_content" className="mt-[100px] border-1 rounded-[12px] flex justify-center items-center gap-2 w-[90%] h-[55px] m-4">
                    <FaPlus size={20}/>
                    New content
                </Link>
            </div>

            <div>
                <h1>Dashboard</h1>
                {/* posts - faixas - videos - colagens/acessos */}
                <div>
                    <div>
                        <h3>Posts</h3>
                        <h1>20</h1>
                    </div>
                    <div>
                        <h3>Faixa</h3>
                        <h1>5</h1>
                    </div>
                    <div>
                        <h3>Videos</h3>
                        <h1>8</h1>
                    </div>
                    <div>
                        <div>
                            <h3>Colagens</h3>
                            <h1>12</h1>
                        </div>
                        <div>
                            <h3>Acessos</h3>
                            <h1>42,5K</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}