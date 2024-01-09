import React from 'react';
import { motion } from "framer-motion";
import SkillCom from './SkillCom';
import { Skill } from '../typings';

type Props = {
  skills: Skill[];
}

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, }}
      animate={{ opacity: 1, }}
      transition={{ duration: 1.5, }}
      className='h-screen flex relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>
      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
        Hover over a skill for current proficiency
      </h3>
      <div className='absolute top-[12rem] grid grid-cols-6 gap-4'>
        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <SkillCom key={skill._id} skill={skill} />
        ))}
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <SkillCom key={skill._id} skill={skill} directionLeft/>
        ))}
      </div>
    </motion.div>
  )
}

export default Skills;