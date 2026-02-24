import React from 'react'
import { motion } from 'framer-motion'

const SlideIn = ({ 
  children, 
  direction = 'left',
  delay = 0,
  duration = 0.5,
  className = '',
  ...props 
}) => {
  const directions = {
    left: { x: -100 },
    right: { x: 100 },
    top: { y: -100 },
    bottom: { y: 100 }
  }

  return (
    <motion.div
      initial={{ 
        opacity: 0,
        ...directions[direction]
      }}
      animate={{ 
        opacity: 1,
        x: 0,
        y: 0
      }}
      transition={{
        duration,
        delay,
        type: 'spring',
        stiffness: 100,
        damping: 20
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default SlideIn