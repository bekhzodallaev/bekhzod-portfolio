import React from 'react'
import Image from 'next/image'
import { FaTelegram } from 'react-icons/fa'
import Link from 'next/link'

const Modal = () => {
  return (
    <div className='bg-[#0F172A] p-3 mb-4 rounded mt-6 flex flex-col gap-3 w-full max-w-[450px] mx-auto'>
      <h2 className='text-white text-[18px] flex-start'>Community</h2>
      <p className='text-[#94A3B8] text-[14px]'>Get frequent insights on system
design and software architecture on your <span className='text-[#526600]'>Telegram</span> with ease</p>
        <div>
          <a
  href="https://t.me/daildevguru"
  target="_blank"
  rel="noopener noreferrer"
  className=' bg-white rounded p-2 flex gap-2 items-center justify-center dark:text-black'
>
  Join Telegram Channel
  <FaTelegram />
</a>
        </div>
    </div>
  )
}

export default Modal
