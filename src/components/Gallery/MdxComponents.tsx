import Image from "next/image";

export const mdxComponents = {
  img: ({ src = "", alt = "" }) => (
    <div className="my-12 overflow-hidden rounded-2xl">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={1200}
        className="
          w-full
          max-h-[700px]
          object-cover
          rounded-2xl
          shadow-lg
        "
      />
    </div>
  ),
};