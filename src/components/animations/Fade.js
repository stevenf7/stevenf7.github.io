import React from "react";
import { motion } from "framer-motion";

const Fade = ({ 
  children, 
  bottom = false, 
  top = false, 
  left = false, 
  right = false,
  distance = "40px", 
  duration = 0.6, 
  delay = 0,
  cascade = false,
  ...props 
}) => {
  // Parse distance if it's a string with 'px'
  const parseDistance = (dist) => {
    if (typeof dist === 'string' && dist.includes('px')) {
      return parseInt(dist.replace('px', ''));
    }
    return parseInt(dist) || 40;
  };

  const distanceValue = parseDistance(distance);

  // Determine initial position based on direction
  let initialY = 0;
  let initialX = 0;
  
  if (bottom) initialY = distanceValue;
  if (top) initialY = -distanceValue;
  if (left) initialX = -distanceValue;
  if (right) initialX = distanceValue;

  // Base animation variants
  const variants = {
    hidden: { 
      opacity: 0, 
      y: initialY, 
      x: initialX 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      transition: {
        duration: duration / 1000, // Convert ms to seconds if needed
        delay: delay / 1000,
        ease: "easeOut"
      }
    }
  };

  // If cascade is true, stagger the children
  if (cascade) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        style={{
          display: "contents", // This removes the wrapper from layout flow
          ...props.style
        }}
        {...props}
      >
        {React.Children.map(children, (child, index) => (
          <motion.div 
            key={index} 
            variants={variants}
            style={{
              display: "contents"
            }}
          >
            {child}
          </motion.div>
        ))}
      </motion.div>
    );
  }

  // Regular fade animation
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      style={{
        display: "contents", // This removes the wrapper from layout flow
        ...props.style
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Fade;