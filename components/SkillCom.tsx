import React from 'react';
import { motion } from "framer-motion";
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    directionLeft?: boolean;
    skill: Skill
}

const Skill = ({ directionLeft, skill }: Props) => {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200, 
                    opacity: 0,
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                src={urlFor(skill.image).url()}
                alt={skill.title}
                className="w-12 h-12 md:w-16 md:h-16 filter group-hover:grayacale rounded-full border border-gray-500 object-center object-fill transition duration-300 ease-in-out"
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12 md:w-16 md:h-16 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100'>{skill.progress}%</p>
                </div>
            </div>
        </div>
    )
}

export default Skill;