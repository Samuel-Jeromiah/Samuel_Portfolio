import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'

import Skills from '@/components/Skills'

const skills = () => {
    return (
        <>
            <Head>
                <title>Samuel Jeromiah | Skills Page</title>
                <meta name="description" content="Technical skills of Samuel Jeromiah" />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16'>
                    <Skills />
                </Layout>
            </main>
        </>
    )
}

export default skills
