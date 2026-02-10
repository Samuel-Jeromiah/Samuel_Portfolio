import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"

const Details = ({ type, time, place, info, status }) => {
    return (
        <li className='my-4 first:mt-0 last:mb-0 w-full mx-auto flex flex-col items-center justify-start gap-4 p-8 border border-solid border-dark bg-light rounded-2xl dark:bg-dark dark:border-light'>
            <div className='w-full flex justify-between items-center mb-4'>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm bg-primary/20 text-primary px-3 py-1 rounded-full dark:bg-primaryDark/20 dark:text-primaryDark'>
                    {status}
                </span>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time}
                </span>
            </div>

            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg w-full text-left mb-2'>{type}</h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 w-full text-left mb-4'>
                {place}
            </span>
            <div className='font-medium w-full md:text-sm text-left mt-2'>
                <ul className='list-disc ml-5'>
                    {info.map((point, index) => (
                        <li key={index} className='mb-2'>
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </li>
    )
}

const Education = () => {
    return (
        <div className='my-32 mt-16'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Education</h2>

            <ul className='w-[90%] mx-auto grid grid-cols-2 gap-8 md:grid-cols-1'>
                <Details
                    type="Master's degree, Artificial Intelligence"
                    time="Sep 2025 – Dec 2027"
                    place="Northeastern University"
                    info={[
                        "Grade: 4.0",
                        "Maintained perfect 4.0 GPA in AI graduate program",
                        "Completed advanced coursework in Machine Learning, Algorithms, and AI Foundations",
                        "Developed production-ready AI applications in healthcare and finance domains"
                    ]}
                    status="Current"
                />
                <Details
                    type="Bachelor of Technology - BTech, Artificial Intelligence and Data Science"
                    time="Nov 2021 – May 2025"
                    place="R.M.K College Of Engineering And Technology"
                    info={[
                        "Grade: 8.2",
                        "Key Achievements:",
                        "🏆 1st Prize Winner - National Science Day Expo (Inter-College Competition)",
                        "Developed Smart Blind Navigation Kit with ultrasonic obstacle detection and GPS tracking, competing against multiple colleges at national level",
                        "Activities & Leadership:",
                        "Participated in national-level technical symposiums and presented research",
                        "Competed in inter-college technical competitions, developing problem-solving expertise",
                        "Engaged in college sports programs, strengthening teamwork and discipline"
                    ]}
                    status="Completed"
                />
            </ul>
        </div>
    )
}

export default Education
