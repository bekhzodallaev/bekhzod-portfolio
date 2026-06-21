import { getPhotoBySlug } from "@/src/lib/photos/photoGallery";
import { MDXRemote } from "next-mdx-remote/rsc";
import Button from '@/src/components/Button/Button';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const Page = async ({ params }: Props) => {
  const { slug } = await params;

  const photo = getPhotoBySlug(slug);

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
        <Button />
      <h1 className="mb-2 text-4xl font-bold">
        {photo.frontmatter.title}
      </h1>

      <p className="mb-8 text-muted-foreground">
        {photo.frontmatter.location} · {photo.frontmatter.date}
      </p>

      <article className="prose prose-lg dark:prose-invert max-w-none">
        <MDXRemote source={photo.content} />
      </article>
    </main>
  );
};

export default Page;