import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
// We will use the generated image path later, for now we assume it is in public folder
// import profilePic from '../../public/profile.png'
import AnimatedNumbers from '@/components/AnimatedNumbers'
import AnimatedText from '@/components/AnimatedText'
import { LinkArrow } from '@/components/Icons'

export default function Home() {
  return (
    <>
      <Head>
        <title>Samuel Jeromiah | Portfolio</title>
        <meta name="description" content="Portfolio of Samuel Jeromiah, AI and Machine Learning Graduate Student" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-[35%] md:w-full'>
              {/* Placeholder for now. User should replace this. */}
              <Image src={"/profile.png"} alt="Samuel Jeromiah" className='w-full h-auto lg:hidden md:inline-block md:w-full' width={500} height={500} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Turning Data Into Intelligence With AI & ML." className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                As an Artificial Intelligence and Machine Learning Graduate Student at Northeastern University, I am dedicated to building intelligent systems. Explore my latest projects showcasing my expertise in Deep Learning, Computer Vision, and NLP.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/samueljeromiah_Resume.pdf" target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link href="mailto:jeromiah.s@northeastern.edu"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >Contact</Link>
              </div>
            </div>
          </div>
          <div className='flex justify-between w-full mt-16 px-32 xl:px-16 lg:px-8 md:px-0'>
            <div className='flex flex-col items-end justify-center xl:items-center'>
              <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                <AnimatedNumbers value={10} />+
              </span>
              <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects Completed</h2>
            </div>
            <div className='flex flex-col items-end justify-center xl:items-center'>
              <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                <AnimatedNumbers value={4} />+
              </span>
              <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>years of experience</h2>
            </div>
          </div>
        </Layout>

      </main>
    </>
  )
}
