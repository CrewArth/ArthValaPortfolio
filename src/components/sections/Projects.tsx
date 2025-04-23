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
    id: "shapeshift-ai",
    title: "ShapeShift.AI",
    description: "ShapeShift.AI is a web-based platform that enables users to transform text descriptions and 2D images into 3D models. ",
    longDescription: "[Vibe Coding] ShapeShift.AI is a web-based platform that enables users to transform text descriptions and 2D images into 3D models. Leveraging advanced AI technology, the system provides an intuitive interface for creating, customizing, and downloading 3D designs in formats like FBX, OBJ, and GLB, catering to creatives and professionals alike. ",
    image: "/images/projects/shapeshiftai.png",
    tags: ["Nextjs", "TailwindCSS", "MongoDB", "NodeJS", "MeshyAI"],
    github: "https://github.com/CrewArth/ShapeShiftAI",
    demo: "shapeshiftai.vercel.app",
  },
  {
    id: "cricket-turf",
    title: "Cricket Turf Booking System",
    description: "Online platform for booking Sports Turf with real-time availability and payment system.",
    longDescription: "[Vibe Coding] This full-stack application allows users to find and book sports turf in their area. It features real-time availability checking, secure payment processing, ticket based scanning and user reviews. The admin dashboard provides turf owners with booking management, analytics, and revenue tracking.",
    image: "/images/projects/cricketturf.png",
    tags: ["Next.js", "MongoDB", "Clerk", "Tailwind CSS"],
    github: "https://github.com/CrewArth/Turf-Booking-Website-Full-Stack",
    demo: "https://turf106.vercel.app",
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
  },
  {
    id: "qr-cafe",
    title: "Cafe Menu System - QR-Based Food Ordering",
    description: "Offline Full Stack Web Software to Order, Manage Food for Cafes.",
    longDescription: "[Vibe Coding] This is Full Stack Application that allows customers to view & order food by scanning Customized QR Code from phone. It comes with Admin and Owner panel where Admin can handle Requests and pass to chef while Owner is responsible for maintaining food items and monitoring.",
    image: "/images/projects/cafe.jpg",
    tags: ["NextJS", "NodeJS", "Tailwind CSS", "Socket.io"],
  },
  {
    id: "object-tracking",
    title: "Realtime Object Tracking",
    description: "This is a Simple Object Tracking Program using OpenCV Python. ",
    longDescription: "This is a Simple Object Tracking Program using OpenCV Python. Using this Program, You can Track any Object you like and when it disappears, It will display Lost.",
    image: "/images/projects/objtrc.jpg",
    tags: ["Python", "OpenCV", "Tensorflow", "Machine Learning"],
    github: "https://github.com/CrewArth/ObjectTracking-in-Python",
  },
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
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        
        <motion.p
          className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
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
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={`${project.id}-${tag}`}
                      className="text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Project Links */}
                <div className="flex items-center space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  )}
                  <button
                    className="ml-auto text-blue-600 dark:text-blue-400 font-medium"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
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
                <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                
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
                
                <div className="text-gray-600 dark:text-gray-300 mb-6">
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