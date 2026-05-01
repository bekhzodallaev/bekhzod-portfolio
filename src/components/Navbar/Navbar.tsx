'use client';

import Link from 'next/link'
import React from 'react'
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";


const Navbar = () => {
  const {theme, setTheme} = useTheme();

  return (
    <nav className='w-screen h-[64px] flex justify-center'
      style={{ backgroundColor: "var(--navbar)" }}
    >
      <div className='w-[1024px] flex justify-between items-center'>
        <h1 className='text-[0F172A] text-[28px]'>Bekhzod Allaev</h1>
      <div className='flex gap-[32px] text-[#64748B]'>
         <Link href="/" className=''>Home</Link>
         <Link href="/about">About</Link>
         <Link href="/blog">Blog</Link>
         <Link href="/projects">Projects</Link>
         <Link href="/contact">Contact</Link>
      </div>
      <div className='flex gap-[32px] items-center'>
        <button onClick={() => setTheme(theme == "dark" ? "light" : "dark")}>
          {theme == "dark" ? <Sun /> : <Moon />}
        </button>
        <a href="" download={true} className='bg-[#D4FF33] text-[#64748B] pt-1 pb-1 pl-3 pr-3 rounded'>Resume</a>
      </div>
      </div>
    </nav>
  )
}

export default Navbar
