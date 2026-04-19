"use client";

import { FaBriefcase } from "react-icons/fa";
import AnimationWrapper from "../ui/AnimationWrapper";

interface ProfessionalItem {
  period: string;
  designation: string;
  companyName: string;
  companyUrl: string;
  location: string;
  variant: "internship" | "job";
}

const professionalItems: ProfessionalItem[] = [
  {
    period: "July - Dec 2025",
    designation: "Full Stack Engineering Intern",
    companyName: "Rishabh Software",
    companyUrl: "https://www.rishabhsoft.com/",
    location: "Vadodara",
    variant: "internship",
  },
  {
    period: "Feb 2026 - Present",
    designation: "Associate Full Stack Developer",
    companyName: "Reyna Solution",
    companyUrl: "https://reynasolutions.com/",
    location: "Vadodara",
    variant: "job",
  },
];

function professionalVariantClasses(variant: ProfessionalItem["variant"]) {
  const isInternship = variant === "internship";
  return {
    dot: isInternship
      ? "bg-gradient-to-br from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600"
      : "bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600",
    badge: isInternship
      ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
      : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  };
}

export default function ProfessionalSummary() {
  return (
    <AnimationWrapper variant="fadeUp" delay={0.6} className="mt-32 pt-8 md:mt-40 md:pt-12 mb-20">
      <h3 className="text-2xl font-bold mb-4 text-center">Experience Summary</h3>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>

      <div className="relative hidden md:block">
        <div
          className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400"
          style={{ top: "24px", height: "calc(100% - 24px)" }}
        ></div>

        <div className="space-y-16 relative pb-10 select-none">
          {professionalItems.map((item, index) => {
            const vc = professionalVariantClasses(item.variant);
            return (
              <AnimationWrapper
                key={index}
                variant={index % 2 === 0 ? "fadeLeft" : "fadeRight"}
                delay={0.3 + index * 0.2}
                className="relative"
              >
                <div className="flex items-center justify-center">
                  <div
                    className={`w-10 h-10 rounded-full z-10 flex items-center justify-center ${vc.dot} shadow-md transition-transform duration-300 hover:scale-110`}
                  >
                    <FaBriefcase className="text-white" size={16} />
                  </div>
                </div>

                <div
                  className={`absolute top-0 ${index % 2 === 0 ? "right-1/2 pr-12" : "left-1/2 pl-12"} mt-0`}
                >
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-b-4 border-blue-500 dark:border-blue-400">
                    <span className={`text-sm font-semibold px-3 py-1 rounded-full ${vc.badge}`}>
                      {item.period}
                    </span>
                    <h4 className="text-xl font-bold mt-3">{item.designation}</h4>
                    <p className="text-gray-600 dark:text-gray-300 mt-2 text-justify">
                      <a
                        href={item.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 font-semibold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                      >
                        {item.companyName}
                      </a>
                      <span className="text-gray-500 dark:text-gray-400"> · {item.location}</span>
                    </p>
                  </div>
                </div>
              </AnimationWrapper>
            );
          })}
        </div>
      </div>

      <div className="md:hidden">
        <div className="relative space-y-8 pb-4">
          <div className="absolute left-5 top-5 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400"></div>

          {professionalItems.map((item, index) => {
            const vc = professionalVariantClasses(item.variant);
            return (
              <AnimationWrapper
                key={index}
                variant="fadeUp"
                delay={0.3 + index * 0.2}
                className="relative flex items-start group pl-5 mb-8"
              >
                <div
                  className={`absolute left-0 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full z-10 shadow-md ${vc.dot} transition-transform duration-300 hover:scale-110`}
                >
                  <FaBriefcase className="text-white" size={16} />
                </div>
                <div className="grow pl-6">
                  <div className="bg-white dark:bg-gray-700 p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500 dark:border-blue-400">
                    <span className={`text-sm font-semibold px-3 py-1 rounded-full ${vc.badge}`}>
                      {item.period}
                    </span>
                    <h4 className="text-xl font-bold mt-3">{item.designation}</h4>
                    <p className="text-gray-600 dark:text-gray-300 mt-2 mb-1 text-justify">
                      <a
                        href={item.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 font-semibold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                      >
                        {item.companyName}
                      </a>
                      <span className="text-gray-500 dark:text-gray-400"> · {item.location}</span>
                    </p>
                  </div>
                </div>
              </AnimationWrapper>
            );
          })}
        </div>
      </div>
    </AnimationWrapper>
  );
}
