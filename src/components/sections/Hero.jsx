import React from 'react'
import { motion } from 'framer-motion'
import { HiDownload, HiMail } from 'react-icons/hi'
import { BsEnvelope, BsGithub, BsInstagram, BsLinkedin, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import { ReactTyped } from 'react-typed'
import { FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import "../../styles/animations.css";

const Hero = () => {
  const socialLinks = [
    { icon: BsGithub, href: 'https://github.com/Vinzz-student', label: 'GitHub' },
    { icon: BsEnvelope, href: 'https://mail.google.com/mail/u/0/?hl=id&tf=cm&fs=1&to=reynandoandrealviano@gmail.com', label: 'Email' },
    { icon: BsInstagram, href: 'https://www.instagram.com/v1nzzz666/', label: 'Instagram' },
    { icon: BsWhatsapp, href: 'https://api.whatsapp.com/send?phone=6281515188150', label: 'Whatsapp' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      {/* Decorative Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-2000" />

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center"
          >
            <div className="relative w-[400px] h-[400px] z-10">

          {/* IMAGE CONTAINER */}
          <div className="relative w-full h-full overflow-hidden blob-shape">
            <img
              src="/images/profile.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* ROTATING BORDER */}
          <div className="absolute inset-[-20px] border-2 border-primary blob-shape animate-rotate -z-10"></div>

          {/* FLOATING ICONS */}
          <div className="absolute inset-0 z-20">
      
          <div className="float-icon bg-white dark:bg-gray-800 top-[10%] left-[10%]">
            <FaJsSquare />
          </div>

          <div className="float-icon bg-white dark:bg-gray-800 top-[60%] right-[10%]">
            <FaReact />
          </div>

          <div className="float-icon bg-white dark:bg-gray-800 bottom-[20%] left-[20%]">
            <FaNodeJs />
          </div>

        </div>
      </div>
    </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Hi, I'm{' '}
            <span className="gradient-text">
              Reynando Alviano
            </span>
          </motion.h1>

          {/* Typed Animation */}
          <motion.div
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6"
          >
            I'm a{' '}
            <ReactTyped
              strings={[
                'Full Stack Developer',
                'UI/UX Designer',
                'Problem Solver',
                'DevOps Engineer'
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
              className="text-blue-600 dark:text-blue-400 font-semibold"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-8 text-lg"
          >
            Saya seorang Full-stack Developer dengan passion untuk membangun aplikasi web yang tidak hanya indah secara visual tetapi juga kuat secara teknis.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <a href='https://drive.google.com/file/d/1usN7LKna53uRzTRebutnYTGLimkUCqXb/view?usp=drive_link' className="btn-primary flex items-center gap-2" target="_blank" rel="noopener noreferrer">
              <HiDownload size={20} />
              Download CV
            </a>
            <a href='#contact' className="btn-secondary flex items-center gap-2">
              <HiMail size={20} />
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero