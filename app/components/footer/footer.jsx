import React from "react";

import Link from "next/link";
import { ImTwitter, ImFacebook } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full h-80  text-stone-200 border-t border-white p-0">
      <div
        className="h-64  bg-blackk flex gap-x-8 px-16 mx-auto items-center justify-around 
         mmd:grid-cols-2">
        <div className="text-left">
          <h1 className="uppercase text-xl  font-bold tracking-wide mb-3 text-slate-100 pl-1">
            CONTACT US
          </h1>
          <div className="mb-2 text-stone-300">
            <div className="text-right w-full flex justify-start ">
              <Link href="https://twitter.com/home" className="ml-2">
                <ImTwitter className="text-blue-400 text-lg  " />
              </Link>
              <Link href="https://www.facebook.com" className="ml-2">
                <ImFacebook className="text-blue-700 text-lg " />
              </Link>
              <Link href="https://instagram.com/" className="ml-2">
                <FaInstagramSquare className="text-pink-800 text-lg " />
              </Link>
            </div>
          </div>
        </div>
        <div className="mmd:text-left sm:text-right">
          <h1 className="uppercase text-xl font-bold tracking-wide mb-3 text-slate-100">
            CHECK OUT{" "}
          </h1>

          <ul className="list-disc pl-5 mmd:list-none  ">
            <li className="px-2 tracking-wide  ">
              <Link href="/">Home</Link>
            </li>
            <li className="px-2 tracking-wide">
              <Link href="/about" className="whitespace-nowrap">
                About
              </Link>
            </li>
            <li className="px-2 tracking-wide">
              <Link href="/menu">Store</Link>
            </li>
            <li className="px-2 tracking-wide">
              <Link href="/reviews">Categories</Link>
            </li>
            <li className="px-2 tracking-wide">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-16 bg-black px-16 ">
        <h1 className="text-xs pt-6  text-stone-400 tracking-wide ">
          &copy;All rights reserved by YdenizK 2023.
        </h1>
      </div>
    </div>
  );
}

export default Footer;
