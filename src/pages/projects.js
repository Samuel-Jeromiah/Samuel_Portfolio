import Head from 'next/head'
import React from 'react'
import Layout from '@/components/Layout'

import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import { motion } from "framer-motion"

const FramerImage = motion(Image);

const Project = ({ title, type, img, link, github, summary, time }) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
            {/* <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    width={500} height={300}
                />
            </Link> */}

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <span className='text-dark/75 dark:text-light/75 font-medium text-sm mb-2'>{time}</span>

                <div className='w-full mt-2'>
                    <ul className='list-disc ml-5 font-medium text-dark dark:text-light sm:text-sm'>
                        {summary.map((point, index) => (
                            <li key={index} className='mb-2'>
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target="_blank" className='text-lg font-semibold underline md:text-base'> Visit </Link>
                    <Link href={github} target="_blank" className='w-8 md:w-6'> <GithubIcon /> </Link>
                </div>
            </div>
        </article>
    )
}

const FeaturedProject = ({ type, title, summary, img, link, github, time }) => {
    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
            {/* <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    width={500} height={300}
                    priority
                />
            </Link> */}

            <div className='w-full flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <span className='text-dark/75 dark:text-light/75 font-medium text-sm mb-2'>{time}</span>
                <div className='my-2 font-medium text-dark dark:text-light sm:text-sm'>
                    <ul className='list-disc ml-5'>
                        {/* Check if summary is array, otherwise render as text (backward compatibility, though replaced) */}
                        {Array.isArray(summary) ? summary.map((point, index) => (
                            <li key={index} className='mb-2'>{point}</li>
                        )) : summary}
                    </ul>
                </div>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10'> <GithubIcon /> </Link>
                    <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'> Visit Project </Link>
                </div>
            </div>
        </article>
    )
}

const Projects = () => {
    return (
        <>
            <Head>
                <title>Samuel Jeromiah | Projects Page</title>
                <meta name="description" content="Projects by Samuel Jeromiah" />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>

                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Chest AI"
                                type="Healthcare Image Classification & Deep Learning"
                                time="Jan 2026- Present"
                                img="/profile.png" // Placeholder
                                summary={[
                                    "Built multi-label chest X-ray classification model using PyTorch, ResNet-50, and CNNs processing 223K+ images from CheXpert dataset achieving 0.87 AUC across 14 disease categories with Grad-CAM explainability for clinical transparency",
                                    "Implemented end-to-end ML pipeline with data preprocessing, hyperparameter tuning, and FastAPI integration for real-time inference applying computer vision techniques to healthcare diagnostics"
                                ]}
                                link="/"
                                github="/"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Fraud Detection"
                                type="ML Model Development & Real-time API Deployment"
                                time="Dec 2025"
                                img="/profile.png" // Placeholder
                                summary={[
                                    "Designed, developed, and deployed production-ready machine learning classification model using Python, TensorFlow, and XGBoost processing 1.3M+ transactions achieving 99.6% accuracy solving real-world business problem",
                                    "Implemented real-time API integration for model inference serving 10K+ daily predictions participating in full ML lifecycle from data exploration to deployment, integration, testing, and monitoring demonstrating enterprise-scale AI solution delivery"
                                ]}
                                link="/"
                                github="/"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Patient Sentiment Analysis"
                                type="Healthcare AI & Generative AI Application"
                                time="Nov 2023"
                                img="/profile.png" // Placeholder
                                summary={[
                                    "Applied cutting-edge Generative AI and machine learning techniques to healthcare challenge processing 10K+ patient reviews achieving 85% accuracy implementing state-of-the-art AI capabilities enhancing diagnostic workflows",
                                    "Developed end-to-end AI solution using Python, Flask, and MongoDB from data exploration through model development to API integration and deployment working alongside data science principles to improve patient outcomes and healthcare delivery"
                                ]}
                                link="/"
                                github="/"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Employee Management"
                                type="Enterprise AI System & Data Infrastructure"
                                time="Nov 2023"
                                img="/profile.png" // Placeholder
                                summary={[
                                    "Designed and deployed enterprise-scale data infrastructure using Python, SQL, and RESTful APIs implementing machine learning-ready data pipelines for 1000+ user records",
                                    "Developed production system with real-time API integration, testing, and monitoring demonstrating hands-on experience with enterprise-level ML infrastructure and best practices"
                                ]}
                                link="/"
                                github="/"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Smart Blind Navigation Kit"
                                type="Real-time AI Application"
                                time="Feb 2021"
                                img="/profile.png" // Placeholder
                                summary={[
                                    "Won 1st Prize at National Science Day Expo developing real-time AI-powered IoT navigation system integrating Arduino Nano, Raspberry Pi, and ultrasonic sensors for obstacle detection with audio alerts for visually impaired users",
                                    "Implemented GPS tracking mobile application with real-time location monitoring and route guidance features demonstrating ability to deliver end-to-end projects applying AI techniques to real-world assistive technology applications"
                                ]}
                                link="/"
                                github="/"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default Projects
