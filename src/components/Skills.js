import React from 'react'
import { motion } from "framer-motion"

const SkillBadge = ({ name }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-dark text-light dark:bg-light dark:text-dark py-2 px-4 rounded-lg font-semibold text-sm border border-transparent hover:border-dark hover:bg-light hover:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light transition-colors duration-300 shadow-md cursor-pointer"
    >
        {name}
    </motion.div>
)

const SkillCategory = ({ title, skills }) => (
    <div className="flex flex-col items-start justify-start w-full border border-dark/20 dark:border-light/20 rounded-2xl p-6 bg-light/50 dark:bg-dark/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-xl font-bold mb-6 text-primary dark:text-primaryDark border-b-2 border-primary/20 dark:border-primaryDark/20 pb-2 w-full">{title}</h3>
        <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
                <SkillBadge key={skill} name={skill} />
            ))}
        </div>
    </div>
)

const Skills = () => {
    const categories = [
        {
            title: "Languages",
            skills: ["Python", "Java", "SQL", "JavaScript", "C++", "R"]
        },
        {
            title: "AI / Machine Learning",
            skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Deep Learning", "Computer Vision", "NLP", "Reinforcement Learning", "Generative AI", "XGBoost"]
        },
        {
            title: "Data Science",
            skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Preprocessing", "Statistical Analysis", "Feature Engineering", "Data Visualization"]
        },
        {
            title: "Tools & Platforms",
            skills: ["Git", "Docker", "AWS", "Jupyter", "Linux", "MLOps", "Model Deployment", "FastAPI", "Flask"]
        },
        {
            title: "Web Development",
            skills: ["React", "Next.js", "Node.js", "Spring Boot", "Angular", "HTML5", "CSS3", "Tailwind CSS"]
        }
    ]

    return (
        <>
            <h2 className='font-bold text-8xl mt-2 w-full text-center md:text-6xl md:mt-12 mb-16'>Technical Skills</h2>
            <div className='w-full grid grid-cols-2 gap-8 px-16 md:px-8 sm:px-4 md:grid-cols-1 pb-24'>
                {categories.map((cat, index) => (
                    <motion.div
                        key={cat.title}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <SkillCategory title={cat.title} skills={cat.skills} />
                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default Skills
