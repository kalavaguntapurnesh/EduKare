"use client";
import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Link from 'next/link';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-black flex justify-between h-24 w-full md:shadow-transparent shadow-xl md:fixed fixed md:top-0 top-0
     md:z-20 z-20 bg-white">
      <h1 className="  text-3xl text-red-500 font-bold  lg:pl-12 pl-6 pt-6 cursor-pointer">EDU<span className='text-primaryColor'>KARE.</span></h1>
      <ul className="hidden md:flex  pt-4">
        <li className="lg:p-4 p-[11px] cursor-pointer text-primaryColor font-medium hover:text-black"><Link href="/">Home</Link></li>
        <li className="lg:p-4 p-[11px] cursor-pointer text-primaryColor font-medium hover:text-black"><Link href="/about">About</Link></li>
        <li className="lg:p-4 p-[11px] cursor-pointer text-primaryColor font-medium hover:text-black"><Link href="/features">Features</Link></li>
        <li className="lg:p-4 p-[11px] cursor-pointer text-primaryColor font-medium hover:text-black"><Link href="/products">Services</Link></li>
        <li className="lg:p-4 p-[11px] cursor-pointer text-primaryColor font-medium hover:text-black"><Link href="/contact">Contact</Link></li>
        <li className="lg:p-4 p-[11px] cursor-pointer "><a href="" className="bg-red-500 
        rounded-[4px] text-white px-8 py-2.5 ">Get Started </a></li>

       
      </ul>

      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {!nav ? <AiOutlineMenu size={30} className=" mr-4 mt-6" /> : <AiOutlineClose size={30}
        className=" mr-4 mt-6" />}
      </div>

      <div
        className={
          !nav
            ? "md:hidden fixed left-[-100%] h-[75%] ease-in-out duration-1000 " 
            :  "md:hidden fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-[75%] bg-[#000300] ease-in-out duration-1000 rounded-b-lg z-10"
        }
      >
        <h1 className="w-full  text-3xl text-red-500 font-bold m-4 cursor-pointer">
          EDUKARE.
        </h1>
        <ul className=" uppercase p-4">
          <li className="p-4 border-b border-gray-600 text-white cursor-pointer"><Link href="/">Home</Link></li>
          <li className="p-4 border-b border-gray-600 text-white cursor-pointer"><Link href="/about">About</Link></li>
          <li className="p-4 border-b border-gray-600 text-white cursor-pointer"><Link href="/features">Features</Link></li>
          <li className="p-4 border-b border-gray-600 text-white cursor-pointer"><Link href="/products">Services</Link></li>
          <li className="p-4 text-white cursor-pointer"><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
