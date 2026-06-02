'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import {
  Home,
  User,
  FileText,
  FolderKanban,
  Mail,
  Moon,
  Sun,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useState } from 'react';

export default function MobileNavbar() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();

  const [isOpen, setIsOpen] = useState(true);

  const links = [
    {
      href: '/',
      label: 'Home',
      icon: Home,
    },
    {
      href: '/about',
      label: 'About',
      icon: User,
    },
    {
      href: '/blog',
      label: 'Blog',
      icon: FileText,
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
  ];

  return (
    <>
      <nav
        className="
          md:hidden
          fixed
          bottom-6
          left-1/2
          -translate-x-1/2
          z-50
        "
      >
        <div
          className="
            flex
            items-center
            gap-5
            px-6
            py-3
            rounded-full
            border
            border-gray-200
            dark:border-gray-700
            backdrop-blur-lg
            bg-white/80
            dark:bg-[#0B0B0B]/80
            shadow-lg
          "
        >
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={`
                flex
                flex-col
                items-center
                text-xs
                transition-colors
                ${
                  pathname === href
                    ? 'text-[#A3E635]'
                    : 'text-gray-500 dark:text-gray-400'
                }
              `}
            >
              <Icon size={20} />
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </nav>
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
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
            className="
              h-12
              w-12
              rounded-full
              backdrop-blur-lg
              flex
              items-center
              justify-center
              shadow-lg
            "
          >
            {resolvedTheme === 'dark' ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}
          </button>

          <a
            href="/resume.pdf"
            download
            className="
              px-4
              py-3
              backdrop-blur-lg
              shadow-lg
              rounded-full
              text-sm
              font-medium
            "
          >
            <FileText size={16} />
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            h-10
            w-10
            rounded-full
            backdrop-blur-lg
            flex
            items-center
            justify-center
            shadow-lg
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