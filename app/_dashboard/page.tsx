import { SideBar } from "@/components/sidebar/SideBar";

const dashBoardCardStyle = `
    flex flex-col justify-center items-center bg-[var(--white)] 
    w-[165px] h-[114px] border-[0.6] border-[var(--gray)] border-solid 
    rounded-[10px] shadow-xl
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

const thStye = `
    text-[20px] text-center
`;

const trStyle = `
    h-[79px]
`;

const h1Style = `
    font-semibold leading-normal text-[30px] mb-10 
`;

export default function Dashboard() {
    return(
        <section className="w-full h-fit flex justify-center bg-[var(--super-ligth-pink)]">
            <SideBar/>

            <main className="flex items-center w-screen">
                <div className="flex flex-col ml-[20%]">
                    {/* dashboard */}
                    <div className="mt-12 ml-16 mb-[59px] text-[var(--black)]">
                        <h1 className={h1Style}>
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
                                    <h3 className={dashBoardNumbersTitleStyle}>Tracks</h3>
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
                                            rounded-[10px] gap-5 shadow-md"  
                            >
                                <div>
                                    <div>
                                        <h3 className={dashBoardNumbersTitleStyle}>Collages</h3>
                                    </div>
                                    <h1 className={dashBoardCardNumberStyle}>12</h1>
                                </div>
                                <div className=" flex bg-[var(--gray)] w-[1px] h-full relative top-0"></div>
                                <div>
                                    <div>   
                                        <h3 className={dashBoardNumbersTitleStyle}>Clicks</h3>
                                    </div>
                                    <h1 className={dashBoardCardNumberStyle}>42,5K</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* recents activities */}
                    <div className="mt-[45px] ml-16 flex gap-[136px] text-[var(--black)]">
                        <div>
                            <div className="flex justify-start gap-[136px]">
                                <h1 className="font-semibold leading-normal text-[30px]">Recent Posts</h1>
                                <h1 className="font-semibold leading-normal text-[30px]">Drafts</h1>
                            </div>  
                
                            <div className="border-[0.6px] border-[var(--gray)] rounded-lg">
                                <table cellPadding={20} 
                                    cellSpacing={44} 
                                    className="text-[20px] bg-[var(--white)] w-[613px] 
                                                rounded-lg shadow-xl"
                                >
                                    <thead className="border-b-[0.6px] border-[var(--gray)]">
                                        <tr>
                                            <th className={thStye}>Title</th>
                                            <th  className={thStye}>Author</th>
                                            <th  className={thStye}>Data</th>
                                        </tr>
                                    </thead>

                                    <tbody className="text-center">
                                        <tr className={trStyle}>
                                            <td>Track’s title</td>
                                            <td>Fulano de tal</td>
                                            <td>2025, July 18</td>
                                        </tr>
                                        <tr className={trStyle}>
                                            <td>Track’s title</td>
                                            <td>Fulano de tal</td>
                                            <td>2025, July 23</td>
                                        </tr>
                                        <tr className={trStyle}>
                                            <td>Track’s title</td>
                                            <td>Fulano de tal</td>
                                            <td>2025, July 1st</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div>
                            <h2 className="font-semibold leading-normal text-[30px]">Main artist</h2>
                            <div className="overflow-x-auto border border-[var(--gray)] rounded-xl shadow-lg">
                                <table className="w-[388px] bg-white border border-gray-300 rounded-xl shadow-md overflow-hidden">
                                    <thead>
                                        <tr className="text-left">
                                        <th className="p-4">Artist</th>
                                        <th className="p-4">Views</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Linha 1 */}
                                        <tr className="border-t">
                                        <td className="p-4">
                                            <div className="flex items-start gap-4">
                                            <img src="/artist1.jpg" alt="Artist" className="w-12 h-12 rounded-full object-cover" />
                                            <div>
                                                <p className="font-semibold">Título da música</p>
                                                <p className="text-sm text-gray-600">Fulano de tal</p>
                                            </div>
                                            </div>
                                        </td>
                                        <td className="p-4 align-top font-bold text-right text-black">100.000</td>
                                        </tr>

                                        {/* Linha 2 */}
                                        <tr className="border-t">
                                        <td className="p-4">
                                            <div className="flex items-start gap-4">
                                            <img src="/artist2.jpg" alt="Artist" className="w-12 h-12 rounded-full object-cover" />
                                            <div>
                                                <p className="font-semibold">Título da música</p>
                                                <p className="text-sm text-gray-600">Fulano de tal</p>
                                            </div>
                                            </div>
                                        </td>
                                        <td className="p-4 align-top font-bold text-right text-black">80.000</td>
                                        </tr>

                                        {/* Linha 3 */}
                                        <tr className="border-t">
                                        <td className="p-4">
                                            <div className="flex items-start gap-4">
                                            <img src="/artist3.jpg" alt="Artist" className="w-12 h-12 rounded-full object-cover" />
                                            <div>
                                                <p className="font-semibold">Título da música</p>
                                                <p className="text-sm text-gray-600">Fulano de tal</p>
                                            </div>
                                            </div>
                                        </td>
                                        <td className="p-4 align-top font-bold text-right text-black">45.873</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>  
                    </div>

                    <div className="ml-16 mb-[133px] text-[var(--black)]">
                        <h1 className="font-semibold leading-normal text-[30px] mt-[45px]">Recent titles</h1>
                        <div className=" border-[0.6px] border-[var(--gray)] rounded-lg w-fit">
                            <table className="w-[614px] bg-[var(--white)] border-[0.6px] border-[var(--gray)] rounded-lg shadow-md overflow-hidden">
                                <tbody className="w-[614px]">
                                    {/* Linha 1 */}
                                    <tr className="border-b border-[var(--gray)] flex justify-around items-center">
                                        <td className="p-4 w-fit">
                                            <div>
                                                <p className="font-semibold w-fit">A revolução da IA no Brasil</p>
                                                <p className="text-sm text-gray-600 text-center">Fulano de tal</p>
                                            </div>
                                        </td>
                                        <td className=" p-4 align-top font-medium w-fit">Article</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>            
        </section>
    )
}