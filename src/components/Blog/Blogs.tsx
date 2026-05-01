import React from 'react'

type BlogType = {
    topic:string;
    summary:string;
    date:string;
}

const Blogs = ({topic, summary, date}:BlogType) => {
  return (
    <div className='rounded bg-white p-2 mb-2'>
      <p className='text-[12px] capitalize text-[#526600]'>{topic}</p>
      <h1 className='text-[18px]'>{summary}</h1>
       <p className='text-[12px] text-[#64748B]'>{date}</p>
    </div>
  )
}

export default Blogs
