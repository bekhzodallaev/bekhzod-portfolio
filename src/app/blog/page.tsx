import BlogList from '@/src/components/Blog/BlogList';
import { getAllPosts } from '@/src/lib/blog/getAllPosts';
import BlogFilter from './BlogFilter';

const page = () => {
  const posts = getAllPosts();
  const featuredPost = posts.find((post) => post.featured);

  return (
    <div className="mt-[2rem]">
      <h1 className="font-bold text-[28px] md:text-[36px]">
        Writing & Technical Insights
      </h1>

      <p className="text-[#444934]">
        A collection of thoughts on software architecture, frontend
        performance, and the clinical precision of modern engineering.
      </p>

      <div
        className="
          border-1
          border-[#C5C9AD]
          rounded
          p-4
          md:p-5
          flex
          flex-col
          md:flex-row
          gap-4
          bg-white
          w-full
          mt-3
          mb-3
          hover-200
          transition-colors
          duration-200
          group
          dark:bg-[#131313]
        "
      >
        <div className="w-full md:w-[50%] rounded border-1 relative overflow-hidden">
          <img
            src={featuredPost?.cover}
            alt="blogpost image"
            className="
              w-full
              h-[220px]
              md:h-full
              object-cover
              transition-transform
              duration-300
              group-hover:scale-110
            "
          />
        </div>

        <div className="flex flex-col gap-3 w-full">
          <div className="flex gap-3 flex-wrap">
            <span className="uppercase bg-[#D4FF33] text-[12px] dark:text-black">
              Featured
            </span>

            {featuredPost?.tags.map((tag) => (
              <span
                key={tag}
                className="uppercase text-[12px] font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>

          <h2
            className="
              text-[20px]
              md:text-[24px]
              font-bold
              transition-colors
              duration-200
              group-hover:text-[#526600]
            "
          >
            {featuredPost?.title}
          </h2>

          <p className="text-[14px] text-[#444934]">
            {featuredPost?.description}
          </p>

          <div>
            <span>{featuredPost?.date}</span>
            <span> / </span>
            <span>{featuredPost?.readingTime}</span>
          </div>
        </div>
      </div>

      <BlogFilter blogs={posts} />
    </div>
  );
};

export default page;