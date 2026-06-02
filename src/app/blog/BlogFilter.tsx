'use client';

import React, { useState } from 'react';
import BlogList from '@/src/components/Blog/BlogList';

type BlogType = {
  date: string;
  tags: string[];
  title: string;
  description?: string;
  slug: string;
  category: string;
  readingTime: string;
};

type BlogFilterProps = {
  blogs: BlogType[];
};

const BLOGS_PER_PAGE = 3;

const BlogFilter = ({ blogs }: BlogFilterProps) => {
  const [category, setCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredBlogs =
    category === 'All'
      ? blogs
      : blogs.filter((blog) => blog.category === category);

  const totalPages = Math.ceil(
    filteredBlogs.length / BLOGS_PER_PAGE
  );

  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;

  const paginatedBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + BLOGS_PER_PAGE
  );

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    setCurrentPage(1);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-5 gap-3">
        <h3 className="text-[12px]">RECENT BLOGS</h3>

        <div className="flex flex-wrap gap-2 items-center text-[12px] text-[#5D6D84]">
          <button
            onClick={() => handleCategoryChange('All')}
            className={`cursor-pointer transition-colors duration-200 ${
              category === 'All'
                ? 'bg-[#D4FF33] text-[#64748B] px-3 py-1 rounded'
                : 'text-[#5D6D84] hover:text-[#526600]'
            }`}
          >
            All
          </button>

          <button
            onClick={() => handleCategoryChange('Technical')}
            className={`cursor-pointer transition-colors duration-200 ${
              category === 'Technical'
                ? 'bg-[#D4FF33] text-[#64748B] px-3 py-1 rounded'
                : 'text-[#5D6D84] hover:text-[#526600]'
            }`}
          >
            Technical
          </button>

          <button
            onClick={() => handleCategoryChange('Career')}
            className={`cursor-pointer transition-colors duration-200 ${
              category === 'Career'
                ? 'bg-[#D4FF33] text-[#64748B] px-3 py-1 rounded'
                : 'text-[#5D6D84] hover:text-[#526600]'
            }`}
          >
            Career
          </button>
        </div>
      </div>

      <div className="h-[1px] bg-[#C5C9AD] mb-5 mt-3"></div>

      {/* Blog List */}
      <div className="flex flex-col gap-5">
        {paginatedBlogs.map((blog) => (
          <BlogList
            key={blog.slug}
            type={blog.tags}
            topic={blog.title}
            date={blog.date}
            readingTime={blog.readingTime}
            slug={blog.slug}
            summary={blog.description}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap justify-center gap-2 mt-10">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="
            border border-[#C5C9AD]
            px-3 md:px-4 py-2
            transition duration-200
            opacity-60
            hover:opacity-90
            active:scale-95
            focus:outline-none
            disabled:opacity-40
            disabled:cursor-not-allowed
            cursor-pointer
            rounded
          "
        >
          Previous
        </button>

        {Array.from(
          { length: totalPages },
          (_, i) => i + 1
        ).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`
              border border-[#C5C9AD]
              px-3 md:px-4 py-2
              transition duration-200
              opacity-60
              hover:opacity-90
              active:scale-95
              focus:outline-none
              cursor-pointer
              rounded
              ${
                currentPage === page
                  ? 'bg-[#D4FF33] text-black'
                  : ''
              }
            `}
          >
            {page}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage((prev) => prev + 1)
          }
          className="
            border border-[#C5C9AD]
            px-3 md:px-4 py-2
            transition duration-200
            opacity-60
            hover:opacity-90
            active:scale-95
            focus:outline-none
            disabled:opacity-40
            disabled:cursor-not-allowed
            cursor-pointer
            rounded
          "
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogFilter;