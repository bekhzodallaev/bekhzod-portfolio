import React from 'react'

const Modal = () => {
  return (
    <div className='bg-[#0F172A] p-3 mb-4 rounded mt-4'>
      <h2 className='text-white text-[18px]'>Technical Digest</h2>
      <p className='text-[#94A3B8] text-[14px]'>Get bi-weekly insights on system
design and software architecture
directly in your inbox.</p>
     <form action="" className='flex flex-col gap-3'>
        <input type="email" name="email" id="email"  placeholder='example@gmail.com' className='bg-[#1E293B] rounded pt-2 pb-2 pr-3 pl-3 text-[#6B7280]'/>
        <button className='bg-[#D4FF33] capitalize pt-2 pb-2 pr-3 pl-3 rounded'>SUBSCRIBE</button>
     </form>
    </div>
  )
}

export default Modal
