import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'

import Certifications from '@/components/Certifications'

const certifications = () => {
    return (
        <>
            <Head>
                <title>Samuel Jeromiah | Certifications Page</title>
                <meta name="description" content="Certifications of Samuel Jeromiah" />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16'>
                    <Certifications />
                </Layout>
            </main>
        </>
    )
}

export default certifications
