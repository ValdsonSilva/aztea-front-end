import Link from "next/link";
import { BsCollection, BsFileBarGraph, BsFilePost, BsImage, BsPlayBtn} from "react-icons/bs";
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

const dashBoardCardStyle = `
    flex flex-col justify-center items-center bg-[var(--white)] 
    w-[165px] h-[114px] border-[0.6] border-[var(--gray)] border-solid rounded-[10px]
`;

const dashBoardCardDivision = `
    pl-5 w-full mt-2.5
`;

const dashBoardNumbersTitleStyle = `
    text-[var(--black)] font-semibold text-[20px]
`;

const dashBoardCardNumberStyle = `
    font-semibold text-[50px]
`;

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
                <Link href="/new_content" className="mt-[100px] border-[0.5px] border-solid border-[var(--white)] rounded-[10px] flex justify-center items-center gap-2 w-[90%] h-[45px] m-4 text-[15px] ">
                    <FaPlus size={20}/>
                    New content
                </Link>
            </div>

            <div className="mt-12 ml-16 mb-[59px] text-[var(--black)]">
                <h1 className="font-semibold leading-normal text-[30px] mb-10 ">
                    Dashboard
                </h1>
                {/* posts - faixas - videos - colagens/acessos */}
                <div className="flex gap-7">
                    <div className={dashBoardCardStyle}>
                        <div className={dashBoardCardDivision}>
                            <h3 className={dashBoardNumbersTitleStyle}>Posts</h3>
                        </div>
                        <h1 className={dashBoardCardNumberStyle}>20</h1>
                    </div>
                    <div className={dashBoardCardStyle}>
                        <div className={dashBoardCardDivision}>
                            <h3 className={dashBoardNumbersTitleStyle}>Faixa</h3>
                        </div>
                        <h1 className={dashBoardCardNumberStyle}>5</h1>
                    </div>
                    <div className={dashBoardCardStyle}>
                        <div className={dashBoardCardDivision}>
                            <h3 className={dashBoardNumbersTitleStyle}>Videos</h3>
                        </div>
                        <h1 className={dashBoardCardNumberStyle}>8</h1>
                    </div>
                    <div className="flex justify-center items-center bg-[var(--white)] 
                                    w-[277px] h-[114px] border-[var(--gray)] border-[0.6] border-solid 
                                    rounded-[10px] gap-5"  
                    >
                        <div>
                            <div>
                                <h3 className={dashBoardNumbersTitleStyle}>Colagens</h3>
                            </div>
                            <h1 className={dashBoardCardNumberStyle}>12</h1>
                        </div>
                        <div className=" flex bg-[var(--gray)] w-[1px] h-full relative top-0"></div>
                        <div>
                            <div>   
                                <h3 className={dashBoardNumbersTitleStyle}>Acessos</h3>
                            </div>
                            <h1 className={dashBoardCardNumberStyle}>42,5K</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}