import React from 'react'
import { getAllPhotos } from '@/src/lib/photos/photoGallery'
import GalleryCard from '@/src/components/Gallery/GalleryCard';
const page = () => {
  const photoCollection = getAllPhotos();
  return (
    <div className='mt-[2rem]'>
      <h1 className='text-3xl md:text-[36px] font-bold'>Through My Lens</h1>
    <p className="text-base text-[#444934]">
        A collection of photos taken during travels, events and trips filled with stories
      </p>
      <div className='mt-3 flex flex-col gap-5'>
        {photoCollection.map(photo => (
          <GalleryCard
            key={photo.slug}
            photo={photo}
          />
        ))}
      </div>
    </div>
  )
}

export default page
