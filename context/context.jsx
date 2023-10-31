"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggleBtn = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };
return(

  <ThemeContext.Provider value={{ toggleBtn, mode }}>
    <div className={` transition duration-300 ease-linear ${mode==="light" ? "bg-white text-[" : "bg-blackk text-white"}     `}>{children}</div>
  </ThemeContext.Provider>)
};
