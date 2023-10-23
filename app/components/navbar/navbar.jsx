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
      <div className="w-full max-w-6xl flex justify-center items-center p-4 mmd:flex-col  ">
        <Link href="/" className="flex-1 mmd:mb-2">
          <Image src="/logo.png" width={120} height={120} alt="logo" />
        </Link>

        <div className="flex-2 flex justify-between  items-center tracking-wide mmd:flex-col ">
          <ul className="flex justify-between items-center relative z-10 mmd:mb-4">
            <li className="mr-2 ">
              <Link
                href="/"
                className="capitalize transition hover:text-slate-600 text-lg sm:text-base xs:text-sm "
              >
                Homepage{" "}
              </Link>
            </li>
            <li className="mr-2">
              <Link
                href="/about"
                className="capitalize transition hover:text-slate-600 text-lg sm:text-base xs:text-sm "
              >
                About
              </Link>
            </li>
            <li className="mr-2">
              <Link
                href="/store"
                className="capitalize transition hover:text-slate-600 text-lg sm:text-base xs:text-sm "
              >
                Store
              </Link>
            </li>
            {/* dropdown.. */}
            <li
              className="mr-2 relative cursor-pointer transition hover:text-slate-600 text-lg sm:text-base xs:text-sm "
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Categories
              {open && (
                <div className="absolute pt-3 sm:pt-2 sm:-left-4">
                  <ul className="  bg-blackk text-customWhite   ">
                    <li className="p-2 transition hover:bg-slate-600 pr-8">
                      <Link
                        href="/categories/classic-rock"
                        className="whitespace-nowrap  sm:text-sm "
                      >
                        Classic Rock
                      </Link>
                    </li>
                    <li className="p-2 transition hover:bg-slate-600 pr-8">
                      <Link
                        href="/categories/indie"
                        className="whitespace-nowrap  sm:text-sm "
                      >
                        Indie
                      </Link>
                    </li>
                    <li className="p-2 transition hover:bg-slate-600 pr-8">
                      <Link
                        href="/categories/heavy-metal"
                        className="whitespace-nowrap  sm:text-sm "
                      >
                        Heavy metal
                      </Link>
                    </li>
                    <li className="p-2 transition hover:bg-slate-600 pr-8">
                      <Link
                        href="/categories/psychedelic"
                        className="whitespace-nowrap  sm:text-sm "
                      >
                        Psychedelic
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            {/* ..dropdown end */}
            <li className="mr-2">
              <Link
                href="/contact"
                className="capitalize transition hover:text-slate-600 text-lg sm:text-base xs:text-sm "
              >
                Contact
              </Link>
            </li>
            <li className="mr-2">
              <Link
                href="/dashboard"
                className=" font-semibold sm:text-base xs:text-sm text-green-900 capitalize transition hover:text-slate-600"
              >
                Dashboard
              </Link>
            </li>
          </ul>

          <ul className="w-full flex justify-between items-center  ">
            <li className="mx-1">
              <DarkMode />
            </li>

            <li className=" ml-2 mr-1 border border-slate-400 p-1 transition hover:bg-slate-400  ">
              <Link href="/">Sign Out</Link>
            </li>

            {/*    <li className="ml-2   border border-slate-400 p-1 transition hover:bg-slate-400 ">
              <Link href="sign-in">Sign in</Link>
            </li> */}

            {/*     <Link href="/cart">
              <LuShoppingCart />
            </Link> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
