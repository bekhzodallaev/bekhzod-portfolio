
'use client';

import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Blogs from "../components/Blog/Blogs";
import Modal from "../components/Modal/Modal";
import { useState } from "react";

const blogs = [
  {
    topic: "JavaScript",
    summary: "Understanding Closures in JavaScript with Real Examples",
    date: "2026-04-10",
  },
  {
    topic: "Node.js",
    summary: "How the Event Loop Works Under the Hood",
    date: "2026-04-12",
  },
  {
    topic: "React",
    summary: "Optimizing React Performance with useMemo and useCallback",
    date: "2026-04-15",
  },
  {
    topic: "Backend",
    summary: "Building Scalable APIs with NestJS and PostgreSQL",
    date: "2026-04-18",
  },
  {
    topic: "System Design",
    summary: "Designing a URL Shortener Like Bitly",
    date: "2026-04-22",
  },
  {
    topic: "Career",
    summary: "How to Prepare for Backend Developer Interviews Effectively",
    date: "2026-04-25",
  },
];



export default function Home() {
  const [count, setCount] = useState(3);
  const filteredBlogs = blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
   
  function handleCount(){
    setCount(prev => prev+1);
  }

  return (
   <div className=" max-w-[1024px] mt-[2rem]">
     <div className="flex justify-between ">
       <div className="w-[60%]">
        <h1 className="text-[36px] font-bold">Engineering scalable systems with
<span className="text-[#526600]"> clean architecture</span> and precision.</h1>
   <p className="text-[#444934] mt-[2rem]">I'm a Full-Stack Engineer specializing in TypeScript, Go, and Distributed Systems.
Currently building high-performance interfaces at the intersection of technical utility and
user experience.</p>
        <div className="flex items-center justify-center gap-4 mt-[2rem]">
          <a href="https://github.com/bekhzodallaev" target="_blank" rel="noopener noreferrer">
           <FaGithub size={40} className="animate-bounce"/>
          </a>
          <a href="https://www.linkedin.com/in/bekallaev/" rel="noopener noreferrer" target="_blank">
            <FaLinkedin size={40} className="animate-pulse"/>
          </a>
        </div>
       </div>
       <div className="w-[40%] flex justify-center">
        <Image src="/profile/profile.jpeg"  width={256} height={256} alt="Profile Image"  className="rounded-lg"/>
       </div>
     </div>

       <div className="mt-[4rem]">
           <div className="flex justify-between items-center mb-3">
            <h1 className="text-[24px]">Featured Article</h1>
             <Link href="/blog" className='text-[#526600]'>View all posts</Link>
             <h1 className="text-[24px]">Technical Logs</h1>
            </div>  
            
            <div className="w-full flex items-start justfiy-between gap-[24px]">

            <div className="bg-white w-[60%] p-4 rounded">
              <div className="flex gap-3">
                <p className="bg-[#F1F5F9] text-[12px]">DISTRIBUTED SYSTEMS</p>
                <p className="bg-[#ECFCCB] text-[12px]">ARCHITECTURE</p>
              </div>
              <h1 className="text-[36px] font-bold">The Anatomy of a High-Performance Event Bus in Go</h1>
              <p className="text-[#444934]">Deep dive into the memory management and concurrency patterns required
to handle 1M+ events per second with sub-millisecond latency.</p>

               <p className="mt-[2rem]">March 24, 2024 8 min read</p>
            </div>
               <div className="w-[40%]">
                  <div className="h-[460px] overflow-y-auto">
                    {filteredBlogs.slice(0, count).map((blog, index) =>(
                      <Blogs
                        key={index}
                       topic={blog.topic}
                       summary={blog.summary}
                       date={blog.date}
                       />
                    ))}
                  </div>
                  <button className="capitalize border border-[#CBD5E1] pt-2 pb-2 pr-4 pl-4 mx-auto" onClick={handleCount}>load more</button>
                  <Modal />
               </div>
            </div>
       </div>

    </div>
  );
}
