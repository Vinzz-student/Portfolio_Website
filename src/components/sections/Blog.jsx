import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiCalendar, HiUser, HiClock } from 'react-icons/hi'

const Blog = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable Applications with React and Node.js',
      excerpt: 'Pelajari cara merancang dan membangun aplikasi web yang skalabel menggunakan MERN stack dengan praktik terbaik dan pola desain.',
      image: '/images/blog1.png',
      link: "https://vinzz-student.github.io/Blog-Building-Scalable-Applications-with-React-and-Node.js/",
      author: 'Reyando Alviano',
      date: 'Feb 24, 2026',
      readTime: '8 min read',
      category: 'Development',
      slug: 'building-scalable-applications'
    },
    {
      id: 2,
      title: 'Mastering Tailwind CSS: Tips and Tricks',
      excerpt: 'Temukan teknik Tailwind CSS tingkat lanjut untuk membangun antarmuka pengguna yang indah dan responsif dengan lebih cepat dan efisien.',
      image: '/images/blog2.png',
      link: "https://vinzz-student.github.io/Blog-Mastering-Tailwind-CSS-Tips---Tricks/",
      author: 'Reyando Alviano',
      date: 'Feb 24, 2026',
      readTime: '6 min read',
      category: 'CSS',
      slug: 'mastering-tailwind-css'
    },
    {
      id: 3,
      title: 'Introduction to TypeScript for React Developers',
      excerpt: 'Panduan komprehensif untuk menggunakan TypeScript dengan React guna menulis kode yang lebih tangguh dan mudah dipelihara.',
      image: '/images/blog3.png',
      link: 'https://vinzz-student.github.io/Blog-Introduction-to-TypeScript-for-React-Developers/',
      author: 'Reyando Alviano',
      date: 'Feb 24, 2026',
      readTime: '10 min read',
      category: 'TypeScript',
      slug: 'typescript-for-react-devs'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="blog" className="py-20">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Latest <span className="gradient-text">Blog Posts</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
          />
          <motion.p
            variants={itemVariants}
            className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Thoughts, insights, and tutorials about web development, technology, and design.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="neon-card cursor-pointer bg-white dark:bg-gray-900 transition-colors duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </div>
                </a>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600 dark:text-gray-400">
                  <span className="flex items-center">
                    <HiCalendar className="mr-1" size={14} />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <HiClock className="mr-1" size={14} />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 relative z-10">
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    {post.title}
                  </a>
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {post.excerpt}
                </p>

                {/* Author */}
                <div className="flex items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                  <HiUser className="text-gray-400 mr-2" size={16} />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    By {post.author}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Blog