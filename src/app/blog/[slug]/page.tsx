import { getPostBySlug } from "@/src/lib/blog/getAllPosts";
import Button from "@/src/components/Button/Button";
import { MDXRemote } from "next-mdx-remote/rsc";
import Modal from "@/src/components/Modal/Modal";
import Image from "next/image";

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

      <div className="flex gap-3 mb-3 text-sm text-[#5D6D84]">
        <span>{post.metadata.date}</span>
        <span>/</span>
        <span>{post.metadata.readingTime}</span>
      </div>

      <h1 className="font-bold text-3xl md:text-[36px] mb-6">
        {post.metadata.title}
      </h1>

      <p className="text-xl mb-4">
        {post.metadata.description}
      </p>

      {post.metadata.cover?.trim() && (
  <div className="relative w-full h-[220px] md:h-[450px] mt-4 mb-6 overflow-hidden rounded-lg">
    <Image
      src={post.metadata.cover}
      alt={post.metadata.title}
      fill
      className="object-contain"
      priority
    />
  </div>
)}

      <div className="mb-16">
        <MDXRemote source={post.content} />
      </div>

      <Modal />
    </article>
  );
};

export default Page;