import React from 'react'

const Footer = () => {
 const date = new Date().getFullYear();

  return (
    <div className='mt-8 flex items-center justify-center h-[6rem]'>
        @ {date} bekhzodall.com
    </div>
  )
}

export default Footer
