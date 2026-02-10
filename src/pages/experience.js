import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'

import Experience from '@/components/Experience'


const experience = () => {
    return (
        <>
            <Head>
                <title>Samuel Jeromiah | Experience Page</title>
                <meta name="description" content="Professional Experience of Samuel Jeromiah" />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16'>
                    <Experience />

                </Layout>
            </main>
        </>
    )
}

export default experience
