"use client";

import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import AnimationWrapper from "../ui/AnimationWrapper";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  type: "education" | "internship";
}

const timelineItems: TimelineItem[] = [
  {
    year: "2021 - 2025",
    title: "Integrated MCA",
    description: "Parul University, Vadodara - Pursuing Integrated Master of Computer Applications with Specialization in Artificial Intelligence",
    type: "education",
  },
  {
    year: "2021",
    title: "High Secondary Education",
    description: "Did my HSC from Tree House High School, Vadodara and improved to 73%.",
    type: "education",
  },
  {
    year: "2019",
    title: "Secondary School Education",
    description: "Did my HSC from Tree House High School, Vadodara and achived 68%.",
    type: "education",
  },
];

export default function About() {
  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-800/30">
      <div className="container">
        <AnimationWrapper variant="fadeInScale" className="mb-12">
          <h2 className="section-title">About Me</h2>
        </AnimationWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <AnimationWrapper variant="fadeLeft" delay={0.2}>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-x  xl overflow-hidden">
                <Image
                  src="/images/projects/profilephoto.png"
                  alt="Arth Vala"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </AnimationWrapper>

          {/* About Text */}
          <AnimationWrapper variant="fadeRight" delay={0.4}>
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Hello! I&apos;m Arth Vala, an Integrated MCA student with specializing in Artificial Intelligence at Parul University, Vadodara. 
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I&apos;m passionate about developing AI solutions and full-stack applications powered by AI that address real-world challenges.
                My interests extend beyond coding to include playing sports.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I&apos;m constantly learning and exploring new technologies to expand my skill set and stay at the forefront of technological advancements.
              </p>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary px-6 py-3 rounded-lg flex items-center gap-2 w-fit interactive-element"
              >
                <FaDownload /> Download Resume
              </a>
            </div>
          </AnimationWrapper>
        </div>

        {/* Timeline Section */}
        <AnimationWrapper variant="fadeUp" delay={0.6} className="mt-20 mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Education & Experience</h3>
          
          {/* Desktop Timeline (hidden on mobile) */}
          <div className="relative hidden md:block">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-600/20 dark:bg-blue-400/20"></div>
            
            {/* Timeline items */}
            <div className="space-y-16">
              {timelineItems.map((item, index) => (
                <AnimationWrapper 
                  key={index}
                  variant={index % 2 === 0 ? "fadeLeft" : "fadeRight"}
                  delay={0.3 + index * 0.2}
                  className="relative"
                >
                  <div className="flex items-center justify-center">
                    <div className={`w-8 h-8 rounded-full z-10 flex items-center justify-center ${
                      item.type === "education" ? "bg-blue-600 dark:bg-blue-500" : "bg-purple-600 dark:bg-purple-500"
                    }`}>
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className={`absolute top-0 ${
                    index % 2 === 0 ? "right-1/2 pr-12" : "left-1/2 pl-12"
                  } mt-1`}>
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
                      <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                        item.type === "education" ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" : 
                        "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                      }`}>
                        {item.year}
                      </span>
                      <h4 className="text-xl font-bold mt-3">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimationWrapper>
              ))}
            </div>
          </div>

          {/* Mobile Timeline (visible only on mobile) */}
          <div className="md:hidden">
            <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-blue-600/20 dark:before:bg-blue-400/20">
              {timelineItems.map((item, index) => (
                <AnimationWrapper
                  key={index}
                  variant="fadeUp"
                  delay={0.3 + index * 0.2}
                  className="relative flex items-start group mb-8"
                >
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full z-10 ${
                    item.type === "education" ? "bg-blue-600 dark:bg-blue-500" : "bg-purple-600 dark:bg-purple-500"
                  }`}>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="grow pl-5">
                    <div className="bg-white dark:bg-gray-700 p-5 rounded-xl shadow-md">
                      <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                        item.type === "education" ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" : 
                        "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                      }`}>
                        {item.year}
                      </span>
                      <h4 className="text-xl font-bold mt-3">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 mt-2 mb-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimationWrapper>
              ))}
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
} 