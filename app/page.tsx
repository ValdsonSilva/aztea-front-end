"use client"

import LoginForm from "../components/forms/azteaMedia2/Login";
import { useContext, useState } from "react";
import { AccessHeader } from "@/components/header/AccessHeader";
import BaseBackgroundLayout from "@/components/layout/BaseBackgroundLayout";
import { authContext, AuthProvider, useAuthContext } from "@/services/authContext";
import MenuCard from "@/components/popups/MenuCard";


export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const { isUserAuthenticated } = useAuthContext();
  console.log("isUserAuthenticated", isUserAuthenticated);

  const [showMenuCard, setShowMenuCard] = useState(false)

  return (
    <BaseBackgroundLayout>
      <AccessHeader state={showForm} setShowForm={setShowForm} />

      {showForm ? (
        <LoginForm showForm={showForm} />
      ) : (
        <div className="flex flex-col items-center justify-center
                      min-h-[70vh] sm:min-h-[75vh] md:min-h-screen
                      px-4 sm:px-6 md:px-8">
          <h1
            className="text-[var(--yellow)] font-normal text-center
                     text-3xl sm:text-4xl md:text-6xl lg:text-7xl"
          >
            AZTEA MEDIA WELCOME YOU
          </h1>

          {/* Use button para acessibilidade no toggle */}
          <button
            type="button"
            onClick={() => setShowMenuCard(!showMenuCard)}
            className="mt-3 md:mt-4 text-[var(--yellow)] font-normal
                     text-sm sm:text-base md:text-2xl
                     underline-offset-4 hover:underline focus:underline
                     focus:outline-none"
          >
            WHAT DO YOU WANT TO EXPLORE TODAY?
          </button>

          <div
            className="w-full mt-4 md:mt-6
                     flex justify-center md:justify-end
                     px-0 sm:px-2 md:px-5"
          >
            {showMenuCard ? <MenuCard /> : null}
          </div>
        </div>
      )}

      <div className="mb-12 sm:mb-16 md:mb-24 lg:mb-48 px-4">
        <blockquote
          className="mx-auto max-w-prose text-center italic
                   text-[var(--yellow)]
                   text-sm sm:text-base md:text-lg"
        >
          “One randomly quote according to the person”
          <span className="block mt-2 text-xs sm:text-sm md:text-base font-light">
            — 2025, Annoying Berky
          </span>
        </blockquote>
      </div>
    </BaseBackgroundLayout>
  );
}