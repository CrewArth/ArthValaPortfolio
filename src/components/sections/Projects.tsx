"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: "guest-house-booking",
    title: "Rishabh Guest House Booking",
    description: "A guest house booking system where employees submit stay requests using JWT-secured access, and admins approve or reject them through a structured workflow.",
    longDescription: "A comprehensive web application for managing guest house bookings, rooms, and beds with separate interfaces for users and administrators. Built with MERN stack (MongoDB, Express.js, React, Node.js) with Redis caching for optimal performance.",
    image: "/images/projects/guest-house.png",
    tags: ["Reactjs", "Nodejs", "MongoDB", "Expressjs", "Redis"],
    github: "https://github.com/CrewArth/RishabhGuestHouseBooking",
  },
  {
    id: "shapeshift-ai",
    title: "ShapeShift.AI",
    description: "ShapeShift.AI is a web-based platform that enables users to transform text descriptions and 2D images into 3D models. ",
    longDescription: "[Vibe Coding] ShapeShift.AI is a web-based platform that enables users to transform text descriptions and 2D images into 3D models. Leveraging advanced AI technology, the system provides an intuitive interface for creating, customizing, and downloading 3D designs in formats like FBX, OBJ, and GLB, catering to creatives and professionals alike. ",
    image: "/images/projects/shapeshiftai.png",
    tags: ["Nextjs", "TailwindCSS", "MongoDB", "NodeJS", "MeshyAI"],
    demo: "https://shapeshiftai.vercel.app",
  },
  {
    id: "classivision",
    title: "ClassiVision - Ease Model Train",
    description: "Web-based tool for creating custom machine learning models without coding.",
    longDescription: "[Vibe Coding] A simplified clone of Google's Teachable Machine that allows users to create, train, and export custom machine learning models directly in the browser without writing any code. The application supports image classification and Image Segmentation.",
    image: "/images/projects/classivision.png",
    tags: ["Python", "Streamlit", "Tensorflow", "Tailwind CSS"],
    github: "https://github.com/CrewArth/ClassiVision-TrainExportPredict",
    demo: "https://classivision.streamlit.app/"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-800/30">
      <div className="container">
        <motion.h2 
          className="section-title outfit-outfit"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        
        <motion.p
          className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 outfit-outfit"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Here are some of my recent projects showcasing my technical skills and problem-solving approach.
          Click on any project to learn more about it.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <article className="group relative w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200/70 bg-white/90 shadow-xl backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700/80 dark:bg-slate-900/80">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-75" />
                </div>

                <div className="flex flex-col gap-4 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-slate-900 outfit-outfit dark:text-slate-100">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-slate-600 outfit-outfit dark:text-slate-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={`${project.id}-${tag}`}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-3 text-slate-500 dark:text-slate-300">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors hover:text-indigo-500 dark:hover:text-indigo-300"
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`GitHub repository for ${project.title}`}
                        >
                          <FaGithub size={18} />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors hover:text-indigo-500 dark:hover:text-indigo-300"
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`Live demo for ${project.title}`}
                        >
                          <FaExternalLinkAlt size={16} />
                        </a>
                      )}
                    </div>

                    <button
                      onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                      className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-indigo-700 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900"
                    >
                      Learn more
                    </button>
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
        
        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <div className="h-64 w-full relative">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <button
                  className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close modal"
                >
                  <FaTimes size={16} />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 outfit-outfit">{selectedProject.title}</h3>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map((tag) => (
                    <span 
                      key={`modal-${selectedProject.id}-${tag}`}
                      className="text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="text-gray-600 dark:text-gray-300 mb-6 outfit-outfit">
                  <p className="mb-4">{selectedProject.longDescription || selectedProject.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 btn btn-outline"
                    >
                      <FaGithub /> View on GitHub
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 btn btn-primary"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
} 