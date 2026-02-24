import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'

const Certificate = ({ name, date, issuer, link, type }) => {
    return (
        <motion.li
            whileHover={{ y: -5 }}
            className="w-full flex flex-col items-center justify-between bg-light border border-dark rounded-2xl p-6 shadow-lg dark:bg-dark dark:border-light"
        >
            <h3 className="text-xl font-bold text-center mb-2">{name}</h3>
            <span className="text-sm font-medium text-dark/75 dark:text-light/75 mb-4">{issuer} | {date}</span>
            <Link
                href={link}
                target="_blank"
                className="bg-dark text-light dark:bg-light dark:text-dark py-2 px-6 rounded-lg font-semibold hover:bg-light hover:text-dark border border-transparent hover:border-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light transition-colors duration-300"
            >
                View Certificate
            </Link>
        </motion.li>
    )
}

const CertificateCategory = ({ title, certificates }) => (
    <div className="w-full mb-16 last:mb-0">
        <h3 className="font-bold text-4xl mb-8 w-full text-center text-primary dark:text-primaryDark">{title}</h3>
        <ul className='w-[90%] mx-auto grid grid-cols-3 gap-8 md:grid-cols-2 sm:grid-cols-1'>
            {certificates.map((cert, index) => (
                <Certificate
                    key={index}
                    name={cert.name}
                    date={cert.date}
                    issuer={cert.issuer}
                    link={cert.link}
                    type={cert.type}
                />
            ))}
        </ul>
    </div>
)

const Certifications = () => {
    const northeasternCertificates = [
        {
            name: "Innovation Challenge",
            date: "2025",
            issuer: "Northeastern University",
            link: "https://northeastern.badges.parchment.com/public/credentials/AkQxt6wXTKKqqMbxggH_1g?identity__email=jeromiah.s%40northeastern.edu",
            type: "Credential"
        },
        {
            name: "Essentials for Academic Success",
            date: "2025",
            issuer: "Northeastern University",
            link: "https://northeastern.badgr.com/public/credentials/pWw3XlhjRpquKBPhX9fN3Q?identity__email=jeromiah.s%40northeastern.edu",
            type: "Credential"
        },
        {
            name: "Foundations of Responsible AI Learning",
            date: "2025",
            issuer: "Northeastern University",
            link: "https://northeastern.badgr.com/public/credentials/OB332frsSruyPpFyOdwxDQ?identity__email=jeromiah.s%40northeastern.edu",
            type: "Credential"
        },
        {
            name: "Interview Communication",
            date: "2025",
            issuer: "Northeastern University",
            link: "https://northeastern.badgr.com/public/credentials/5s8lq6qESNu8-x3-M5T9yA?identity__email=jeromiah.s%40northeastern.edu",
            type: "Credential"
        },
    ]

    const nptelCertificates = [
        {
            name: "Python for Data Science",
            date: "2024",
            issuer: "NPTEL",
            link: "/certificates/Python_for_DataScience.jpg",
            type: "Image"
        }
    ]

    const internshipCertificates = [
        {
            name: "Internship Completion",
            date: "2023",
            issuer: "BSNL",
            link: "/certificates/BSNL.pdf",
            type: "PDF"
        },
        {
            name: "Internship Certificate",
            date: "2023",
            issuer: "Nuray Chemicals",
            link: "/certificates/Samuel Jeromiah G Completion Certificate.png",
            type: "Image"
        },
    ]

    const infosysCertificates = [
        {
            name: "Artificial Intelligence",
            date: "2024",
            issuer: "Infosys Springboard",
            link: "/certificates/Artificial_Intelligence.pdf",
            type: "PDF"
        },
        {
            name: "Computer Vision",
            date: "2024",
            issuer: "Infosys Springboard",
            link: "/certificates/Computer_vision.pdf",
            type: "PDF"
        },
        {
            name: "Data Science",
            date: "2024",
            issuer: "Infosys Springboard",
            link: "/certificates/Data_Science.pdf",
            type: "PDF"
        },
        {
            name: "Deep Learning",
            date: "2024",
            issuer: "Infosys Springboard",
            link: "/certificates/Deep Learning.pdf",
            type: "PDF"
        },
        {
            name: "IOT",
            date: "2024",
            issuer: "Infosys Springboard",
            link: "/certificates/IOT.pdf",
            type: "PDF"
        },
        {
            name: "Natural Language Processing",
            date: "2024",
            issuer: "Infosys Springboard",
            link: "/certificates/Natural_Language_processing.pdf",
            type: "PDF"
        },
        {
            name: "Robotic Process Automation",
            date: "2024",
            issuer: "Infosys Springboard",
            link: "/certificates/Robotic_process_Automation.pdf",
            type: "PDF"
        },
    ]

    return (
        <div className='my-16'>
            <h2 className='font-bold text-8xl mb-16 w-full text-center md:text-6xl xs:text-4xl'>Certifications</h2>

            <CertificateCategory title="Northeastern University" certificates={northeasternCertificates} />
            <CertificateCategory title="Infosys Springboard" certificates={infosysCertificates} />
            <CertificateCategory title="Internships" certificates={internshipCertificates} />
            <CertificateCategory title="NPTEL" certificates={nptelCertificates} />
        </div>
    )
}

export default Certifications
