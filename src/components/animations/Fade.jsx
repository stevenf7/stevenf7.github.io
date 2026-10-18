import React from "react";
import { motion } from "framer-motion";

const Fade = ({
  children,
  bottom = false,
  top = false,
  left = false,
  right = false,
  distance = "24px",
  duration = 0.6,
  delay = 0,
  cascade = false,
  ...props
}) => {
  const normalizeSeconds = (value, fallback) => {
    if (typeof value !== "number" || Number.isNaN(value)) return fallback;
    return value > 10 ? value / 1000 : value;
  };

  const parseDistance = (dist) => {
    if (typeof dist === "string" && dist.includes("px")) {
      return parseInt(dist.replace("px", ""), 10) || 24;
    }
    return parseInt(dist, 10) || 24;
  };

  const distanceValue = parseDistance(distance);
  const durationSeconds = normalizeSeconds(duration, 0.55);
  const delaySeconds = normalizeSeconds(delay, 0);

  let initialY = 0;
  let initialX = 0;

  if (bottom) initialY = distanceValue;
  if (top) initialY = -distanceValue;
  if (left) initialX = -distanceValue;
  if (right) initialX = distanceValue;

  const variants = {
    hidden: {
      opacity: 0,
      y: initialY,
      x: initialX,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: durationSeconds,
        delay: delaySeconds,
        ease: "easeOut",
      },
    },
  };

  if (cascade) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
        style={{
          display: "contents",
          ...props.style,
        }}
        {...props}
      >
        {React.Children.map(children, (child, index) => (
          <motion.div
            key={index}
            variants={variants}
            style={{
              display: "contents",
            }}
          >
            {child}
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      style={{
        display: "contents",
        ...props.style,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Fade;
