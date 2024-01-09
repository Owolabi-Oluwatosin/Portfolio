import React from 'react';
import { motion } from "framer-motion";
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  pageInfo: PageInfo;
}

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, }}
      whileInView={{ opacity: 1, }}
      transition={{ duration: 1.5, }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-5xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{
          once: true
        }}
        src={urlFor(pageInfo?.profilePic).url()}
        alt="Picture of the software engineer"
        width="32" height="32"
        className="mb-1 md:mb-0 mt-32 md:mt-0 flex-shrink-0 w-[100px] h-[100px] rounded-full object-cover md:w-[150px] md:h-[150px] md:rounded-lg xl:w-[250px] xl:h-[350px] "
      />
      <div className='space-y-5 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is a{" "}
          <span className='underline decoration-[#cbd5e1]/50'>little</span>{" "}
          background
        </h4>
        <p className='text-base'>
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  )
}

export default About;