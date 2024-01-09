import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  console.log(projects);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-flow max-w-full justify-evenly
       mx-auto items-center z-0'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>
      <div
        className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 
      scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#cbd5e1]/80 scrollbar-thumb-rounded-md mt-10'
      >
        {projects.map((project, i) => (
          <div
            key={project._id}
            className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 1,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='w-96 h-[460px] md:h-[500px]'
              src={urlFor(project?.image).url()}
              alt=''
            />
            <div className='space-y-5 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-xl md:text-4xl font-semibold text-center'>
                <span className='underline decoration-[#cbd5e1]/50'>
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project.title}
              </h4>
              {/* tectnologies */}
              <div className='flex items-center justify-center space-x-2'>
                {project.technologies.map((technology) => (
                  <img
                    className='w-10 h-10'
                    src={urlFor(technology.image).url()}
                    alt={technology.title}
                  />
                ))}
              </div>
              <p className='text-lg text-center md:text-left'>
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full absolute top-[30%] bg-[#cbd5e1]/10 left-0 h-[500px] -skew-y-12 ' />
    </motion.div>
  );
};

export default Projects;
