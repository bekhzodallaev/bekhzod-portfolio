import BlogList from '@/src/components/Blog/BlogList';
import { getAllPosts } from '@/src/lib/blog/getAllPosts';

const page = () => {
  const posts = getAllPosts();
  return (
    <div className='mt-[2rem]'>
      <h1 className='font-bold text-[36px]'>Writing & Technical Insights</h1>
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

           {posts.map((blog, index) =>(
            <BlogList
            key={blog.slug}
             type={blog.tags}
             topic={blog.title}
             date={blog.date}
             duration="5 min"
             slug={blog.slug}
             summary={blog.description}
            />
           ))}
    </div>
  )
}

export default page
