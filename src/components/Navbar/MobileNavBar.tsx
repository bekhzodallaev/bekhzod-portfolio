'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import {
  House,
  UserRound,
  LibraryBig,
  FolderKanban,
  Mail,
  Moon,
  Sun,
  ChevronLeft,
  ChevronRight,
  FileText,
} from 'lucide-react';
import { useState } from 'react';
import { FaCameraRetro } from "react-icons/fa6";


export default function MobileNavbar() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();

  const [isOpen, setIsOpen] = useState(true);

  const links = [
    {
      href: '/',
      label: 'Home',
      icon: House,
    },
    {
      href: '/about',
      label: 'About',
      icon: UserRound,
    },
    {
      href: '/blog',
      label: 'Blog',
      icon: LibraryBig,
    },
    {
      href: '/projects',
      label: 'Projects',
      icon: FolderKanban,
    },
    {
      href: '/contact',
      label: 'Contact',
      icon: Mail,
    },
    {
      href: '/gallery',
      label:'Gallery',
      icon: FaCameraRetro,
    },
  ];

  return (
    <>
      {/* Bottom Navigation */}
      <nav
        className="
          md:hidden
          fixed
          bottom-0
          left-0
          right-0
          z-50
          border-t
          border-[#C5C9AD]
          bg-[#FAFAF7]/95
          dark:bg-[#0B0B0B]/95
          backdrop-blur-xl
        "
      >
        <div
          className="
            h-16
    w-full
    flex
    items-center
    justify-around
    px-2
          "
        >
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={`
                relative
                h-full
                min-w-[48px]
                flex
                flex-col
                items-center
                justify-center
                gap-1
                transition-colors
                duration-200
                ${
                  pathname === href
                    ? 'text-[#526600]'
                    : 'text-[#64748B] dark:text-[#94A3B8]'
                }
              `}
            >
              {pathname === href && (
                <span
                  className="
                    absolute
                    top-0
                    left-0
                    right-0
                    h-[2px]
                    bg-[#526600]
                  "
                />
              )}

              <Icon size={20} />

              <span className="text-[10px] font-medium">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Theme + Resume Controls */}
      <div
        className="
          md:hidden
          fixed
          right-4
          top-1/2
          -translate-y-1/2
          z-50
          flex
          flex-col
          items-end
          gap-3
        "
      >
        <div
          className={`
            flex
            flex-col
            gap-3
            transition-all
            duration-300
            ${
              isOpen
                ? 'translate-x-0 opacity-100'
                : 'translate-x-20 opacity-0 pointer-events-none'
            }
          `}
        >
          <button
            onClick={() =>
              setTheme(
                resolvedTheme === 'dark'
                  ? 'light'
                  : 'dark'
              )
            }
            className="
              h-12
              w-12
              rounded-xl
              border
              border-[#C5C9AD]
              backdrop-blur-xl
              flex
              items-center
              justify-center
              bg-white/90
              dark:bg-[#0B0B0B]/90
            "
          >
            {resolvedTheme === 'dark' ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}
          </button>

          <a
            href="/CV.pdf"
            download
            className="
              h-12
              w-12
              rounded-xl
              border
              border-[#C5C9AD]
              backdrop-blur-xl
              flex
              items-center
              justify-center
              bg-white/90
              dark:bg-[#0B0B0B]/90
            "
          >
            <FileText size={20} />
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            h-10
            w-10
            rounded-xl
            border
            border-[#C5C9AD]
            backdrop-blur-xl
            flex
            items-center
            justify-center
            bg-white/90
            dark:bg-[#0B0B0B]/90
          "
        >
          {isOpen ? (
            <ChevronRight size={18} />
          ) : (
            <ChevronLeft size={18} />
          )}
        </button>
      </div>
    </>
  );
}