"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import AnimationWrapper from "../ui/AnimationWrapper";
import GradientTypingAnimation from "../ui/GradientTypingAnimation";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex items-center relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-72 h-72 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <AnimationWrapper
            variant="fadeUp"
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 select-none">
              <GradientTypingAnimation 
                text="Hi, I'm Arth Vala" 
                className="font-bold select-none"
                typingSpeed={90}
                gradientColors={["#3b82f6", "#4f46e5", "#7c3aed", "#6366f1", "#8b5cf6"]}
                delay={1000}
              />
            </h1>
            <h2 className="text-3xl md:text-4xl font-medium mb-6 select-none">
            An AI enthusiast with a passion for Computer Vision and Python Development.
            </h2>
          <br />
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="#projects"
                className="btn btn-primary px-8 py-3 rounded-xl interactive-element"
              >
                View Projects
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline px-8 py-3 rounded-xl flex items-center gap-2 interactive-element"
              >
                <FaFileAlt /> Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6">
              <a
                href="https://github.com/arthvala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors interactive-element"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/arthvala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors interactive-element"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </AnimationWrapper>

          <AnimationWrapper
            variant="fadeInScale"
            delay={0.4}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 to-purple-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <div className="absolute inset-0 scale-100 group-hover:scale-110 transition-transform duration-500 ease-in-out">
                <Image
                  src="/images/projects/profilephoto.png"
                  alt="Arth Vala"
                  fill
                  sizes="(max-width: 768px) 256px, 320px"
                  className="object-cover"
                  priority
                  quality={85}
                />
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
}