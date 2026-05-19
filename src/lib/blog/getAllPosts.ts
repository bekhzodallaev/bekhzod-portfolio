import fs from "fs";
import matter from "gray-matter";
import path from "path";

type Frontmatter = {
  title: string;
  description?: string;
  date: string;
  tags: string[];
  cover: string;
  featured?:boolean
  duration:string
  category:string
};


export type PostMeta = Frontmatter & {
  slug: string;
};

type Post = {
  metadata: PostMeta;
  content: string;
};

const postsDir = path.join(process.cwd(), "/content/blog");

let cachedPosts: PostMeta[] = [];

let cachedPostContents: Record<string, Post> = {};

const loadAllPosts = () => {
  if (cachedPosts.length > 0) {
    return cachedPosts;
  }

  const files = fs
    .readdirSync(postsDir)
    .filter(file => file.endsWith(".md") || file.endsWith(".mdx"));

  cachedPosts = files.map(file => {
    const slug = path.parse(file).name;

    const fileContent = fs.readFileSync(
      path.join(postsDir, file),
      "utf-8"
    );

    const { data, content } = matter(fileContent);

    const metadata: PostMeta = {
      ...(data as Frontmatter),
      slug,
    };

    cachedPostContents[slug] = {
      metadata,
      content,
    };

    return metadata;
  });

  cachedPosts.sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );

  return cachedPosts;
};

export const getAllPosts = () => {
  return loadAllPosts();
};

export const getPostBySlug = (slug: string) => {
  loadAllPosts();

  return cachedPostContents[slug];
};