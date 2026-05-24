import Image from 'next/image'
import { MdTerminal } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { FaReact } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import Experience from '@/src/components/CareerTimeline/Experience';
import { FaUniversity } from 'react-icons/fa';
import { Si42 } from "react-icons/si";


const page= () => {
  return (
    <div>
       <div className='flex justify-between mt-[2rem] w-full gap-2'>
         <div className='w-[60%] flex flex-col gap-2'>
          <p className='text-[#526600] text-[12px] font-semibold'>SOFTWARE ENGINEER & ARCHITECT</p>
          <h1 className='text-[36px] font-bold'>Designing logic, crafting experiences</h1>
          <p className='text-[#444934]'>I am a full-stack software engineer specialized in building scalable, high-
performance web applications. My approach combines clinical technical
rigor with a deep focus on developer experience and clean architecture.</p>
          <p className='text-[#444934]'>
            Currently, I'm focusing on distributed systems and the intersection of
modern frontend frameworks with type-safe backend environments. I
believe in writing code that is not just functional, but maintainable and
self-documenting.
          </p>
           <div className='flex justify-evenly mt-3'>
            
            <div className='flex gap-2 pt-2 pb-2 pr-3 pl-3 rounded border-1 items-center border-[#C5C9AD]
                hover-200
                     border
                  transition-colors
                  duration-200
                 hover:border-[#7A8F1A]
                 group
                 hover:bg-white
                 hover:text-[#526600]
            '>
                <MdTerminal size={25} fill='#526600'/>
                <p>2+ Years Exp.</p>
            </div>
            <div className='flex gap-2 flex gap-2 pt-2 pb-2 pr-3 pl-3 rounded border-1 items-center border-[#C5C9AD]
             hover-200
                     border
                  transition-colors
                  duration-200
                 hover:border-[#7A8F1A]
                 group
                 hover:bg-white
                 hover:text-[#526600]
            '>
               <SlLocationPin size={25} fill='#526600'/>
               <p>Warsaw, Poland</p> 
            </div>
           </div>
        </div>

        <div className='w-[34%] relative h-[350px] overflow-hidden rounded-lg'>
        <Image src="/profile/profile02.jpeg"  fill alt="Profile Image"  className="rounded-lg object-cover object-[78%_50%]"/>
        </div>
       </div>
        <div className="flex items-center gap-4 mt-5">
  <h2 className="text-[24px] font-bold  whitespace-nowrap">
    Core Competencies
  </h2>
  <div className="flex-1 h-[1px] bg-[#C5C9AD]"></div>
</div>
    <div className='w-full flex justify-evenly mt-3 mb-3 gap-3'>
      <div className='bg-white border-1 border-[#C5C9AD] rounded pt-3 pb-3 pr-5 pl-5 flex flex-col gap-2'>
         <FaReact size={25} fill='#526600'/>
        <h3 className='font-semibold'>Frontend Archtiecture</h3>
        <div className='flex gap-3 flex-wrap'>
            <p className='bg-[#ECEEF0] pt-1 pb-1 pl-2 pr-2 rounded'>React</p>
            <p className='bg-[#ECEEF0] pt-1 pb-1 pl-2 pr-2 rounded'>Typescript</p>
            <p className='bg-[#ECEEF0] pt-1 pb-1 pl-2 pr-2 rounded'>Tailwind CSS</p>
            <p className='bg-[#ECEEF0] pt-1 pb-1 pl-2 pr-2 rounded'>Next.js</p>
        </div>
      </div>

            <div className='bg-white border-1 border-[#C5C9AD] rounded pt-3 pb-3 pr-5 pl-5 flex flex-col gap-2'>
          <FaServer size={25} fill='#526600'/>
        <h3 className='font-semibold'>Backend Architecture</h3>
        <div className='flex gap-3 flex-wrap'>
            <p className='bg-[#ECEEF0] pt-1 pb-1 pl-2 pr-2 rounded'>Node.js </p>
            <p className='bg-[#ECEEF0] pt-1 pb-1 pl-2 pr-2 rounded'>PostgreSQL</p>
            <p className='bg-[#ECEEF0] pt-1 pb-1 pl-2 pr-2 rounded'>Redis</p>
            <p className='bg-[#ECEEF0] pt-1 pb-1 pl-2 pr-2 rounded'>MongoDB</p>
        </div>
      </div>
            <div className='bg-white border-1 border-[#C5C9AD] rounded pt-3 pb-3 pr-5 pl-5 flex flex-col gap-2'>
        <FaCloud size={25} fill='#526600'/>
        <h3 className='font-semibold'>Cloud & DevOPs</h3>
        <div className='flex gap-3 flex-wrap'>
            <p className='bg-[#ECEEF0] pt-1 pb-1 pl-2 pr-2 rounded'>Docker</p>
            <p className='bg-[#ECEEF0] pt-1 pb-1 pl-2 pr-2 rounded'>Github Actions</p>
            <p className='bg-[#ECEEF0] pt-1 pb-1 pl-2 pr-2 rounded'>CI/CD</p>
            <p className='bg-[#ECEEF0] pt-1 pb-1 pl-2 pr-2 rounded'>AWS</p>
        </div>
      </div>
    </div>
   
   <Experience />

     <div className="flex items-center gap-4 mt-5">
  <h2 className="text-[24px] font-bold  whitespace-nowrap">
    Education
  </h2>
  <div className="flex-1 h-[1px] bg-[#C5C9AD]"></div>
</div>
     <div className='mt-3 flex justify-start gap-4'>
        <div className='flex gap-3 pt-2 pb-2 pl-3 pr-3 border-[#C5C9AD] border-1 rounded items-center 
        hover-200
                     border
                  transition-colors
                  duration-200
                 hover:border-[#7A8F1A]
                 group
                 hover:bg-white
                 hover:text-[#526600]'>
          <FaUniversity fill='#526600'  size={25}/>
          <div>
            <h3 className='font-semibold'>Bachelor of Computer Science</h3>
            <p className='text-[13px]'>Vizja University</p>
          </div>
        </div>
        <div className='flex gap-3 pt-2 pb-2 pl-3 pr-3 border-[#C5C9AD] border-1 rounded items-center
        hover-200
                     border
                  transition-colors
                  duration-200
                 hover:border-[#7A8F1A]
                 group
                 hover:bg-white
                 hover:text-[#526600]
        '>
          <Si42 fill='#526600'  size={25}/>
          <div>
            <h3 className='font-semibold'>Peer-to-Peer Programming</h3>
            <p className='text-[13px]'>42 Warsaw</p>
          </div>
        </div>
     </div>
    </div>
  )
}

export default page
