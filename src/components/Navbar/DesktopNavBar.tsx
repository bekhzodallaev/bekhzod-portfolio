'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { FaCameraRetro } from "react-icons/fa6";

const DesktopNavbar = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const navLinkClass = (path: string) =>
    `relative pb-1 transition-colors duration-200
     after:absolute after:left-0 after:bottom-0
     after:h-[2px] after:bg-[#A3E635]
     after:transition-all after:duration-300
     ${
       pathname === path
         ? 'text-[#0F172A] dark:text-white after:w-full'
         : 'text-[#64748B] dark:text-gray-400 after:w-0 hover:text-[#0F172A] dark:hover:text-white hover:after:w-full'
     }`;

  return (
    <nav
      className="hidden md:flex w-full h-[64px] justify-center sticky top-0 z-50 dark:bg-[#0B0B0B]"
      style={{ backgroundColor: 'var(--navbar)' }}
    >
      <div className="w-full max-w-[1024px] px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-[#0F172A] text-[22px] font-liberation font-bold transition-opacity duration-200 hover:opacity-75 dark:text-white"
        >
          Bekhzod Allaev
        </Link>

        {/* Navigation */}
        <div className="flex gap-8 items-center justify-center">
          <Link href="/" className={navLinkClass('/')}>
            Home
          </Link>

          <Link href="/about" className={navLinkClass('/about')}>
            About
          </Link>

          <Link href="/blog" className={navLinkClass('/blog')}>
            Blog
          </Link>

          <Link href="/projects" className={navLinkClass('/projects')}>
            Projects
          </Link>

          <Link href="/contact" className={navLinkClass('/contact')}>
            Contact
          </Link>

           <Link href="/gallery" className={navLinkClass('/gallery')}>
            <FaCameraRetro size={20} />
          </Link>
        </div>

        {/* Actions */}
        <div className="flex gap-8 items-center">
          <button
            onClick={() =>
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
            className="transition-opacity duration-200 hover:opacity-70"
          >
            {resolvedTheme === 'dark' ? <Sun /> : <Moon />}
          </button>

          <a
            href="/CV.pdf"
            download
            className="bg-[#D4FF33] text-[#0F172A] px-4 py-2 rounded-md font-medium transition-all duration-200 hover:brightness-110"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavbar;