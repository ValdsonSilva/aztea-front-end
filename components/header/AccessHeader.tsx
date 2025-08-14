"use client";

import { FaCircleXmark } from "react-icons/fa6";

interface IAccessHeaderDTO {
    state: boolean
    setShowForm: (value: boolean) => void;
}

export function AccessHeader( {state, setShowForm}:IAccessHeaderDTO ) {

    return (
        <div className="fixed top-0 flex justify-end w-full h-[80px] bg-transparent z-10"> 
            <button onClick={() => setShowForm(!state)} className="text-[var(--yellow)] cursor-pointer mt-16 mr-32">
                {state ? <FaCircleXmark size={20}/> : "LOGIN"}
            </button>
        </div>
    )
}