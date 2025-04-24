"use client";

import Image from "next/image";
import { FaDownload, FaQuoteLeft, FaQuoteRight, FaUserGraduate } from "react-icons/fa";
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
    description: "Did my SSC from Tree House High School, Vadodara and achived 68%.",
    type: "education",
  },
];

export default function About() {
  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-800/30">
      <div className="container">
        <AnimationWrapper variant="fadeInScale" className="mb-12">
          <h2 className="section-title">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </AnimationWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <AnimationWrapper variant="fadeLeft" delay={0.2}>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden group shadow-lg">
                {/* Decorative pattern */}
                <div className="absolute -top-12 -left-12 w-24 h-24 border-t-4 border-l-4 border-blue-400 dark:border-blue-500 rounded-tl-lg z-20"></div>
                <div className="absolute -bottom-12 -right-12 w-24 h-24 border-b-4 border-r-4 border-purple-400 dark:border-purple-500 rounded-br-lg z-20"></div>
                
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                
                {/* Subtle border reveal on hover */}
                <div className="absolute inset-0 border-0 group-hover:border-4 border-white/30 dark:border-gray-300/20 rounded-xl transition-all duration-300 z-10"></div>
                
                {/* Image with zoom effect */}
                <div className="absolute inset-0 scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out">
                  <Image
                    src="/images/projects/about.png"
                    alt="Arth Vala"
                    fill
                    sizes="(max-width: 768px) 256px, 320px"
                    className="object-cover"
                    quality={85}
                  />
                </div>
              </div>
            </div>
          </AnimationWrapper>

          {/* About Text */}
          <AnimationWrapper variant="fadeRight" delay={0.4}>
            <div className="relative px-3 md:px-6 py-4 text-justify border-l-4 border-blue-500 dark:border-blue-400 rounded bg-white/50 dark:bg-gray-800/50 shadow-sm hover:shadow-md transition-shadow duration-300">
              <FaQuoteLeft className="absolute top-2 left-2 text-blue-300 dark:text-blue-600 opacity-20 text-4xl" />
              <FaQuoteRight className="absolute bottom-2 right-2 text-purple-300 dark:text-purple-600 opacity-20 text-4xl" />
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Hello! I&apos;m <span className="text-blue-600 dark:text-blue-400 font-semibold">Arth Vala</span>, an Integrated MCA student with specializing in Artificial Intelligence at Parul University, Vadodara. 
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              <span className="text-yellow-500 dark:text-yello-400 font-semibold">🥇Gold Medalist @ Parul University | IMCA 2021 - 2025</span> 
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I&apos;m passionate about developing <span className="text-purple-600 dark:text-purple-400 font-semibold">AI solutions</span> and <span className="text-blue-600 dark:text-blue-400 font-semibold">full-stack applications</span> powered by AI that address real-world challenges.
                My interests extend beyond coding to include playing sports.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                I&apos;m constantly learning and exploring new technologies to expand my skill set and stay at the forefront of technological advancements.
              </p>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary px-6 py-3 rounded-lg flex items-center gap-2 w-fit interactive-element hover:scale-105 transform transition-transform duration-300"
              >
                <FaDownload /> Download Resume
              </a>
            </div>
          </AnimationWrapper>
        </div>

        {/* Timeline Section */}
        <AnimationWrapper variant="fadeUp" delay={0.6} className="mt-20 mb-20">
          <h3 className="text-2xl font-bold mb-4 text-center">Education & Experience</h3>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
          
          {/* Desktop Timeline (hidden on mobile) */}
          <div className="relative hidden md:block">
            {/* Timeline line - adjusted to run from the top of the first item through the last item */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400" 
                 style={{ top: "24px", height: "calc(100% - 24px)" }}></div>
            
            {/* Timeline items */}
            <div className="space-y-16 relative pb-10">
              {timelineItems.map((item, index) => (
                <AnimationWrapper 
                  key={index}
                  variant={index % 2 === 0 ? "fadeLeft" : "fadeRight"}
                  delay={0.3 + index * 0.2}
                  className="relative"
                >
                  <div className="flex items-center justify-center">
                    <div className={`w-10 h-10 rounded-full z-10 flex items-center justify-center ${
                      item.type === "education" ? "bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600" : "bg-gradient-to-br from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600"
                    } shadow-md transition-transform duration-300 hover:scale-110`}>
                      <FaUserGraduate className="text-white" size={16} />
                    </div>
                  </div>
                  
                  <div className={`absolute top-0 ${
                    index % 2 === 0 ? "right-1/2 pr-12" : "left-1/2 pl-12"
                  } mt-0`}>
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-b-4 border-blue-500 dark:border-blue-400">
                      <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                        item.type === "education" ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" : 
                        "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                      }`}>
                        {item.year}
                      </span>
                      <h4 className="text-xl font-bold mt-3">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 mt-2 text-justify">
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
            <div className="relative space-y-8 pb-4">
              {/* Mobile timeline line - Adjusted to properly extend through all items */}
              <div className="absolute left-5 top-5 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400"></div>
              
              {timelineItems.map((item, index) => (
                <AnimationWrapper
                  key={index}
                  variant="fadeUp"
                  delay={0.3 + index * 0.2}
                  className="relative flex items-start group pl-5 mb-8"
                >
                  <div className={`absolute left-0 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full z-10 shadow-md ${
                    item.type === "education" ? "bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600" : "bg-gradient-to-br from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600"
                  } transition-transform duration-300 hover:scale-110`}>
                    <FaUserGraduate className="text-white" size={16} />
                  </div>
                  <div className="grow pl-6">
                    <div className="bg-white dark:bg-gray-700 p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500 dark:border-blue-400">
                      <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                        item.type === "education" ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" : 
                        "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                      }`}>
                        {item.year}
                      </span>
                      <h4 className="text-xl font-bold mt-3">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 mt-2 mb-1 text-justify">
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