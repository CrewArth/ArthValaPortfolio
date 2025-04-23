"use client";

import { motion } from "framer-motion";

interface TextAnimationProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  staggerChildren?: number;
}

export default function TextAnimation({
  text,
  className = "",
  delay = 0,
  duration = 0.05,
  staggerChildren = 0.03,
}: TextAnimationProps) {
  // Container variant
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay * i,
      },
    }),
  };

  // Child variant (for each letter)
  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration,
      },
    },
  };

  return (
    <motion.div
      className={`${className} inline-block overflow-hidden`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          style={{
            display: "inline-block",
            whiteSpace: char === " " ? "pre" : "normal",
          }}
          variants={child}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
} 