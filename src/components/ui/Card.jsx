import React from 'react'
import { motion } from 'framer-motion'

const Card = ({ 
  children, 
  hover = true,
  className = '',
  onClick,
  ...props 
}) => {
  const baseClasses = 'bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden'
  const hoverClasses = hover ? 'hover:shadow-xl transition-all duration-300 cursor-pointer' : ''

  const classes = `${baseClasses} ${hoverClasses} ${className}`

  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card