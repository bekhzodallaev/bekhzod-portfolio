import React from 'react';
import Link from 'next/link';
import { GrFormNextLink } from 'react-icons/gr';

type BlogType = {
  title: string;
  description?: string;
  date: string;
  tags: string[];
  cover?: string;
  slug: string;
};

const Blogs = ({ tags, date, title, slug }: BlogType) => {
  return (
    <div
      className="
        rounded
        bg-white
        p-2
        mb-2
        border border-transparent
        transition-colors duration-200
        hover:border-[#D4FF33]
        group
        dark:bg-black
      "
    >
      <div className="flex gap-3">
        {tags.map((t, index) => (
          <p
            className="text-[12px] capitalize text-[#526600]"
            key={index}
          >
            {t}
          </p>
        ))}
      </div>

      <h1
        className="
          text-[18px]
          transition-colors duration-200
          group-hover:text-[#526600]
        "
      >
        {title}
      </h1>

      <div className="flex gap-3 mt-4">
        <p className="text-[12px] text-[#64748B]">{date}</p>

        <Link href={`/blog/${slug}`}>
          <GrFormNextLink />
        </Link>
      </div>
    </div>
  );
};

export default Blogs;