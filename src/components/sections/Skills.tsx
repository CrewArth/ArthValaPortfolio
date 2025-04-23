"use client";

import React from "react";
import { 
  FaPython, FaNode, 
  FaGitAlt, FaFigma, FaBrain, FaUsers, 
  FaLightbulb, FaChartLine,
  FaJava,
  FaGithub
} from "react-icons/fa";
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiFlask,
  SiMongodb, SiFirebase, SiTensorflow,
  SiHtml5,
  SiDjango,
  SiOpencv,
  SiKeras
} from "react-icons/si";
import AnimationWrapper from "../ui/AnimationWrapper";

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: <FaPython size={24} />, color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" },
      { name: "Java", icon: <FaJava size={24} />, color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300" },
      { name: "TypeScript", icon: <SiTypescript size={24} />, color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" },
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <SiHtml5 size={24} />, color: "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300" },
      { name: "Next.js", icon: <SiNextdotjs size={24} />, color: "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300" },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={24} />, color: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNode size={24} />, color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" },
      { name: "Flask", icon: <SiFlask size={24} />, color: "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300" },
      { name: "MongoDB", icon: <SiMongodb size={24} />, color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" },
      { name: "Firebase", icon: <SiFirebase size={24} />, color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300" },
      { name: "Django", icon: <SiDjango size={24} />, color: "bg-green-900 text-green-100 dark:bg-green-900/30 dark:green-900" },
    ]
  },
  {
    title: "AI & ML",
    skills: [
      { name: "TensorFlow", icon: <SiTensorflow size={24} />, color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300" },
      { name: "OpenCV", icon: <SiOpencv size={24} />, color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300" },
      { name: "Keras", icon: <SiKeras size={24} />, color: "bg-red-900 text-red-100 dark:bg-red-100/30 dark:text-red-900" },
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt size={24} />, color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300" },
      { name: "GitHub", icon: <FaGithub size={24} />, color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" },
      { name: "Figma", icon: <FaFigma size={24} />, color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300" },
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Problem Solving", icon: <FaBrain size={24} />, color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300" },
      { name: "Teamwork", icon: <FaUsers size={24} />, color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" },
      { name: "Creativity", icon: <FaLightbulb size={24} />, color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300" },
      { name: "Adaptability", icon: <FaChartLine size={24} />, color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" },
    ]
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <AnimationWrapper variant="fadeInScale" className="mb-12">
          <h2 className="section-title">
            My Skills
          </h2>
          
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            I&apos;ve worked with a variety of technologies and continue to expand my skillset.
            Here&apos;s an overview of my technical and soft skills.
          </p>
        </AnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <AnimationWrapper
              key={category.title}
              variant="fadeUp"
              delay={0.1 + categoryIndex * 0.1}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
            >
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg ${skill.color}`}
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
} 