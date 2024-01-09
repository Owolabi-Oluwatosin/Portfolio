import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  //console.log(experience)
  return (
    <article
      className='flex flex-col rounded-lg items-center space-y-2 flex-shrink-0 
        w-[300px] md:w-[400px] snap-center bg-[#292929] p-5 hover:opacity-100 
        opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden mt-24'
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={urlFor(experience?.companyImage).url()}
        alt='Picture of the software engineer'
        className='w-24 h-24 rounded-full xl:w-[100px] xl:h-[100px] object-center object-fill'
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-xl text-center md:text-left md:text-2xl font-light'>
          {experience.company}
        </h4>
        <p className='text-xl text-center md:text-left font-bold mt-1'>
          {experience.jobTitle}
        </p>
        <div className='flex justify-center md:justify-start space-x-2 my-1'>
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              src={urlFor(technology?.image).url()}
              alt={technology.title}
              className='w-10 h-10 rounded-full object-center object-fill'
            />
          ))}
        </div>
        <p className='upparcase py-2 text-center md:text-left text-gray-300'>
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience?.isCurrentlyWorkingHere
            ? "present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul
          className='list-disc space-y-2 text-lg w-[300px] h-36 overflow-y-scroll pr-2
                scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#cbd5e1]/80 scrollbar-thumb-rounded-md'
        >
          {experience.point?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
