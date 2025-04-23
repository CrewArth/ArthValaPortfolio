"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useEffect(() => {
    const handleLinkHoverEvents = () => {
      // Elements that should change the cursor style
      const interactiveElements = document.querySelectorAll(
        'a, button, .interactive-element'
      );

      const mouseEnter = () => setCursorVariant("hover");
      const mouseLeave = () => setCursorVariant("default");

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", mouseEnter);
        el.addEventListener("mouseleave", mouseLeave);
      });

      return () => {
        interactiveElements.forEach((el) => {
          el.removeEventListener("mouseenter", mouseEnter);
          el.removeEventListener("mouseleave", mouseLeave);
        });
      };
    };

    // Set up the event listeners
    const cleanup = handleLinkHoverEvents();
    return cleanup;
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(30, 64, 175, 0.2)",
      border: "2px solid rgba(30, 64, 175, 0.5)",
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: "rgba(30, 64, 175, 0.1)",
      border: "2px solid rgba(30, 64, 175, 0.8)",
    },
  };

  // Don't show custom cursor on touch devices
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  if (isTouchDevice) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50 mix-blend-difference"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    />
  );
} 