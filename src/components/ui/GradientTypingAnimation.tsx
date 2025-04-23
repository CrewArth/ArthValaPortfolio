"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface GradientTypingAnimationProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  showCursor?: boolean;
  cursorBlinkSpeed?: number;
  gradientColors?: string[];
  delay?: number;
}

export default function GradientTypingAnimation({
  text,
  className = "",
  typingSpeed = 70, // ms per character
  showCursor = true,
  cursorBlinkSpeed = 500, // ms for cursor blink
  gradientColors = ["#2563eb", "#4f46e5", "#7c3aed", "#6366f1"], // Default blue to purple gradient
  delay = 600, // ms before starting animation
}: GradientTypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  // Gradient animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => 
        prevIndex === gradientColors.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change gradient color every 2 seconds
    
    return () => clearInterval(interval);
  }, [gradientColors.length]);

  // Linear gradient string
  const gradientStyle = {
    background: `linear-gradient(to right, ${gradientColors.join(", ")})`,
    backgroundSize: "200% 200%",
    backgroundPosition: `${currentColorIndex * (100 / (gradientColors.length - 1))}% center`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
    transition: "background-position 1s ease",
  };

  // Typing animation
  useEffect(() => {
    if (text.length === 0) return;
    
    // Initial delay before starting typing
    const delayTimeout = setTimeout(() => {
      let currentIndex = 0;
      
      const typingInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setAnimationComplete(true);
        }
      }, typingSpeed);
      
      return () => clearInterval(typingInterval);
    }, delay);
    
    return () => clearTimeout(delayTimeout);
  }, [text, typingSpeed, delay]);

  // Cursor blinking animation
  useEffect(() => {
    if (!showCursor) return;
    
    const cursorInterval = setInterval(() => {
      if (animationComplete) {
        setCursorVisible((prev) => !prev);
      } else {
        setCursorVisible(true);
      }
    }, cursorBlinkSpeed);
    
    return () => clearInterval(cursorInterval);
  }, [showCursor, cursorBlinkSpeed, animationComplete]);

  return (
    <span className={`inline-block ${className}`}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={gradientStyle}
      >
        {displayedText}
      </motion.span>
      {showCursor && (
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: cursorVisible ? 1 : 0 }}
          transition={{ duration: 0.1 }}
          className="inline-block ml-0.5 h-full w-0.5 bg-blue-600 dark:bg-blue-400"
        >
          |
        </motion.span>
      )}
    </span>
  );
} 