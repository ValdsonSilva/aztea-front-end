"use client"

import Image, { getImageProps } from "next/image";
import LoginForm from "../components/forms/azteaMedia2/Login";
import { useState } from "react";
import AzteaBackGround from "../public/aztea-logos/current-backgroun.png"
import { AccessHeader } from "@/components/header/AccessHeader";


const imageProps = getImageProps({
  src: "../public/aztea-logos/current-backgroun.png",
  alt: "The Aztea-media's background",
  width: 1000,
  height: 700,
})


export default function Home() {

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center align-middle bg">
        <AccessHeader state={showForm} setShowForm={setShowForm}/>
        <div className="z-0">
          <figure className="relative">
            <Image
              src={AzteaBackGround}
              alt={imageProps.props.alt}
              unoptimized
              fill
              priority
            />
          </figure>
        </div>

        {showForm ? (
          <LoginForm showForm={showForm}/>
        ) :  (
          <div className="flex flex-col justify-center items-center min-h-screen">
              <h1 className="text-[var(--yellow)] text-[69px] font-normal">AZTEA MEDIA WELCOME YOU</h1>
              <h3 className="text-[var(--yellow)] text-[28px] font-normal">WHAT  DO YOU WANT TO EXPLORE TODAY?</h3>
          </div>
        )}

        <div className="mb-[200px]">
          <blockquote className="text-center text-lg italic text-[var(--yellow)]">
          “A random quote for you”
            <span className="block mt-2 text-sm font-light">— 2025, Annoying Berky</span>
          </blockquote>
        </div>
    </div>
  );
}