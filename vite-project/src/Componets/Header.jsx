import React, { useContext, useEffect, useState } from "react";
import logo from "./../assets/Images/logo.png";
import { HiMoon, HiOutlineMagnifyingGlass, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";

function Header() {
  const [toggle, setToggle] = useState(false);
  const {theme,setTheme}= useContext(ThemeContext)
  
  useEffect(() => {
    console.log("Theme",theme)
  },[] )
  return (
    <div className="flex items-center p-3 ">
      <img src='/logo.png' alt="logo" width={60} height={60} />
      <div className="flex items-center w-full p-2 mx-5 rounded-full bg-slate-200">
        <HiOutlineMagnifyingGlass />
        <input
          type="text"
          placeholder="Search games"
          className="w-full px-2 bg-transparent outline-none "
        />
      </div>
      <div>
        {theme=='light' ? (
          <HiMoon
            className="text[35px] bg-slate-200 text-black p-1 rounded-full h-9 w-9 cursor-pointer"
            onClick={() => {setTheme('dark');localStorage.setItem('theme','dark')}}
          />
        ) : (
          <HiSun
            onClick={() => {setTheme('light');localStorage.setItem('theme','light')}}
            className="text[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer h-9 w-9"
          />
        )}
      </div>
    </div>
  );
}

export default Header;
