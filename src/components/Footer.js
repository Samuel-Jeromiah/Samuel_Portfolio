import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
            <div className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
                <span>2026 &copy; All Rights Reserved by Samuel Gnanam.</span>
                <div className='flex items-center lg:py-2'>
                    Samuel Gnanam Portfolio
                </div>
            </div>
        </footer>
    )
}

export default Footer
