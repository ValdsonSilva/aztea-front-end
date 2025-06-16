"use client"

import Image, { getImageProps } from "next/image";
import Link from "next/link";
import AzteaBlackLogo from "../public/aztea-logos/aztea-black.png"
import { useState } from "react";
import {FaXRay} from "react-icons/fa"
import { FaCircleXmark} from "react-icons/fa6";


const imageProps = getImageProps({
  src: "../public/aztea-logos/aztea-black.png",
  alt: "The Aztea-media logo black with white letters",
  width: 1000,
  height: 700,
})

const formInputStyle = `
  bg-[var(--white)] text-[var(--black)] w-full p-2 rounded-lg
  outline-0
`

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
                  items-center rounded-2xl w-[200px] 
                  h-[60px] bg-[var(--white)] text-[var(--black)] 
                  text-[18px] font-bold ml-[60%] cursor-pointer"
                  onClick={() => setShowForm(true)}
              >
                Let's go :)
            </button>
          </div>  
      </div>
      <div className={`${showForm ? "flex" : "hidden"} flex-col items-center bg-[var(--black)] border-l border-white w-[30%] h-dvh z-10 text-white absolute right-0 top-0`}>
          <form action="" className="flex flex-col items-center gap-10 w-full h-[400px] mt-[50px] p-20">
            <button type="button" onClick={() => setShowForm(false)} className="flex absolute left-5 top-5 text-white cursor-pointer">
              <FaCircleXmark size={20}/>
            </button>
    
            <h1 className="font-black text-3xl text-center">Welcome to Aztea-Media</h1>
            <input type="email" placeholder="Inform your email" className={formInputStyle}/>
            <input type="password" placeholder="Inform your password" className={formInputStyle}/>
            <button type="submit" className="border-1 border-white p-3 w-36 rounded-lg">sign in</button>
          </form>
      </div>
    </div>
  );
}
