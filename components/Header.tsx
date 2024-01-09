import React, { useEffect, useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";
import { Social } from '../typings';
import Link from 'next/link';

type Props = {
    socials: Social[]
}

const Header = ({ socials }: Props) => {

    return (
        <header className='sticky p-5 top-0 flex items-start justify-between max-w-5xl mx-auto z-20 xl:items-center'>
            {/* Social Icons */}
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className='flex flex-row items-center'
            >
                {socials.map((social) => (
                    <SocialIcon
                        key={social._id}
                        url={social.url}
                        fgColor='gray'
                        bgColor='transparent'
                    />
                ))}
            </motion.div>
            {/* Contact form */}
            <Link href='#contact'>
                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1.5,
                    }}
                    className='flex flex-row items-center cursor-pointer text-gray-300'
                >
                    {/* <SocialIcon
                        className='cursor-pointer'
                        network='email'
                        fgColor='gray'
                        bgColor='transparent'
                    /> */}
                    <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
                        Get In Touch
                    </p>
                </motion.div>
            </Link>
        </header>
    )
}

export default Header;