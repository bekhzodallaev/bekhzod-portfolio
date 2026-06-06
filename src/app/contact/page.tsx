import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import ContactForm from '@/src/components/Contact/ContactForm';

const page = () => {
  return (
    <div className="mt-[2rem]">
      <h1 className="text-3xl md:text-[36px] font-bold">
        Get in touch
      </h1>

      <p className="text-base text-[#444934]">
        Whether you have a question about a project, a job opportunity, or just
        want to say hi, my inbox is always open. I'll get back to you as soon as
        possible.
      </p>

      <div className="flex flex-col lg:flex-row gap-5 mt-5">
        <ContactForm />

        <div className="w-full lg:w-[40%] flex flex-col gap-3">
          <div className="w-full border-[#C5C9AD] border-1 self-start p-3">
            <div className="p-3 bg-white w-full h-[180px] md:h-[200px] rounded overflow-hidden mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.98227266458!2d20.896615479810382!3d52.23288709720495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarsaw!5e0!3m2!1sen!2spl!4v1778076684501!5m2!1sen!2spl"
                className="w-full h-full border-0 transition-transform duration-300"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex gap-3 items-center">
              <FaLocationDot fill="#526600" />

              <div>
                <p className="text-xs font-semibold">
                  LOCATION
                </p>

                <p className="text-sm">
                  Warsaw, Poland
                </p>
              </div>
            </div>
          </div>

          {/* GitHub Card */}

          <div className="flex justify-between border-1 border-[#C5C9AD] p-4 rounded items-center bg-white hover-200 transition-colors duration-200 hover:border-[#526600] dark:bg-[#131313]">
            <div className="flex justify-start gap-4">
              <div className="bg-[#F2F4F6] rounded p-3">
                <FaGithub fill="#526600" />
              </div>

              <div>
                <p className="text-xs font-semibold">
                  GITHUB
                </p>

                <p className="text-sm break-all">
                  https://github.com/bekhzodallaev
                </p>
              </div>
            </div>

            <a
              href="https://github.com/bekhzodallaev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiOutlineExternalLink
                stroke="#757961"
                size={20}
                className="hover-200 transition-colors duration-200 hover:stroke-[#526600]"
              />
            </a>
          </div>

          {/* LinkedIn Card */}

          <div className="flex justify-between border-1 border-[#C5C9AD] p-4 rounded items-center bg-white hover-200 transition-colors duration-200 hover:border-[#526600] dark:bg-[#131313]">
            <div className="flex justify-start gap-4">
              <div className="bg-[#F2F4F6] rounded p-3 flex items-center">
                <FaLinkedinIn fill="#526600" />
              </div>

              <div>
                <p className="text-xs font-semibold">
                  LINKEDIN
                </p>

                <p className="text-sm break-all">
                  https://www.linkedin.com/in/bekallaev/
                </p>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/bekallaev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiOutlineExternalLink
                stroke="#757961"
                size={20}
                className="hover-200 transition-colors duration-200 hover:stroke-[#526600] mr-3"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;