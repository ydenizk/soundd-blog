"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuShoppingCart, LuSearch, LuPlusCircle } from "react-icons/lu";
import DarkMode from "../darkMode/darkMode";


function Navbar() {
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <nav className="w-full border-b border-black flex justify-center items-center ">
      <div className="w-full max-w-6xl flex justify-center items-center p-4 ">
        <Link href="/" className="flex-1">
          <Image src="/logo.png" width={120} height={120} alt="logo" />
        </Link>

        <div className="flex-2 flex justify-between  items-center tracking-wide">
          <ul className="flex justify-between items-center relative z-10">
            <li className="mr-2">
              <Link
                href="/"
                className="capitalize transition hover:text-slate-600 text-lg "
              >
                Homepage{" "}
              </Link>
            </li>
            <li className="mr-2">
              <Link
                href="/about"
                className="capitalize transition hover:text-slate-600 text-lg "
              >
                About
              </Link>
            </li>
            <li className="mr-2">
              <Link
                href="/store"
                className="capitalize transition hover:text-slate-600 text-lg"
              >
                Store
              </Link>
            </li>
            {/* dropdown.. */}
            <li
              className="mr-2 relative cursor-pointer transition hover:text-slate-600 text-lg"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Categories
              {open && (
                <div className="absolute pt-3">
                  <ul className="  bg-blackk text-customWhite   ">
                    <li className="p-2 transition hover:bg-slate-600 pr-8">
                      <Link
                        href="/categories/classic-rock"
                        className="whitespace-nowrap  "
                      >
                        Classic Rock
                      </Link>
                    </li>
                    <li className="p-2 transition hover:bg-slate-600 pr-8">
                      <Link href="/categories/indie">Indie</Link>
                    </li>
                    <li className="p-2 transition hover:bg-slate-600 pr-8">
                      <Link href="/categories/heavy-metal">Heavy metal</Link>
                    </li>
                    <li className="p-2 transition hover:bg-slate-600 pr-8">
                      <Link href="/categories/psychedelic">Psychedelic</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            {/* ..dropdown end */}
            <li className="mr-2">
              <Link
                href="/contact"
                className="capitalize transition hover:text-slate-600 text-lg"
              >
                Contact
              </Link>
            </li>
          </ul>

          <ul className="flex justify-center items-center">
       {/*      <li className="mr-2">
              <div className="flex justify-center text-sm items-center">
                <Link
                  href="/create"
                  className="flex whitespace-nowrap justify-center w-5 items-center"
                >
                  <div
                    className="border-2 text-green-900 border-green-900 rounded-full
               w-[18px] h-[18px] text-center leading-3 transition hover:bg-slate-200"
                  >
                    +
                  </div>
                </Link>
                <p className="ml-1 whitespace-nowrap pt-[1px] font-semibold">
                  Create New
                </p>
              </div>
            </li>
         
            <li className="ml-2 border border-slate-400 p-1 transition hover:bg-slate-400 ">
              <Link href="logout">Logout</Link>
            </li> */}
               <li className="">
              <DarkMode />
            </li>
                 <li className="ml-6 border border-slate-400 p-1 transition hover:bg-slate-400 ">
              <Link href="login">Login</Link>
            </li> 

            {/*     <Link href="/cart">
              <LuShoppingCart />
            </Link> */}
            <button className="ml-2 ">
              <LuSearch className="text-lg" />
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
