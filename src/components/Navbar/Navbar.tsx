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
    <nav className='w-screen h-[64px] flex justify-center sticky top-0 z-50'
      style={{ backgroundColor: "var(--navbar)" }}
    >
      <div className='w-[1024px] flex justify-between items-center'>
        <Link href="/" className='text-[#0F172A] text-[22px] font-liberation font-bold hover-200  duration-200 transition-colors hover:opacity-75'>Bekhzod Allaev</Link>
      <div className='flex gap-[32px]'>
        <Link href="/" className={`relative pb-1 transition-colors duration-200 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#A3E635] after:transition-all after:duration-300 ${pathname === '/' ? 'text-[#0F172A] after:w-full' : 'text-[#64748B] after:w-0 hover:text-[#0F172A] hover:after:w-full'}`}>Home</Link>
     <Link href="/about" className={`relative pb-1 transition-colors duration-200 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#A3E635] after:transition-all after:duration-300 ${pathname === '/about' ? 'text-[#0F172A] after:w-full' : 'text-[#64748B] after:w-0 hover:text-[#0F172A] hover:after:w-full'}`}>About</Link>

<Link href="/blog" className={`relative pb-1 transition-colors duration-200 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#A3E635] after:transition-all after:duration-300 ${pathname === '/blog' ? 'text-[#0F172A] after:w-full' : 'text-[#64748B] after:w-0 hover:text-[#0F172A] hover:after:w-full'}`}>Blog</Link>

<Link href="/projects" className={`relative pb-1 transition-colors duration-200 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#A3E635] after:transition-all after:duration-300 ${pathname === '/projects' ? 'text-[#0F172A] after:w-full' : 'text-[#64748B] after:w-0 hover:text-[#0F172A] hover:after:w-full'}`}>Projects</Link>

<Link href="/contact" className={`relative pb-1 transition-colors duration-200 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#A3E635] after:transition-all after:duration-300 ${pathname === '/contact' ? 'text-[#0F172A] after:w-full' : 'text-[#64748B] after:w-0 hover:text-[#0F172A] hover:after:w-full'}`}>Contact</Link>
      </div>
      <div className='flex gap-[32px] items-center'>
        <button onClick={() => setTheme(theme == "dark" ? "light" : "dark")}>
          {theme == "dark" ? <Sun /> : <Moon />}
        </button>
        <a href="" download={true} className='bg-[#D4FF33] text-[#64748B] pt-1 pb-1 pl-3 pr-3 rounded hover-200 duration-200 transition-colors hover:brightness-110'>Resume</a>
      </div>
      
      </div>
    </nav>
  )
}

export default Navbar
