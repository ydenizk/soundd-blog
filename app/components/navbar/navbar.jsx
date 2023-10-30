"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DarkMode from "../darkMode/darkMode";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { status, data: session } = useSession();
  const router = useRouter();

  /* Dark MOde... */
  const handleMouseEnter = () => {
    setOpen(true);
  };
  const handleMouseLeave = () => {
    setOpen(false);
  };


  return (
    <nav className="w-full border-b border-black flex justify-center items-center mx-auto">
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
                <div className="absolute pt-2 sm:pt-2 sm:-left-4">
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
            <li className="mx-1">
              <DarkMode />
            </li>
          </ul>

          <ul className="w-full flex  justify-end items-center mmd:justify-between ">
            {status === "authenticated" && (
              <li className="mr-2 ">
                <Link
                  href="/dashboard"
                  className="whitespace-nowrap font-semibold sm:text-base xs:text-sm
                   bg-slate-300 capitalize  text-slate-700 transition hover:bg-slate-400 border p-2 border-slate-200"
                >
                  My Dashboard
                </Link>
              </li>
            )}

            {status === "authenticated" ? (
              <div className="flex flex-col justify-center items-center gap-1 mmd:flex-row-reverse">
                <Image
                  src={session?.user?.image || "/logo.png"}
                  width={35}
                  height={35}
                  className="rounded-full border-2 border-slate-500"
                  alt="profile logo"
                />
                <li
                  className=" ml-2 mr-1 border border-slate-400 p-1 transition text-xs
               hover:bg-slate-400  "
                >
                  <button
                    className="whitespace-nowrap"
                    onClick={() => signOut()}
                  >
                    Sign Out
                  </button>
                </li>
              </div>
            ) : (
              <li className="ml-2   border border-slate-400 p-1 transition hover:bg-slate-400 mmd:mx-auto ">
                <Link href="/sign-in">Sign in</Link>
              </li>
            )}

       
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
