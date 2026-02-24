import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiUser, HiCode, HiLightBulb, HiHeart } from 'react-icons/hi'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="./images/about.png"
                alt="About me"
                className="w-full h-auto"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-600/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4">
              Developer Penuh Semangat Menciptakan Pengalaman Digital yang Luar Biasa
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Saya seorang full-stack developer dengan pengalaman lebih 1 tahun dalam membangun aplikasi web yang memecahkan masalah dunia nyata. Perjalanan saya di bidang teknologi dimulai dengan rasa ingin tahu tentang bagaimana sesuatu bekerja, dan telah berkembang menjadi karier di mana saya dapat menciptakan solusi yang membuat perbedaan.
            </p>

            {/* Quote */}
            <blockquote className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl">
              <p className="text-lg italic">
                "Programmer hebat bukanlah programmer yang tidak pernah membuat bug, tetapi programmer yang tidak pernah menyerah memperbaikinya."
              </p>
              <footer className="mt-2 text-sm opacity-90">
                - Reynando Alviano
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About