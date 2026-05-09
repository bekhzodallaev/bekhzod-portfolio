import React from 'react'
import Image from 'next/image'
import { TbExternalLink } from "react-icons/tb";
import { FaCode } from "react-icons/fa";


type ProjectCardType = {
    image:string;
    name:string;
    desc:string;
    webUrl:string;
    githubUrl:string;
}
const ProjectCard = ({image, name, desc, webUrl, githubUrl}:ProjectCardType) => {
  return (
    <div className='max-w-[450px] relative flex-col mt-4 p-3 gap-4'>
      <Image src={image} width={400} height={256}  alt='Project Photo' />
      <h3 className='mt-3 text-[24px] font-semibold'>{name}</h3>
      <p className='line-clamp-4'>{desc}</p>
      <div className='flex justify-evenly mt-5'>
                      <div className='flex gap-3 items-center'>
                          <a href={webUrl}>
                           <TbExternalLink />
                          </a>
                          Live Demo
                      </div>
                      <div className='flex gap-3 items-center'>
                          <a href={githubUrl}>
                           <FaCode />
                          </a>
                          View Code
                      </div>
                  </div>
    </div>
  )
}

export default ProjectCard
