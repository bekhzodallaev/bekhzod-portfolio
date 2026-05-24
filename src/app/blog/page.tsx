import BlogList from '@/src/components/Blog/BlogList';
import { getAllPosts } from '@/src/lib/blog/getAllPosts';
import BlogFilter from './BlogFilter';

const page = () => {
  const posts = getAllPosts();
  const featuredPost = posts.find(post => post.featured);

  return (
    <div className='mt-[2rem]'>
      <h1 className='font-bold text-[36px]'>Writing & Technical Insights</h1>
      <p className='text-[#444934]'>A collection of thoughts on software architecture, frontend performance, and the clinical
precision of modern engineering.</p>

     <div className='border-1 border-[#C5C9AD] rounded p-5 flex  gap-3 bg-white w-full mt-3 mb-3
      hover-200
      transition-colors
      duration-200
      group
     '>
       <div className='w-[50%] rounded border-1 relative overflow-hidden'>
        <img src={featuredPost?.cover} className='  transition-transform
    duration-300
    group-hover:scale-110' alt="blogpost image w-full 
        " />
       </div>
       <div className='flex flex-col gap-3 
       
       '>
         <div className='flex gap-3'>
            <span className='uppercase bg-[#D4FF33] text-[12px]'>Featured</span>
            {featuredPost?.tags.map((tag, index) =>(
              <span key={tag} className='uppercase text-[12px] font-semibold'>{tag}</span>
            ))}
         </div>
         <h2 className='text-[24px] font-bold
          transition-colors duration-200 group-hover:text-[#526600]
         '>{featuredPost?.title}</h2>
         <p className=' text-[14px] text-[#444934]'>{featuredPost?.description}</p>
           <div>
            <span>{featuredPost?.date}</span>
            <span>/</span>
            <span>{featuredPost?.readingTime}</span>
           </div>
       </div>
     </div>
       <BlogFilter blogs={posts} />
    </div>
  )
}

export default page
