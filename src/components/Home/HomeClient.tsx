'use client';

import Link from 'next/link';
import { GrFormNextLink } from 'react-icons/gr';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import Blogs from '../Blog/Blogs';
import Modal from '../Modal/Modal';
import { useState } from 'react';

type BlogType = {
  title: string;
  description?: string;
  date: string;
  tags: string[];
  cover: string;
  slug: string;
  featured?: boolean;
  readingTime: string;
};

type HomeClientProps = {
  blogs: BlogType[];
};

const tagColors = [
  'bg-[#F1F5F9] text-[#0F172A]',
  'bg-[#ECFCCB] text-[#526600]',
  'bg-[#DBEAFE] text-[#1D4ED8]',
  'bg-[#FCE7F3] text-[#BE185D]',
  'bg-[#FEF3C7] text-[#B45309]',
];

const HomeClient = ({ blogs }: HomeClientProps) => {
  const [count, setCount] = useState(3);

  function handleCount() {
    setCount((prev) => prev + 1);
  }

  const featuredPost = blogs.find((post) => post.featured);

  return (
    <div className="w-full mt-[2rem]">
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row justify-between gap-6">
        <div className="w-full md:w-[65%]">
          <h1 className="text-[28px] md:text-[36px] font-bold">
            Engineering scalable systems with
            <span
              className="
                text-[#526600]
                border-b-2
                border-b-[#D4FF33]
                hover-200
                transition-colors
                duration-200
                hover:border-b-[#526600]
                group
              "
            >
              {' '}
              clean architecture
            </span>{' '}
            and precision.
          </h1>

          <p className="text-[#444934] mt-[2rem]">
            I'm a Full-Stack Engineer specializing in TypeScript, Go, and
            Distributed Systems. Currently building high-performance interfaces
            at the intersection of technical utility and user experience.
          </p>

          <div className="flex items-center justify-center gap-4 mt-[2rem]">
            <a
              href="https://github.com/bekhzodallaev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={40} className="animate-bounce" />
            </a>

            <a
              href="https://www.linkedin.com/in/bekallaev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={40} className="animate-pulse" />
            </a>
          </div>
        </div>

        <div className="w-full md:w-[32%] relative h-[300px] md:h-[350px] overflow-hidden rounded-lg">
          <Image
            src="/profile/profile.jpeg"
            fill
            alt="Profile Image"
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* Featured Section */}
      <div className="mt-[4rem]">
        <div className="w-full flex flex-col md:flex-row items-start gap-6">
          {/* Featured Article */}
          <div className="w-full md:w-[60%]">
            <div className="flex items-center justify-between mb-3">
              <h1 className="text-[24px]">Featured Article</h1>

              <Link
                href="/blog"
                className="
                  text-[#526600]
                  border-b
                  border-transparent
                  hover-200
                  transition-colors
                  duration-200
                  hover:border-b-[#526600]
                "
              >
                View all posts
              </Link>
            </div>

            <div
              className="
                bg-white
                p-4
                rounded
                border
                border-transparent
                transition-colors
                duration-200
                hover:border-[#D4FF33]
                group
                dark:bg-black
              "
            >
              <div className="flex gap-3 flex-wrap">
                {featuredPost?.tags.map((tag, index) => (
                  <p
                    key={tag}
                    className={`
                      ${tagColors[index % tagColors.length]}
                      text-[12px]
                      px-2
                      py-1
                      rounded
                    `}
                  >
                    {tag}
                  </p>
                ))}
              </div>

              <Link href={`/blog/${featuredPost?.slug}`}>
               <h1
                className="
                  text-[28px]
                  md:text-[36px]
                  font-bold
                  transition-colors
                  duration-200
                  group-hover:text-[#526600]
                "
              >
                {featuredPost?.title}
              </h1>
              </Link>

              <p className="text-[#444934]">
                {featuredPost?.description}
              </p>

              <div className="flex gap-3 items-center mt-3">
                <p>
                  {featuredPost?.date} / {featuredPost?.readingTime}
                </p>

                <Link href={`/blog/${featuredPost?.slug}`}>
                  <GrFormNextLink size={25} />
                </Link>
              </div>
            </div>
          </div>

          {/* Technical Logs */}
          <div className="w-full md:w-[40%]">
            <h1 className="text-[24px] mb-3">Technical Logs</h1>

            <div className="max-h-[400px] md:max-h-[320px] overflow-y-auto">
              {blogs.slice(0, count).map((blog) => (
                <Blogs
                  key={blog.slug}
                  date={blog.date}
                  title={blog.title}
                  tags={blog.tags}
                  slug={blog.slug}
                />
              ))}
            </div>

            <button
              className="
                capitalize
                border
                w-full
                border-dashed
                border-[#CBD5E1]
                pt-2
                pb-2
                pr-4
                pl-4
                mx-auto
                mt-3
                hover-200
                transition-colors
                duration-200
                hover:border-[#7A8F1A]
                group
                hover:bg-white
                hover:text-[#526600]
                cursor-pointer
              "
              onClick={handleCount}
            >
              LOAD MORE LOGS
            </button>

            <Modal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeClient;