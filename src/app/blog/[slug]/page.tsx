import { getPostBySlug } from "@/src/lib/blog/getAllPosts";
import Button from "@/src/components/Button/Button";
import { MDXRemote } from "next-mdx-remote/rsc";
import Modal from "@/src/components/Modal/Modal";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const Page = async ({ params }: Props) => {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="mt-[2rem]">
      <Button />
      <div className="flex gap-3 mb-3  text-[#5D6D84]">
              <span>{post.metadata.date}</span>
              <span>/</span>
             <span>{post.metadata.readingTime}</span>
      </div>
      <h1 className="font-bold text-[28px] md:text-[36px]">{post.metadata.title}</h1>
      <p className="text-[20px] mb-2">{post.metadata.description}</p>
      
      <div className="mb-15">
      <MDXRemote source={post.content} />
      </div>
             <Modal />
          </article>
  );
};

export default Page;