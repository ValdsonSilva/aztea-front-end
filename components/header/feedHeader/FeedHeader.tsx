"use client";

import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa6";

export default function FeedHeader() {
  return (
    <header className="bg-[var(--black)] border-b border-white/10 fixed top-0 w-full mb-[81px] z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
        <div className="flex items-center gap-3">
          <Image src="/logo-aztea.svg" alt="AZTEA" width={36} height={36} />
          <span className="tracking-wide font-medium">MEDIA</span>
        </div>

        <div className="ml-auto flex items-center gap-3">
          <div className="relative w-40 sm:w-56">
            <input
              placeholder="Search"
              className="w-full rounded-full bg-white/10 text-white placeholder-white/60
                         border border-white/20 px-4 py-1.5 focus:outline-none focus:ring-2 focus:ring-white/30 cursor-pointer"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60">⌕</span>
          </div>
          <Link href="/account_page" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/15 border border-white/10 cursor-pointer">
            <FaUser />
          </Link>
        </div>
      </div>
    </header>
  );
}
