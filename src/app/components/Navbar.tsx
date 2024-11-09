
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";

type NavbarProps = {
  toggleCartVisibility: () => void;
  isCartVisible: boolean;
};

export default function Navbar({ toggleCartVisibility }: NavbarProps) {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-black h-[80px] max-w-[1600px] mx-auto flex justify-between items-center px-4">
      <h1 className="text-xl md:text-3xl font-bold primary-color ml-4"><Link href="/">TalBites</Link></h1>
      
      <div className="hidden sm:flex gap-3 md:gap-6">
        <button className="rounded-lg h-8 w-20 border border-orange-500 bg-orange-500 text-white shadow-2xl">
          Log In
        </button>
        <button className="rounded-lg h-8 w-20 border border-orange-500 bg-orange-500 text-white shadow-2xl">
          Sign Up
        </button>
      </div>

      
      <button
        onClick={toggleCartVisibility}
        className="p-5 my-auto text-3xl text-orange-700"
      >
        <AiOutlineShoppingCart />
      </button>

      <ul className="hidden md:flex">
      <li className="p-5"><Link href="/about">About Us</Link></li>
        <li className="p-5"><Link href="/food">Food</Link></li>
       
      </ul>

      <div onClick={handleNav} className="block md:hidden mr-6 z-20 cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div className={nav ? "z-10 fixed h-full top-[80px] w-full ease-in-out duration-500" : "fixed top-[-100%]"}>
        <ul className="p-8 text-2x1 w-full bg-primary-color rounded-lg text-white">
          <li className="p-5"><Link href="/food">Food</Link></li>
          <li className="p-5"><Link href="/about">About us</Link></li>

          <div className="flex gap-4">
            <button className="rounded-lg h-12 w-28 bg-orange-900 shadow-2xl">
              <span className="relative z-10">Log In</span>
            </button>
            <button className="rounded-lg h-12 w-28 bg-orange-900 shadow-2xl">
              <span className="relative z-10">Sign Up</span>
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}
