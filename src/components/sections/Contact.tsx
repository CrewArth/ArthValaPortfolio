"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaPaperPlane } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import AnimationWrapper from "../ui/AnimationWrapper";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      // Send the data to our API endpoint
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong');
      }
      
      // Reset form on success
      setFormData({ name: "", email: "", message: "" });
      setSubmitResult({
        success: true,
        message: "Thank you! Your message has been sent successfully.",
      });
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitResult({
        success: false,
        message: "There was an error sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      href: "https://github.com/CrewArth",
      icon: <FaGithub size={24} />,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/arthvala",
      icon: <FaLinkedin size={24} />,
      label: "LinkedIn",
    },
    {
      href: "mailto:arthvala@gmail.com",
      icon: <FaEnvelope size={24} />,
      label: "Email",
    },
    {
      href: "https://instagram.com/arthvala",
      icon: <FaInstagram size={24} />,
      label: "Instagram",
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <AnimationWrapper variant="fadeInScale" className="mb-12">
          <h2 className="section-title">Get In Touch</h2>
          
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Have a question or want to work together? Feel free to reach out through the form 
            below or connect with me on social media.
          </p>
        </AnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <AnimationWrapper variant="fadeLeft" delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full py-3 flex items-center justify-center gap-2 interactive-element"
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
              
              {submitResult && (
                <div className={`mt-4 p-3 rounded-lg text-center ${
                  submitResult.success 
                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" 
                    : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                }`}>
                  {submitResult.message}
                </div>
              )}
            </form>
          </AnimationWrapper>
          
          {/* Contact Info */}
          <AnimationWrapper variant="fadeRight" delay={0.3} className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors interactive-element"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Details</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-blue-600 dark:text-blue-400" />
                  <a 
                    href="mailto:arthvala@gmail.com" 
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors interactive-element"
                  >
                    arthvala@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <HiLocationMarker className="text-blue-600 dark:text-blue-400" size={20} />
                  <span className="text-gray-600 dark:text-gray-300">
                    Vadodara, Gujarat, India
                  </span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Let's Build Something Together</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Whether you have a project idea, job opportunity, or just want to say hi, 
                I'm always open to discussing new opportunities and creative collaborations.
              </p>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
} 