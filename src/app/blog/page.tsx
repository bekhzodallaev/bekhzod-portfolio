import BlogList from '@/src/components/Blog/BlogList';
import React from 'react'

const blogDate = [
  {
    date: "2026-05-01",
    type: "Technology",
    topic: "Understanding Node.js Event Loop",
    summary: "A deep dive into how the Node.js event loop works and why it enables non-blocking performance.",
    duration: "5 min read"
  },
  {
    date: "2026-05-02",
    type: "Programming",
    topic: "Async/Await vs Promises",
    summary: "Comparison between async/await and promises with practical examples and best practices.",
    duration: "4 min read"
  },
  {
    date: "2026-05-03",
    type: "Career",
    topic: "How to Prepare for Backend Interviews",
    summary: "Key topics, strategies, and tips to succeed in backend development interviews.",
    duration: "6 min read"
  },
  {
    date: "2026-05-04",
    type: "Web Development",
    topic: "Introduction to REST APIs",
    summary: "Basics of REST architecture, HTTP methods, and how to design clean APIs.",
    duration: "3 min read"
  },
  {
    date: "2026-05-05",
    type: "Database",
    topic: "SQL vs NoSQL Databases",
    summary: "Differences, use cases, and when to choose SQL or NoSQL for your project.",
    duration: "5 min read"
  },
  {
    date: "2026-05-06",
    type: "Performance",
    topic: "Improving API Performance in Node.js",
    summary: "Techniques like caching, clustering, and optimizing queries to boost performance.",
    duration: "7 min read"
  },
  {
    date: "2026-05-07",
    type: "Security",
    topic: "Preventing SQL Injection",
    summary: "Common vulnerabilities and how to secure your application against SQL injection attacks.",
    duration: "4 min read"
  },
  {
    date: "2026-05-08",
    type: "Architecture",
    topic: "Microservices vs Monolith",
    summary: "Pros and cons of microservices and monolithic architectures with real-world scenarios.",
    duration: "6 min read"
  }
];

const page = () => {
  return (
    <div>
      <h1 className='font-bold text-[36px] mt-3'>Writing & Technical Insights</h1>
      <p className='text-[#444934]'>A collection of thoughts on software architecture, frontend performance, and the clinical
precision of modern engineering.</p>

     <div className='border-1 border-[#C5C9AD] rounded p-5 flex  gap-3 bg-white w-full mt-3 mb-3'>
       <div className='w-[50%] bg-red rounded border-1'></div>
       <div className='flex flex-col gap-3'>
          <div className='flex gap-3'>
            <span className='uppercase bg-[#D4FF33] text-[12px]'>Featured</span>
            <span className='uppercase text-[12px] font-semibold'>Architecture</span>
          </div>
        <h2 className='text-[24px] font-bold'>Building Scalable Design Systems with Tailwind and Headless UI</h2>
        <p className=' text-[14px] text-[#444934]'>In-depth exploration of how to maintain consistency across
large-scale applications without sacrificing developer velocity or
component flexibility.
        </p>
        <p>March 24, 2026, 12 min read</p>

       </div>
     </div>
        <div className='flex justify-between mt-5'>
            <h3 className='text-[12px]'>RECENT BLOGS</h3>
            <div className='text-[12px] text-[#5D6D84] flex gap-3'>
                <p>All</p>
                <p>Technical</p>
                <p>Career</p>
            </div>
        </div>
           <div className='h-[1px] bg-[#C5C9AD] mb-5'></div>

           {blogDate.map((blog, index) =>(
            <BlogList
             type={blog.type}
             topic={blog.topic}
             summary={blog.summary}
             date={blog.date}
             duration={blog.duration}
            />
           ))}
    </div>
  )
}

export default page
