"use client";

import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

export interface IAuthContextType {
    isUserAuthenticated: boolean;
    setIsUserAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    login: () => void;
    logout: () => void;
    userName: string | null;
}

export const authContext = createContext<IAuthContextType | undefined>(undefined);


export const AuthProvider = ({ children }: { children: ReactNode }) => {


    const [isUserAuthenticated, setIsUserAuthenticated] = useState<boolean>(false);
    const [userName, setUserName] = useState<string | null>(null);

    const login = () => {
        localStorage.setItem("userName", "Valdson");
        console.log("logou")
        setIsUserAuthenticated(true);
    }

    const logout = () => {
        localStorage.clear();
        window.location.href = "/";
        setIsUserAuthenticated(false)
    }

    useEffect(() => {
        const userName = localStorage.getItem("userName");
        if (userName) {
            setIsUserAuthenticated(true);
            setUserName(userName);
        }
    }, [isUserAuthenticated]);

    return (
        <authContext.Provider value={{ isUserAuthenticated, setIsUserAuthenticated, login, logout, userName }}>
            {children}
        </authContext.Provider>
    )
}

export function useAuthContext() {
    const context = useContext(authContext);
    if (!context) {
        throw new Error("useAuthContext must be used within an AuthProvider");
    }
    return context;
}

// HOC que protege um componente
export const protectedRoute = (Component: React.ComponentType) => {
    return function ProtectedComponent(props: any) {
        const { isUserAuthenticated } = useAuthContext();

        if (!isUserAuthenticated) {
            console.log("IsUserAuthenticated at feed", isUserAuthenticated)
            console.log("não está logado")
            window.location.href = "/"; // redireciona no browser
            return null; // não renderiza nada
        }

        // Se estiver logado, renderiza o componente normalmente
        return <Component {...props} />;
    };
};
