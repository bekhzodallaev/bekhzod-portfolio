import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PhotoCollection } from '@/src/lib/photos/photoGallery';

interface GalleryCardProps {
  photo: PhotoCollection;
}

const GalleryCard = ({ photo }: GalleryCardProps) => {
  return (
    <Link href={`/gallery/${photo.slug}`}>
      <article className="overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow group">
        <div className="flex flex-col md:flex-row">
          <div className="relative h-64 w-full md:h-[420px] md:w-1/2">
            <Image
              src={photo.cover}
              alt={photo.title}
              fill
              className="object-cover
              object-cover
              transition-all
              duration-700
              grayscale
              brightness-75
              group-hover:brightness-100
              group-hover:grayscale-0
              "
            />

            <p className="absolute left-3 top-3 z-10 rounded bg-black/50 px-2 py-1 text-xs text-white backdrop-blur-sm md:text-sm">
              {photo.date}
            </p>
          </div>

          <div className="flex flex-1 flex-col justify-center p-5 md:p-8">
            <p className="text-sm text-muted-foreground">
              {photo.location}
            </p>

            <h2 className="mt-2 text-xl font-semibold md:text-3xl">
              {photo.title}
            </h2>

            <p className="mt-4 line-clamp-3 text-sm text-muted-foreground md:text-base">
              {photo.excerpt}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default GalleryCard;