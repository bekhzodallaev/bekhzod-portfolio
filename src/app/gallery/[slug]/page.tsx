import { getPhotoBySlug } from "@/src/lib/photos/photoGallery";
import { MDXRemote } from "next-mdx-remote/rsc";
import Button from "@/src/components/Button/Button";
import { mdxComponents } from "@/src/components/Gallery/MdxComponents";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const Page = async ({ params }: Props) => {
  const { slug } = await params;

  const photo = getPhotoBySlug(slug);

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Button />

      <header className="mb-12">
        <h1 className="mb-3 text-4xl font-bold">
          {photo.frontmatter.title}
        </h1>

        <p className="text-muted-foreground">
          {photo.frontmatter.location} · {photo.frontmatter.date}
        </p>
      </header>

      <article
        className="
          prose
          prose-lg
          dark:prose-invert

          max-w-none

          prose-p:leading-8
          prose-p:text-muted-foreground

          prose-headings:font-bold
          prose-headings:text-foreground

          prose-img:rounded-2xl
          prose-img:my-12
        "
      >
        <MDXRemote
          source={photo.content}
          components={mdxComponents}
        />
      </article>
    </main>
  );
};

export default Page;