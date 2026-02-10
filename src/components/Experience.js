import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"

const Details = ({ position, company, companyLink, time, address, work }) => {
    return (
        <li className='my-4 first:mt-0 last:mb-0 w-full mx-auto flex flex-col items-start justify-between p-8 border border-solid border-dark bg-light rounded-2xl dark:bg-dark dark:border-light'>

            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg w-full text-left mb-1 text-primary dark:text-primaryDark'>
                <a href={companyLink} target="_blank">{company}</a>
            </h3>

            <h4 className='capitalize font-bold text-xl sm:text-lg xs:text-base w-full text-left mb-2 text-dark/75 dark:text-light/75'>
                {position}
            </h4>

            <div className='w-full flex justify-start items-center mb-4'>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm bg-primary/20 text-primary px-3 py-1 rounded-full dark:bg-primaryDark/20 dark:text-primaryDark mr-4'>
                    {time}
                </span>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {address}
                </span>
            </div>

            <div className='font-medium w-full md:text-sm text-left mt-2'>
                <ul className='list-disc ml-5'>
                    {work.map((point, index) => (
                        <li key={index} className='mb-2'>
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </li>
    )
}

const Experience = () => {
    return (
        <div className='my-16'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Professional Experience</h2>

            <div className='w-[90%] mx-auto grid grid-cols-3 gap-8 md:grid-cols-1'>
                <Details
                    position="Machine Learning Engineer Intern" company="BSNL"
                    companyLink="www.bsnl.co.in"
                    time="Jul 2024 – Aug 2024" address="Chennai, India"
                    work={[
                        "Designed, developed, and deployed machine learning models using Python, R, and SQL improving operational efficiency by 8% participating in full lifecycle from data exploration to deployment and monitoring",
                        "Collaborated with stakeholders on AI solution implementation presenting findings to upper management delivering multiple projects demonstrating ability to work in enterprise-scale operations"
                    ]}
                />
                <Details
                    position="Data Science Intern" company="Nuray Chemicals"
                    companyLink="www.nuray.com"
                    time="Jul 2023 – Aug 2023" address="Chennai, India"
                    work={[
                        "Implemented end-to-end data pipeline using Python and SQL for pharmaceutical operations with 100% accuracy exploring and discovering data from multiple sources ensuring ML-ready datasets",
                        "Collaborated with internal colleagues on data science projects applying statistical analysis and machine learning techniques to healthcare-adjacent industry demonstrating partnership across diverse teams"
                    ]}
                />
                <Details
                    position="AI Development Intern" company="InterPe"
                    companyLink="www.interpe.com"
                    time="Jul 2022 – Aug 2022" address="Chennai, India"
                    work={[
                        "Delivered multiple software development projects using Python and Java in professional setting reducing defects by 30% through systematic development lifecycle practices",
                        "Collaborated with cross-functional teams applying data-driven approaches to project delivery demonstrating ability to work with various stakeholders in academic and professional setting"
                    ]}
                />
            </div>
        </div>
    )
}

export default Experience
