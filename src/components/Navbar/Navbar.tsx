'use client';

import Link from 'next/link'
import React from 'react'
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { usePathname } from 'next/navigation';


const Navbar = () => {
  const {theme, setTheme} = useTheme();
  const pathname = usePathname();


  return (
    <nav className='w-screen h-[64px] flex justify-center'
      style={{ backgroundColor: "var(--navbar)" }}
    >
      <div className='w-[1024px] flex justify-between items-center'>
        <Link href="/" className='text-[#0F172A] text-[22px] font-liberation font-bold'>Bekhzod Allaev</Link>
      <div className='flex gap-[32px]'>
         <Link href="/" className={`link ${pathname === '/' ? 'text-[#0F172A] border-b-2 border-b-[#A3E635] -translate-y-1' : 'text-[#64748B]'}`} >Home</Link>
         <Link href="/about" className={`link ${pathname === '/about' ? 'text-[#0F172A] border-b-2 border-b-[#A3E635] -translate-y-1' : 'text-[#64748B]'}`}>About</Link>
         <Link href="/blog" className={`link ${pathname === '/blog' ? 'text-[#0F172A] border-b-2 border-b-[#A3E635] -translate-y-1' : 'text-[#64748B]'}`}>Blog</Link>
         <Link href="/projects" className={`link ${pathname === '/projects' ? 'text-[#0F172A] border-b-2 border-b-[#A3E635] -translate-y-1' : 'text-[#64748B]'}`}>Projects</Link>
         <Link href="/contact" className={`link ${pathname === '/contact' ? 'text-[#0F172A] border-b-2 border-b-[#A3E635] -translate-y-1' : 'text-[#64748B]'}`}>Contact</Link>
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
