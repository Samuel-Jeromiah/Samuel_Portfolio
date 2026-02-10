import Head from 'next/head'
import React, { useEffect, useRef } from 'react'

import Layout from '@/components/Layout'
import Image from 'next/image'
// // import profilePic from '../../public/profile.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion'


const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

const About = () => {
    return (
        <>
            <Head>
                <title>Samuel Jeromiah | About Page</title>
                <meta name="description" content="About Samuel Jeromiah" />
            </Head>
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>

                    <div className='grid w-full grid-cols-12 gap-8 gap-y-16 sm:gap-8'>

                        {/* Biography Card - Large Feature */}
                        <div className='col-span-8 flex flex-col items-start justify-center rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-12 md:order-2'>
                            <h2 className='mb-4 text-2xl font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                            <p className='font-medium leading-relaxed text-lg'>
                                I build end-to-end machine learning systems that solve real-world problems in healthcare and finance. My work spans the full ML pipeline from data preprocessing and model training to deployment and production. I don&apos;t just build models; I create full-stack applications that users can actually interact with.
                            </p>
                            <p className='mt-4 font-medium leading-relaxed text-lg'>
                                Currently seeking Summer 2026 AI/ML Engineering, Data Science, or Machine Learning co-op opportunities.
                            </p>
                        </div>

                        {/* Profile Image Card */}
                        <div className='col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-4 dark:bg-dark dark:border-light xl:col-span-12 md:order-1'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                            <Image src={"/SAMUEL.jpg"} alt="Samuel Jeromiah" className='w-full h-auto rounded-2xl' width={500} height={500} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>

                        {/* Recent Work Card */}
                        <div className='col-span-4 flex flex-col items-start justify-start rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-6 md:col-span-12 md:order-3'>
                            <h2 className='mb-4 text-xl font-bold uppercase text-dark/75 dark:text-light/75'>Recent Work</h2>
                            <ul className='list-disc ml-5 font-medium space-y-2'>
                                <li>Credit card fraud detection (XGBoost/SMOTE)</li>
                                <li>Employee management system (Spring Boot/Angular)</li>
                                <li>End-to-end ML pipelines with automated deployment</li>
                            </ul>
                        </div>

                        {/* Tech Stack Card */}
                        <div className='col-span-4 flex flex-col items-start justify-start rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-6 md:col-span-12 md:order-4'>
                            <h2 className='mb-4 text-xl font-bold uppercase text-dark/75 dark:text-light/75'>Tech Stack</h2>
                            <p className='font-medium leading-relaxed'>
                                Python, Java, TensorFlow, Scikit-learn, Spring Boot, Angular, SQL
                            </p>
                        </div>

                        {/* Stats Card */}
                        <div className='col-span-4 flex flex-col items-center justify-center rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-12 md:col-span-12 md:order-5'>
                            <div className='flex flex-col items-center justify-center space-y-6 w-full'>
                                <div className='flex flex-col items-end justify-center xl:items-center'>
                                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                        <AnimatedNumbers value={10} />+
                                    </span>
                                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects Completed</h2>
                                </div>

                                <div className='w-full h-[1px] bg-dark/20 dark:bg-light/20'></div>

                                <div className='flex flex-col items-end justify-center xl:items-center'>
                                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                        <AnimatedNumbers value={4} />+
                                    </span>
                                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Years of Experience</h2>
                                </div>
                            </div>
                        </div>

                    </div>


                </Layout>
            </main>
        </>
    )
}

export default About
