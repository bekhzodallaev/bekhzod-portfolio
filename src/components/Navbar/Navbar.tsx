'use client';

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useTheme } from "next-themes";
import { Moon, MouseRight, Sun } from "lucide-react";
import { usePathname,  } from 'next/navigation';


const Navbar = () => {
  const {resolvedTheme, setTheme} = useTheme();
  // const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();
 
  useEffect(() => {
    setMounted(true);
  }, []);

  if(!mounted) return null;
  console.log({ resolvedTheme})

  return (
    <nav className='w-screen h-[64px] flex justify-center sticky top-0 z-50  dark:bg-[#0B0B0B]'
      style={{ backgroundColor: "var(--navbar)" }}
    >
      <div className='w-[1024px] flex justify-between items-center'>
        <Link href="/" className='text-[#0F172A] text-[22px] font-liberation font-bold hover-200  duration-200 transition-colors hover:opacity-75 dark:text-white'>Bekhzod Allaev</Link>
      <div className='flex gap-[32px]'>
        <Link href="/" className={`relative pb-1 transition-colors duration-200 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#A3E635] after:transition-all after:duration-300 ${pathname === '/' ? 'text-[#0F172A] dark:text-white after:w-full' : 'text-[#64748B] dark:text-gray-400 after:w-0 hover:text-[#0F172A] hover:after:w-full'}`}>Home</Link>
     <Link href="/about" className={`relative pb-1 transition-colors duration-200 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#A3E635] after:transition-all after:duration-300 ${pathname === '/about' ? 'text-[#0F172A] dark:text-white after:w-full' : 'text-[#64748B] dark:text-gray-400  after:w-0 hover:text-[#0F172A] hover:after:w-full'}`}>About</Link>

<Link href="/blog" className={`relative pb-1 transition-colors duration-200 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#A3E635] after:transition-all after:duration-300 ${pathname === '/blog' ? 'text-[#0F172A] dark:text-white after:w-full' : 'text-[#64748B] dark:text-gray-400  after:w-0 hover:text-[#0F172A] hover:after:w-full'}`}>Blog</Link>

<Link href="/projects" className={`relative pb-1 transition-colors duration-200 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#A3E635] after:transition-all after:duration-300 ${pathname === '/projects' ? 'text-[#0F172A] dark:text-white after:w-full' : 'text-[#64748B] dark:text-gray-400  after:w-0 hover:text-[#0F172A] hover:after:w-full'}`}>Projects</Link>

<Link href="/contact" className={`relative pb-1 transition-colors duration-200 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#A3E635] after:transition-all after:duration-300 ${pathname === '/contact' ? 'text-[#0F172A] dark:text-white after:w-full' : 'text-[#64748B] dark:text-gray-400  after:w-0 hover:text-[#0F172A] hover:after:w-full'}`}>Contact</Link>
      </div>
      <div className='flex gap-[32px] items-center'>
        <button onClick={() => setTheme(resolvedTheme == "dark" ? "light" : "dark")}>
          {resolvedTheme == "dark" ? <Sun /> : <Moon />}
        </button>
        <a href="" download={true} className='bg-[#D4FF33] text-[#64748B] pt-1 pb-1 pl-3 pr-3 rounded hover-200 duration-200 transition-colors hover:brightness-110'>Resume</a>
      </div>
      
      </div>
    </nav>
  )
}

export default Navbar
