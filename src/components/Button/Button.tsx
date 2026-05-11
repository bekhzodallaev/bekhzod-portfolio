'use client';

import React from 'react'
import { useRouter } from 'next/navigation'
import { IoMdArrowBack } from "react-icons/io";


const Button = () => {
    const router = useRouter();
  return (
    <div className='mb-[1rem]'>
      <button onClick={() => router.back()} className='flex gap-2 font-bold text-[18px] items-center cursor-pointer'>
        <IoMdArrowBack />
        Back
      </button>
    </div>
  )
}

export default Button
