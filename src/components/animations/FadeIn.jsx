import React from 'react'
import { motion } from 'framer-motion'

const FadeIn = ({ 
  children, 
  delay = 0, 
  duration = 0.5,
  direction = 'up',
  distance = 50,
  className = '',
  ...props 
}) => {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {}
  }

  const initial = {
    opacity: 0,
    ...directions[direction]
  }

  const animate = {
    opacity: 1,
    x: 0,
    y: 0
  }

  const transition = {
    duration,
    delay,
    ease: [0.43, 0.13, 0.23, 0.96]
  }

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn