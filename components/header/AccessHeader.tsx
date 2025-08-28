"use client";

import { authContext, useAuthContext } from "@/services/authContext";
import { useContext } from "react";
import { FaCircleXmark } from "react-icons/fa6";

interface IAccessHeaderDTO {
    state: boolean
    setShowForm: (value: boolean) => void;
}

// const isUSerAuthenticate = localStorage.getItem("userName");

export function AccessHeader({ state, setShowForm }: IAccessHeaderDTO) {

    const { isUserAuthenticated, userName } = useAuthContext();

    return (
        <div className="fixed top-0 flex justify-end w-full h-[80px] bg-transparent z-10">
            <button onClick={() => setShowForm(!state)} className="text-[var(--yellow)] cursor-pointer mt-16 mr-32">
                {/* {isUserAuthenticated ? userAuthenticatedName : (
                    state ? "BACK" : "LOGIN"
                )} */}
                {isUserAuthenticated ? userName : "LOGIN"}
            </button>
        </div>
    )
}

// Remove the custom useContext stub, as React's useContext is now imported.
