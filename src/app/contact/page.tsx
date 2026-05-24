import React from 'react'
import { MdSend } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineExternalLink } from "react-icons/hi";

const page = () => {
    return (
        <div className='mt-[2rem]'>
            <h1 className='text-[36px] font-bold'>Get in touch</h1>
            <p className='text-[#444934]'>Whether you have a question about a project, a job opportunity, or just want to say hi, my inbox is always open. I'll get back to you as soon as possible.</p>
   
            
            <div className='flex justify-between gap-5 mt-5'>

            <form action="" method="post" className='border-1 border-[#C5C9AD] bg-white rounded p-4 flex flex-col gap-3 w-[60%] self-start'>
                 <div className='flex justify-between gap-3'>
                       <div className='flex flex-col gap-1'>
                    <label htmlFor="Name" className='text-[12px] font-semibold text-[#444934]'>NAME</label>
                    <input type="text" name="Name" id="Name"  placeholder='Adam Smith' className='border-1 border-[#C5C9AD] rounded pt-1 pb-1 pl-2 pr-2 outline-none min-w-[250px]
                     focus-200
      transition-colors
      duration-200
      focus:border-[#526600]
                    '/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="Email" className='text-[12px] font-semibold text-[#444934]'>EMAIL</label>
                    <input type="email" name="Email" id="Email" placeholder='adamsmith@gmail.com' className=' border-1 border-[#C5C9AD] rounded pt-1 pb-1 pl-2 pr-2 outline-none 
                    focus-200
      transition-colors
      duration-200
      focus:border-[#526600]
                    min-w-[250px]'/>
                </div>
                 </div>
                 <div>
                 <label htmlFor="MESSAGE" className='text-[12px] font-semibold text-[#444934]'>MESSAGE</label><br />
                  <textarea name="MESSAGE" id="MESSAGE" rows={6} className='p-3 border-1 border-[#C5C9AD] resize-none rounded outline-none w-full focus-200
      transition-colors
      duration-200
      focus:border-[#526600]' placeholder='How can I help you?'></textarea>
                 </div>

                 <button className='rounded pt-2 pb-2 pr-4 pl-4  flex items-center justify-center gap-2 bg-[#D4FF33] self-start
         hover-200
      transition-colors
      duration-200
      hover:bg-[#acc92b]
                 '>
                    <span className='text-[#5E7400]' >SEND MESSAGE</span>
                   <MdSend  fill='#5E7400'/>
                 </button>
            </form>
              <div className='w-[40%] flex flex-col gap-3'>
                  <div className='w-full border-[#C5C9AD] border-1 self-start p-3'>
                <div className='  p-3 bg-white w-full h-[200px] rounded overflow-hidden mb-4'>
                     <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.98227266458!2d20.896615479810382!3d52.23288709720495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarsaw!5e0!3m2!1sen!2spl!4v1778076684501!5m2!1sen!2spl"
    className="w-full h-full border-0   transition-transform
    duration-300
    hover:scale-110"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
  
                </div>
                <div className='flex gap-3 items-center'>
                   <FaLocationDot fill='#526600'/>
                   <div>
                    <p className='text-[12px] font-semibold'>LOCATION</p>
                    <p className='text-[12px]'>Warsaw, Poland</p>
                   </div>
                </div>
              </div>
                <div className='flex justify-between border-1 border-[#C5C9AD] p-4 rounded items-center bg-white  hover-200
      transition-colors
      duration-200
      hover:border-[#526600]'>
                    <div className='flex justify-start gap-4'>
                         <div className=' bg-[#F2F4F6] rounded p-3'>
                    <FaGithub />
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <p className='text-[12px] font-semibold'>GITHUB</p>
                        <p className='text-[12px]'>https://github.com/bekhzodallaev</p>
                    </div>
                    </div>
                </div>
                   <a href="https://github.com/bekhzodallaev" target='_blank' className='
    '>
                     <HiOutlineExternalLink stroke='#757961' size={20} className=' hover-200
      transition-colors
      duration-200
      hover:stroke-[#526600]'/>
                    </a>
              </div>
                <div className='flex justify-between border-1 border-[#C5C9AD] p-4 rounded items-center bg-white  hover-200
      transition-colors
      duration-200
      hover:border-[#526600]'>
                    <div className='flex justify-start gap-4'>
                         <div className=' bg-[#F2F4F6] rounded p-3'>
                    <FaLinkedinIn />
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <p className='text-[12px] font-semibold'>LINKEDIN</p>
                        <p className='text-[12px]'>https://www.linkedin.com/in/bekallaev/</p>
                    </div>
                    </div>
                </div>
                   <a href="https://www.linkedin.com/in/bekallaev/" target='_blank' className=''>
                     <HiOutlineExternalLink stroke='#757961' size={20} className=' hover-200
      transition-colors
      duration-200
      hover:stroke-[#526600]'/>
                    </a>
              </div>
              </div>
            </div>
        </div>
    )
}

export default page
