import React from 'react'
import { GrFormNextLink } from "react-icons/gr";
import Link from 'next/link';



type BlogListType = {
  date:string;
  type:string[];
  topic:string;
  summary?:string;
  slug:string;
  readingTime:string;
}

const BlogList = ({date, type, topic, summary, readingTime, slug}:BlogListType) => {
  return (
    <div className='mt-4'>
        <div className='flex gap-3'>
      <p className='w-[150px] flex-shrink-0'>{date}</p>
      <div className='flex flex-col gap-3'>
           <div className='flex gap-3'>
             {type.map(t => (
            <div className='bordered border-1 border-[#5D6D84] pr-1 pl-1 rounded self-start'>
            <p className='text-[#526600]'>{t}</p>
        </div>
          ))}
           </div>
        <h3 className='text-[24px] font-semibold'>{topic}</h3>
        <p className='text-[14px]'>{summary}</p>
        <div className='flex gap-4 items-center'>
          <p className='text-[12px]'>{readingTime}</p>
          <Link href={`/blog/${slug}`}>
          <GrFormNextLink />
          </Link>
        </div>
      </div>
    </div>
    <div className='h-[1px] bg-[#526600] mt-4'></div>
    </div>
  )
}

export default BlogList
