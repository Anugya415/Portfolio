'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Borneo E-Commerce',
      description: 'A comprehensive full-stack e-commerce platform featuring real-time inventory control, a custom CMS for content management, secure checkout, and dynamic SEO metadata.',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
      category: 'fullstack',
      github: 'https://github.com/Anugya415/Borneo-web.git',
      live: null,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      status: 'completed',
      featured: true
    },
    {
      id: 2,
      title: 'HackForge 2.0 App',
      description: 'A mobile application built using React Native and Expo. It utilizes Tamagui and NativeWind for a sleek, responsive cross-platform user interface.',
      tech: ['React Native', 'Expo', 'Tamagui', 'NativeWind'],
      category: 'frontend',
      github: 'https://github.com/anugya-reddy/HackForge2.0-app',
      live: null,
      image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&h=400&fit=crop',
      status: 'completed',
      featured: true
    },
    {
      id: 3,
      title: 'SIH 2025 ERP System',
      description: 'An Enterprise Resource Planning (ERP) web application developed for the Smart India Hackathon 2025, facilitating comprehensive institutional management.',
      tech: ['Next.js', 'React Hook Form', 'Headless UI', 'Tailwind CSS'],
      category: 'fullstack',
      github: 'https://github.com/Anugya415/SIH-2025.git',
      live: null,
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      status: 'in-progress',
      featured: true
    },
    {
      id: 4,
      title: 'Groei Web',
      description: 'A modern, interactive frontend web application featuring rich particle animations, accessible Radix UI components, and fluid Framer Motion transitions.',
      tech: ['Next.js', 'Radix UI', 'Framer Motion', 'tsParticles'],
      category: 'frontend',
      github: 'https://github.com/Anugya415/Groei-web.git',
      live: null,
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      status: 'completed',
      featured: false
    },
    {
      id: 5,
      title: 'Amour et Diner',
      description: 'A vibrant, beautifully designed web application tailored for a restaurant or dining service layout with responsive styles and smooth navigation.',
      tech: ['Next.js', 'React Icons', 'Tailwind CSS'],
      category: 'frontend',
      github: 'https://github.com/Anugya415/Amour-et-Diner.git',
      live: null,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      status: 'completed',
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All', count: projects.length },
    { id: 'featured', label: 'Featured', count: projects.filter(p => p.featured).length },
    { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'backend', label: 'Backend', count: projects.filter(p => p.category === 'backend').length }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 200, damping: 20 }
    }
  };

  return (
    <section
      id="projects"
      className="scroll-mt-16 sm:scroll-mt-24"
    >

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-sm font-mono text-zinc-500 dark:text-zinc-600 tracking-widest uppercase">03</span>
            <div className="h-px w-12 bg-zinc-300 dark:bg-zinc-700"></div>
            <span className="text-sm font-mono text-zinc-700 dark:text-zinc-400 tracking-widest uppercase">Projects</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-zinc-900 dark:text-zinc-50 mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-black/60 dark:text-white/60 max-w-2xl mx-auto">
            A collection of my recent work and creative solutions
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 border-b-2 ${activeFilter === filter.id
                  ? 'text-zinc-900 dark:text-zinc-50 border-zinc-900 dark:border-zinc-50'
                  : 'text-zinc-500 dark:text-zinc-600 border-transparent hover:text-zinc-900 dark:hover:text-zinc-300'
                }`}
            >
              {filter.label} <span className={activeFilter === filter.id ? 'opacity-80' : 'opacity-60'}>({filter.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[500px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                variants={projectVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group flex flex-col gap-6 w-full"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 dark:group-hover:bg-black/40 transition-colors duration-300"></div>

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${project.status === 'completed'
                        ? 'bg-black/90 dark:bg-white/90 text-white dark:text-black'
                        : 'bg-white/90 dark:bg-black/90 text-black dark:text-white'
                      }`}>
                      {project.status === 'in-progress' ? 'In Progress' : 'Completed'}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 dark:bg-black/90 backdrop-blur-md text-black dark:text-white rounded-full text-xs font-bold border border-black/10 dark:border-white/10">
                        ⭐ Featured
                      </span>
                    </div>
                  )}

                  {/* Hover Overlay with Links */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="flex gap-3">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white dark:bg-black rounded-full hover:scale-110 transition-transform shadow-lg"
                          aria-label="Live Demo"
                        >
                          <FaExternalLinkAlt className="text-black dark:text-white" />
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white dark:bg-black rounded-full hover:scale-110 transition-transform shadow-lg"
                        aria-label="GitHub"
                      >
                        <FaGithub className="text-black dark:text-white" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="relative z-20 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-zinc-600 dark:text-zinc-400 mb-5 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center justify-between pt-4 mt-auto border-t border-zinc-200 dark:border-zinc-800">
                    <span className="text-xs text-zinc-500 dark:text-zinc-500 font-bold uppercase tracking-widest">
                      {project.category}
                    </span>
                    <div className="flex gap-4">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-900 dark:text-zinc-50 hover:text-teal-600 dark:hover:text-teal-400 text-sm font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
                        >
                          Live <FaExternalLinkAlt className="text-xs" />
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-900 dark:text-zinc-50 hover:text-teal-600 dark:hover:text-teal-400 text-sm font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
                      >
                        Code <FaGithub className="text-xs" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-20"
        >
          <a
            href="https://github.com/anugya-reddy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 pb-1 border-b-2 border-zinc-900 dark:border-zinc-50 text-zinc-900 dark:text-zinc-50 font-bold text-sm uppercase tracking-widest transition-all hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-600 dark:hover:border-teal-400"
          >
            View All Projects
            <FaExternalLinkAlt className="text-xs" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
