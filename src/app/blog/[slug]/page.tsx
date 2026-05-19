import ReactMarkdown from "react-markdown";
import { getPostBySlug } from "@/src/lib/blog/getAllPosts";
import Button from "@/src/components/Button/Button";
import Footer from "@/src/components/Footer/Footer";

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
      <p className="mb-3 text-[#5D6D84]">{post.metadata.date}</p>
      <h1 className="text-[36px] font-bold">{post.metadata.title}</h1>
      <p className="text-[20px] mb-2">{post.metadata.description}</p>
      <ReactMarkdown>
        {post.content}
      </ReactMarkdown>
          </article>
  );
};

export default Page;