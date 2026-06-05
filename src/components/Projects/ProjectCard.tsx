import React from 'react';
import Image from 'next/image';
import { TbExternalLink } from 'react-icons/tb';
import { FaCode } from 'react-icons/fa';

type ProjectCardType = {
  image: string;
  name: string;
  desc: string;
  webUrl: string;
  githubUrl: string;
};

const ProjectCard = ({
  image,
  name,
  desc,
  webUrl,
  githubUrl,
}: ProjectCardType) => {
  return (
    <div
      className="
        w-full
        flex
        relative
        flex-col
        mt-4
        p-3
        gap-4
        hover-200
        transition-colors
        duration-200
        group
      "
    >
      <div className="relative w-full overflow-hidden">
        <Image
          src={image}
          width={400}
          height={256}
          alt="Project Photo"
          className="
            w-full
            h-auto
            transition-transform
            duration-300
            group-hover:scale-110
          "
        />
      </div>

      <h3
        className="
          mt-3
          text-lg
          md:text-[24px]
          font-semibold
          transition-colors
          duration-200
          group-hover:text-[#526600]
        "
      >
        {name}
      </h3>

      <p className="text-base line-clamp-4">
        {desc}
      </p>

      <div className="flex justify-evenly mt-5 text-sm">
        <div className="flex gap-3 items-center">
          <a
            href={webUrl}
            className="flex gap-3 items-center transition-colors duration-200 hover:text-[#526600]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbExternalLink />
            Live Demo
          </a>
        </div>

        <div className="flex gap-3 items-center">
          <a
            href={githubUrl}
            className="flex gap-3 items-center transition-colors duration-200 hover:text-[#526600]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCode />
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;