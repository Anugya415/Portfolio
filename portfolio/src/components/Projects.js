'use client';

import { useState, useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, #000 1px, transparent 1px),
            linear-gradient(#000 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-sm font-mono text-black/40 tracking-widest uppercase">03</span>
            <div className="h-px w-12 bg-black/20"></div>
            <span className="text-sm font-mono text-black/60 tracking-widest uppercase">Projects</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-6 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-xl text-black/60 max-w-2xl mx-auto">
            A collection of my recent work and creative solutions
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter.id
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-black/5 text-black/70 hover:bg-black/10 hover:text-black border border-black/10'
                }`}
            >
              {filter.label} <span className="opacity-60">({filter.count})</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white border-2 border-black/10 rounded-3xl overflow-hidden card-hover"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-black/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.status === 'completed'
                      ? 'bg-black text-white'
                      : 'bg-white/90 text-black'
                    }`}>
                    {project.status === 'in-progress' ? 'In Progress' : 'Completed'}
                  </span>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white text-black rounded-full text-xs font-bold border-2 border-black">
                      ⭐ Featured
                    </span>
                  </div>
                )}

                {/* Hover Overlay with Links */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                  <div className="flex gap-3">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full hover:scale-110 transition-transform"
                        aria-label="Live Demo"
                      >
                        <FaExternalLinkAlt className="text-black" />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:scale-110 transition-transform"
                      aria-label="GitHub"
                    >
                      <FaGithub className="text-black" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-black transition-colors">
                  {project.title}
                </h3>

                <p className="text-black/70 mb-5 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-black/5 border border-black/10 text-black rounded-lg text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center justify-between pt-4 border-t border-black/10">
                  <span className="text-xs text-black/50 font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                  <div className="flex gap-4">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black/60 hover:text-black text-sm font-medium transition-colors flex items-center gap-1"
                      >
                        Live <FaExternalLinkAlt className="text-xs" />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black/60 hover:text-black text-sm font-medium transition-colors flex items-center gap-1"
                    >
                      Code <FaGithub className="text-xs" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <a
            href="https://github.com/anugya-reddy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/20"
          >
            View All Projects
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
}
