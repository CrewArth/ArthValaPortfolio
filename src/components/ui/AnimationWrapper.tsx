"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import * as animations from "@/lib/animation";

type AnimationVariant = 
  | "fadeUp" 
  | "fadeDown" 
  | "fadeLeft" 
  | "fadeRight" 
  | "fadeInScale"
  | "slideInLeft"
  | "slideInRight"
  | "slideInUp"
  | "slideInDown"
  | "zoomIn";

interface AnimationWrapperProps {
  children: ReactNode;
  variant: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

export default function AnimationWrapper({
  children,
  variant,
  delay = 0,
  duration = 0.5,
  className = "",
  once = true,
  amount = 0.3,
}: AnimationWrapperProps) {
  
  let animationVariant;
  
  switch(variant) {
    case "fadeUp":
      animationVariant = animations.fadeIn("up", delay);
      break;
    case "fadeDown":
      animationVariant = animations.fadeIn("down", delay);
      break;
    case "fadeLeft":
      animationVariant = animations.fadeIn("left", delay);
      break;
    case "fadeRight":
      animationVariant = animations.fadeIn("right", delay);
      break;
    case "fadeInScale":
      animationVariant = animations.fadeInScale(delay);
      break;
    case "slideInLeft":
      animationVariant = animations.slideIn("left", "spring", delay, duration);
      break;
    case "slideInRight":
      animationVariant = animations.slideIn("right", "spring", delay, duration);
      break;
    case "slideInUp":
      animationVariant = animations.slideIn("up", "spring", delay, duration);
      break;
    case "slideInDown":
      animationVariant = animations.slideIn("down", "spring", delay, duration);
      break;
    case "zoomIn":
      animationVariant = animations.zoomIn(delay, duration);
      break;
    default:
      animationVariant = animations.fadeIn("up", delay);
  }
  
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={animationVariant}
      className={className}
    >
      {children}
    </motion.div>
  );
} 