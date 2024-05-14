"use client"
import Link from "next/link";
import { TbGridDots } from "react-icons/tb";
import React, { useState } from 'react';

export default function HomeHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="flex justify-end p-5 text-sm">
      <div className="flex space-x-4 items-center">
        <p className="text-sm">developed by <Link href="https://twitter.com/xanmoy" className="text-blue-600">
          Team Xanmoy
        </Link>
        </p>
        {/* <Link href="https://mail.google.com" className="hover:underline">
          Gmail
        </Link>
        <Link href="https://image.google.com" className="hover:underline">
          Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2" />
        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">Sign in</button> */}
      </div>
    </header>
    
  );
}