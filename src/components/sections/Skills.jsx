import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGraphql,
  SiFigma,
  SiAdobexd,
  SiJquery,
} from 'react-icons/si'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const skillCategories = [
    {
      name: 'Frontend Development',
      skills: [
        { name: 'React', icon: SiReact, level: 75, color: '#61DAFB' },
        { name: 'Jquery', icon: SiJquery, level: 100, color: '#43a4ff' },
        { name: 'TypeScript', icon: SiTypescript, level: 80, color: '#3178C6' },
        { name: 'JavaScript', icon: SiJavascript, level: 90, color: '#F7DF1E' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 35, color: '#06B6D4' },
      ]
    },
    {
      name: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, level: 85, color: '#339933' },
        { name: 'Express', icon: SiExpress, level: 80, color: '#000000' },
        { name: 'MongoDB', icon: SiMongodb, level: 75, color: '#47A248' },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 70, color: '#4169E1' },
        { name: 'GraphQL', icon: SiGraphql, level: 65, color: '#E10098' },
      ]
    },
    {
      name: 'Tools & Others',
      skills: [
        { name: 'Docker', icon: SiDocker, level: 70, color: '#2496ED' },
        { name: 'Git', icon: SiGit, level: 90, color: '#F05032' },
        { name: 'Figma', icon: SiFigma, level: 75, color: '#F24E1E' },
        { name: 'Adobe XD', icon: SiAdobexd, level: 65, color: '#FF61F6' },
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const categoryVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20
      }
    }
  }

  return (
    <section id="skills" className="py-20">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2 variants={categoryVariants} className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.div
            variants={categoryVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
          />
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={categoryVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center md:text-left">
                {category.name}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <skill.icon
                        className="w-10 h-10"
                        style={{ color: skill.color }}
                      />
                      <div>
                        <h4 className="font-semibold text-lg">{skill.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Proficiency
                        </p>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block text-blue-600 dark:text-blue-400">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200 dark:bg-gray-700">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-600 to-purple-600"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills