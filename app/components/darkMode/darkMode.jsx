
"use client"

import { ThemeContext } from "@/app/context/context";
import React, { useContext } from "react";

function DarkMode() {


const {toggleBtn,mode}=useContext(ThemeContext)


  return (
    <div onClick={toggleBtn}
      className="w-12 h-6 border border-pink-950 rounded-full 
    flex justify-around items-center  relative  cursor-pointer "
    >
      <div className="text-xs text-pink-950">D</div>
      <div className="text-xs text-pink-950">L</div>
      <div
        className={`h-5 w-6 bg-pink-950  rounded-full absolute  ${
          mode === "light" ? "right-[3px] " : "left-[3px] "
        } `}
      ></div>
    </div>
  );
}

export default DarkMode;
