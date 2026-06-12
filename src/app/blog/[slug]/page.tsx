import { getPostBySlug } from '@/src/lib/blog/getAllPosts';
import Button from '@/src/components/Button/Button';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Modal from '@/src/components/Modal/Modal';
import Image from 'next/image';

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
    <article className="mt-8 max-w-4xl mx-auto px-4 sm:px-6">
      <Button />

      <div className="flex flex-wrap gap-2 mb-4 text-sm text-[#5D6D84]">
        <span>{post.metadata.date}</span>
        <span>/</span>
        <span>{post.metadata.readingTime}</span>
      </div>

      <h1 className="font-bold text-3xl md:text-[36px] leading-tight mb-6">
        {post.metadata.title}
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-[#444934] mb-6">
        {post.metadata.description}
      </p>

      {post.metadata.cover?.trim() && (
        <div className="relative w-full aspect-[16/9] mt-4 mb-8 overflow-hidden rounded-lg">
          <Image
            src={post.metadata.cover}
            alt={post.metadata.title}
            fill
            sizes="(max-width: 768px) 100vw, 1024px"
            className="object-cover"
            priority
          />
        </div>
      )}

      <div
        className="
          prose
          prose-sm
          sm:prose-base
          lg:prose-lg
          max-w-none
          mb-16
          dark:prose-invert
        "
      >
        <MDXRemote source={post.content} />
      </div>

      <Modal />
    </article>
  );
};

export default Page;