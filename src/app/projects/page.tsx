import React from 'react';
import { TbExternalLink } from 'react-icons/tb';
import { FaCode } from 'react-icons/fa';
import Image from 'next/image';
import { projects } from '@/src/data/projects';
import ProjectCard from '@/src/components/Projects/ProjectCard';

const page = () => {
  return (
    <div className="mt-[2rem]">
      <h1 className="text-3xl md:text-[36px] font-bold">
        Selected Work
      </h1>

      <p className="text-base text-[#444934]">
        A showcase of my personal projects which can bring the value for the users
      </p>

      {/* Featured Project */}
      <div
        className="
          border-1
          border-[#C5C9AD]
          rounded
          p-4 md:p-5
          flex
          flex-col-reverse
          md:flex-row
          gap-5
          mt-[24px]
          hover-200
          transition-colors
          duration-200
          hover:bg-white
          group
          dark:hover:bg-black
        "
      >
        <div className="w-full md:w-[50%] self-start">
          <p className="bg-[#D4FF33] text-xs inline-block">
            LATEST
          </p>

          <h2
            className="
              text-xl
              md:text-[24px]
              font-semibold
              transition-colors
              duration-200
              group-hover:text-[#526600]
            "
          >
            AppTrackr
          </h2>

          <p className="text-base">
            AppTrackr is a tool that helps job applicants control their job
            applications and collect them in one dashboard. They can not only
            track their application but also can have them readily available
            with ease.
          </p>

          <div className="mt-4">
            <ul className="flex flex-wrap gap-2">
              <li className="bg-[#ECEEF0] rounded p-1 text-sm text-[#5C647A]">
                Nextjs
              </li>

              <li className="bg-[#ECEEF0] rounded p-1 text-sm text-[#5C647A]">
                Reactjs
              </li>

              <li className="bg-[#ECEEF0] rounded p-1 text-sm text-[#5C647A]">
                Typescript
              </li>

              <li className="bg-[#ECEEF0] rounded p-1 text-sm text-[#5C647A]">
                MongoDB
              </li>

              <li className="bg-[#ECEEF0] rounded p-1 text-sm text-[#5C647A]">
                OpenAI API
              </li>
            </ul>
          </div>

          <div className="flex justify-evenly gap-4 mt-5 text-sm">
            <div className="flex gap-3 items-center">
              <a
                href="https://application-tracking-system-eta.vercel.app/"
                className="flex gap-3 items-center transition-colors duration-200 hover:text-[#526600]"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open live demo in new tab"
              >
                <TbExternalLink />
                Live Demo
              </a>
            </div>

            <div className="flex gap-3 items-center">
              <a
                href="https://github.com/bekhzodallaev/Application-Tracking-System"
                className="flex gap-3 items-center transition-colors duration-200 hover:text-[#526600]"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open repository in new tab"
              >
                <FaCode />
                View Code
              </a>
            </div>
          </div>
        </div>

        <div
          className="
            w-full
            md:w-[50%]
            relative
            h-[250px]
            md:h-auto
            min-h-[250px]
            overflow-hidden
            rounded-lg
          "
        >
          <Image
            src="/projects/AppTrackr.png"
            fill
            alt="AppTrackr Screenshot"
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Projects Grid */}
      <div
        className="
          mt-5
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
        "
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            desc={project.desc}
            githubUrl={project.githubUrl}
            webUrl={project.webUrl}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default page;