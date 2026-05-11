'use client';

import React, { useState } from 'react';
import BlogList from '@/src/components/Blog/BlogList';

type BlogType = {
  date: string;
  tags: string[];
  title: string;
  description?: string;
  duration: string;
  slug: string;
  category:string;
};

type BlogFilterProps = {
  blogs: BlogType[];
};

const BlogFilter = ({ blogs }: BlogFilterProps) => {
  const [category, setCategory] = useState('All');

  const filteredBlogs =
    category === 'All'
      ? blogs
      : blogs.filter((blog) => blog.category === category);

  return (
    <div>
         <div className='flex justify-between mt-5'>
            <h3 className='text-[12px]'>RECENT BLOGS</h3>
        <div className="flex gap-3 items-center text-[12px] text-[#5D6D84]">
        
        <button onClick={() => setCategory('All')}>
          All
        </button>

        <button onClick={() => setCategory('Technical')}>
          Technical
        </button>

        <button onClick={() => setCategory('Career')}>
          Career
        </button>
      </div>
        </div>

      <div className="h-[1px] bg-[#C5C9AD] mb-5 mt-3"></div>

      <div className="flex flex-col gap-5">
        {filteredBlogs.map((blog) => (
          <BlogList
            key={blog.slug}
            type={blog.tags}
            topic={blog.title}
            date={blog.date}
            duration={blog.duration}
            slug={blog.slug}
            summary={blog.description}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogFilter;