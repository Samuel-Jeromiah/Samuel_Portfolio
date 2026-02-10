import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { TwitterIcon, DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, SunIcon, MoonIcon } from './Icons'
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`
            h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
            dark:bg-light`}
            >
                &nbsp;
            </span>
        </Link>
    )
}

const NavBar = () => {
    return (
        <header
            className='w-full px-32 py-8 font-medium flex items-center justify-between
    dark:text-light relative z-10'
        >
            <div className='w-full flex justify-between items-center lg:hidden'>
                <div className='flex items-center justify-center'>
                    <Logo />
                </div>
                <nav>
                    <CustomLink href="/" title="Home" className='mr-4' />
                    <CustomLink href="/about" title="About" className='mx-4' />
                    <CustomLink href="/projects" title="Projects" className='mx-4' />
                    <CustomLink href="/skills" title="Skills" className='mx-4' />
                    <CustomLink href="/certifications" title="Certifications" className='mx-4' />
                    <CustomLink href="/education" title="Education" className='mx-4' />
                    <CustomLink href="/experience" title="Professional Experience" className='ml-4' />
                </nav>

                <nav className="flex items-center justify-center flex-wrap">
                    <motion.a href="https://github.com/LuminarySam30" target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mx-3 bg-light rounded-full text-dark"
                    >
                        <GithubIcon />
                    </motion.a>
                    <motion.a href="https://linkedin.com" target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 ml-3 bg-light rounded text-[#0077B5]"
                    >
                        <LinkedInIcon />
                    </motion.a>
                </nav>
            </div>

            <div className='w-full flex justify-between items-center hidden lg:flex'>
                <nav>
                    <CustomLink href="/" title="Home" className='mr-4' />
                    <CustomLink href="/about" title="About" className='mx-4' />
                    <CustomLink href="/projects" title="Projects" className='mx-4' />
                    <CustomLink href="/skills" title="Skills" className='mx-4' />
                    <CustomLink href="/certifications" title="Certifications" className='mx-4' />
                    <CustomLink href="/education" title="Education" className='mx-4' />
                    <CustomLink href="/experience" title="Professional Experience" className='ml-4' />
                </nav>

                <nav className="flex items-center justify-center flex-wrap">
                    <motion.a href="https://github.com/LuminarySam30" target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mx-3 bg-light rounded-full text-dark"
                    >
                        <GithubIcon />
                    </motion.a>
                    <motion.a href="https://linkedin.com" target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 ml-3 bg-light rounded text-[#0077B5]"
                    >
                        <LinkedInIcon />
                    </motion.a>
                </nav>
            </div>

            <div className='absolute left-[50%] top-2 translate-x-[-50%] hidden lg:flex'>
                <Logo />
            </div>
        </header>
    )
}

export default NavBar
