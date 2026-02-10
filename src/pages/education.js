import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Education from '@/components/Education'

const education = () => {
    return (
        <>
            <Head>
                <title>Samuel Jeromiah | Education Page</title>
                <meta name="description" content="Education details of Samuel Jeromiah" />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16'>
                    <Education />
                </Layout>
            </main>
        </>
    )
}

export default education
