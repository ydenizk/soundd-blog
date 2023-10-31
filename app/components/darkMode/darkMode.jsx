
"use client"

import { ThemeContext } from "@/context/context";
import React, { useContext } from "react";

function DarkMode() {


const {toggleBtn,mode}=useContext(ThemeContext)


  return (
    <div onClick={toggleBtn}
      className="w-10 h-5 border border-slate-600 rounded-full 
    flex justify-around items-center  relative  cursor-pointer "
    >
      <div className="text-xs text-slate-600">D</div>
      <div className="text-xs text-slate-600">L</div>
      <div
        className={`h-4 w-5 bg-slate-600  rounded-full absolute  ${
          mode === "light" ? "right-[3px] " : "left-[3px] "
        } `}
      ></div>
    </div>
  );
}

export default DarkMode;
