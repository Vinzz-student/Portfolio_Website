import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { BsGithub, BsLinkedin, BsTwitter, BsSend, BsWhatsapp, BsInstagram, BsEnvelope } from 'react-icons/bs'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'

const Contact = () => {
  const ref = useRef(null)
  const formRef = useRef()
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    {
      icon: HiMail,
      label: 'Email',
      value: 'reynandoandrealviano@gmail.com',
      link: 'https://mail.google.com/mail/u/0/?hl=id&tf=cm&fs=1&to=reynandoandrealviano@gmail.com'
    },
    {
      icon: HiPhone,
      label: 'Phone',
      value: '+62 8151 5188 150',
      link: 'https://api.whatsapp.com/send?phone=62815151881507'
    },
    {
      icon: HiLocationMarker,
      label: 'Location',
      value: 'Jawa Timur, IDN',
      link: 'https://www.google.com/maps/place/Jawa+Timur/@-6.9101657,112.2640013,8z/data=!3m1!4b1!4m6!3m5!1s0x2da393f79feeb5c5:0x1030bfbca7cb850!8m2!3d-7.5360639!4d112.2384017!16zL20vMDF2Zndk?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D'
    }
  ]

  const socialLinks = [
    { icon: BsGithub, href: 'https://github.com/Vinzz-student', label: 'GitHub' },
    { icon: BsWhatsapp, href: 'https://api.whatsapp.com/send?phone=62815151881507', label: 'Whatsapp' },
    { icon: BsInstagram, href: 'https://www.instagram.com/v1nzzz666/', label: 'Instagram' },
    { icon: BsEnvelope, href: 'https://mail.google.com/mail/u/0/?hl=id&tf=cm&fs=1&to=reynandoandrealviano@gmail.com', label: 'Gmail' },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Replace with your EmailJS credentials
      await emailjs.sendForm(
        'service_e9mbf5o',
        'template_t8bt22r',
        formRef.current,
        'PWfKzYFGtDj78gA5x'
      )
      
      toast.success('Message sent successfully!')
      formRef.current.reset()
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

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
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold mb-6"
            >
              Let's Work Together
            </motion.h3>
            
            <motion.p
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-400 mb-8 text-lg"
            >
              Saya selalu tertarik untuk mendengar tentang peluang baru dan proyek-proyek menarik. Baik Anda memiliki pertanyaan atau hanya ingin menyapa, jangan ragu untuk menghubungi saya!
            </motion.p>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {info.label}
                    </p>
                    <p className="font-semibold">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl"
            >
              <motion.div variants={itemVariants} className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                  placeholder="Reynando Alviano"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                  placeholder="reynandoandrealviano@gmail.com"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                  placeholder="Project Inquiry"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <BsSend size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact