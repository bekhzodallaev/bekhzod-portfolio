import React from 'react'
import { TbExternalLink } from "react-icons/tb";
import { FaCode } from "react-icons/fa";
import Image from "next/image";
import { projects } from '@/src/data/projects';
import ProjectCard from '@/src/components/Projects/ProjectCard';


const page = () => {
  return (
    <div className='mt-[2rem]'>
      <h1 className='text-[36px] font-bold'>Selected Work</h1>
      <p className='text-[#444934]'>A showcase of my personal projects which can bring the value for the users</p>
        <div className='border-1 border-[#C5C9AD] rounded p-5 flex gap-3 mt-[24px]
         hover-200
      transition-colors
      duration-200
      hover:bg-white
      group
      dark:hover:bg-black
        '>
         <div className='w-[50%] self-start'>
           <p className='bg-[#D4FF33] text-[12px] inline-block'>LATEST</p>
           <h2 className='text-[24px] font-semibold transition-colors duration-200 group-hover:text-[#526600]'>AppTrackr</h2>
            <p>AppTrackr is a tool that helps job applicants control their job applications and collect them in one dashboard. They can not only track their application but also can have them readily available with ease.
            </p>
            <div>
                <ul className='flex gap-3'>
                    <li className='bg-[#ECEEF0] rounded p-1 text-[#5C647A]'>Nextjs</li>
                    <li className='bg-[#ECEEF0] rounded p-1 text-[#5C647A]'>Reactjs</li>
                    <li className='bg-[#ECEEF0] rounded p-1 text-[#5C647A]'>Typescript</li>
                    <li className='bg-[#ECEEF0] rounded p-1 text-[#5C647A]'>MongoDB</li>
                    <li className='bg-[#ECEEF0] rounded p-1 text-[#5C647A]'>OpenAI API</li>
                </ul>
            </div>
            <div className='flex justify-evenly mt-5'>
                <div className='flex gap-3 items-center'>
                    <a href="https://application-tracking-system-eta.vercel.app/" className='flex gap-3 items-center transition-colors duration-200 hover:text-[#526600]' target='_blank' rel="noopener noreferrer"
                    aria-label="Open live demo in new tab"
                    >
                     <TbExternalLink />
                       Live Demo
                    </a>
                </div>
                <div className='flex gap-3 items-center'>
                    <a href="https://github.com/bekhzodallaev/Application-Tracking-System" className='flex gap-3 items-center transition-colors duration-200 hover:text-[#526600]' target='_blank' rel="noopener noreferrer"
                    aria-label="Open live demo in new tab"
                    >
                     <FaCode />
                     View Code
                    </a>
                </div>
            </div>
         </div>
         <div className='w-[50%] relative overflow-hidden'>
     <Image src="/projects/AppTrackr.png"  fill alt="Profile Image"  className="rounded-lg
     "/>
         </div>
        </div>
        <div className='flex gap-3 items-center justify-between'>
            {
                projects.map((project, index) =>(
                    <ProjectCard
                    key={index}
                    name={project.name}
                    desc={project.desc}
                    githubUrl={project.githubUrl}
                    webUrl={project.webUrl}
                    image={project.image}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default page
