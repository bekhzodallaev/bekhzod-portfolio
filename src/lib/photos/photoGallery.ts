import fs from "fs";
import matter from "gray-matter";
import path from "path";

export interface PhotoCollection {
  title: string;
  slug: string;
  cover: string;
  date: string;
  location: string;
  excerpt: string;
}

const photosDirectory = path.join(process.cwd(), 'content/photos');

export function getAllPhotos():PhotoCollection[]{
  
    const fileNames = fs.readdirSync(photosDirectory);

    const photos = fileNames.map((file) =>{
        const slug = file.replace('.mdx', '');
        const fullPath = path.join(photosDirectory, file);

        const fileContent = fs.readFileSync(fullPath, 'utf-8');

        const {data} = matter(fileContent);

        return {
            slug, 
            ...(data as Omit<PhotoCollection, "slug">),
        }

    })
    return photos.sort((a, b) => new Date(b.date as string).getTime() - new Date(a.date as string).getTime() );
}

export function getPhotoBySlug(slug: string) {
  const fullPath = path.join(
    photosDirectory,
    `${slug}.mdx`
  );

  const fileContent = fs.readFileSync(
    fullPath,
    "utf-8"
  );

  const { data, content } = matter(fileContent);

  return {
    slug,
    frontmatter: data,
    content,
  };
}