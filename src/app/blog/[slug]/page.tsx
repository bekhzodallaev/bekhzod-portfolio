import ReactMarkdown from "react-markdown";
import { getPostBySlug } from "@/src/lib/blog/getAllPosts";
import Button from "@/src/components/Button/Button";

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
      <h1>{post.metadata.title}</h1>
      <p>{post.metadata.date}</p>
      <ReactMarkdown>
        {post.content}
      </ReactMarkdown>
    </article>
  );
};

export default Page;