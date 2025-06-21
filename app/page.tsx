"use client"

import Image, { getImageProps } from "next/image";
import AzteaBlackLogo from "../public/aztea-logos/aztea-black.png"
import Link from "next/link";
import { Login } from "@/components/forms/Login";
import { useState } from "react";


const imageProps = getImageProps({
  src: "../public/aztea-logos/aztea-black.png",
  alt: "The Aztea-media logo black with white letters",
  width: 1000,
  height: 700,
})


export default function Home() {

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex items-center justify-center w-full h-max">
      <div>
          <figure>
            <Image
              src={AzteaBlackLogo}
              alt={imageProps.props.alt}
              width={imageProps.props.width}
              height={imageProps.props.height}
              unoptimized
              className=" h-[600px]"
            />
          </figure>
          <div className=" w-full">
            <button 
                className="flex justify-center 
                  items-center rounded-2xl w-[150px] 
                  h-[40px] bg-[var(--white)] text-[var(--black)] 
                  text-[15px] font-bold ml-[60%] cursor-pointer
                  hover:bg-[var(--gray)]
                  md:w-[200px] md:h-[70px] md:text-[18px]
                  lg:w-[200px] lg:h-[70px] lg:text-[18px]"
                  onClick={() => setShowForm(true)}
            >
                Let's go :)
            </button>
          </div>  
      </div>
      <Login showForm={showForm} setShowForm={setShowForm}/>
    </div>
  );
}
