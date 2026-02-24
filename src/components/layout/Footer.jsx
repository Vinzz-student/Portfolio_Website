import React from 'react'
import { motion } from 'framer-motion'
import { BsGithub, BsLinkedin, BsTwitter, BsHeart, BsEnvelope, BsWhatsapp } from 'react-icons/bs'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: BsGithub, href: 'https://github.com/Vinzz-student', label: 'GitHub' },
    { icon: BsEnvelope, href: 'https://mail.google.com/mail/u/0/?hl=id&tf=cm&fs=1&to=reynandoandrealviano@gmail.com', label: 'Gmail' },
    { icon: BsWhatsapp, href: 'https://api.whatsapp.com/send?phone=6281515188150', label: 'Whatsapp' },
  ]

  const quickLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Contact', href: 'contact' },
  ]

  const scrollToSection = (href) => {
    const element = document.getElementById(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-50 dark:bg-gray-800/50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">Portfolio</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Creating stunning digital experiences that combine beautiful design 
              with powerful functionality. Let's build something amazing together!
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>Email: reynandoandrealviano@gmail.com</li>
              <li>Phone: +62 8151 5188 150</li>
              <li>Location: Jawa Timur, IDN</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Portfolio. All rights reserved.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
              Made with <BsHeart className="mx-1 text-red-500 animate-pulse" /> by Reynando Alviano
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer