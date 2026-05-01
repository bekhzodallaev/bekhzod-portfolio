import React from 'react'

const Footer = () => {
 const date = new Date().getFullYear();

  return (
    <div className='mt-8 w-[1024px] mb-4 flex items-center justify-center'>
        @ {date} bekhzodall.com
    </div>
  )
}

export default Footer
