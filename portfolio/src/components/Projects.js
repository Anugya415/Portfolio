'use client';

import { useState, useEffect, useRef } from 'react';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
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
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with Next.js and Stripe integration. Features include product catalog, shopping cart, secure payments, and admin dashboard.',
      tech: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind CSS'],
      category: 'fullstack',
      github: 'https://github.com/anugya-reddy/ecommerce-platform',
      live: 'https://ecommerce-demo.vercel.app',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      status: 'completed',
      featured: true
    },
    {
      id: 2,
      title: 'AI Chat Application',
      description: 'Real-time chat application powered by OpenAI GPT models. Includes message history, typing indicators, and customizable AI personalities.',
      tech: ['React', 'OpenAI', 'Socket.io', 'Node.js'],
      category: 'frontend',
      github: 'https://github.com/anugya-reddy/ai-chat',
      live: 'https://ai-chat-demo.vercel.app',
      image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&h=400&fit=crop',
      status: 'completed',
      featured: true
    },
    {
      id: 3,
      title: 'Task Management System',
      description: 'Collaborative task management tool with real-time updates, team collaboration features, and project tracking capabilities.',
      tech: ['Next.js', 'PostgreSQL', 'Prisma', 'WebSockets'],
      category: 'fullstack',
      github: 'https://github.com/anugya-reddy/task-manager',
      live: 'https://taskmanager-demo.vercel.app',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      status: 'completed',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Generator',
      description: 'Dynamic portfolio generator for developers with customizable themes, project showcase, and automatic deployment to Vercel.',
      tech: ['React', 'Node.js', 'MongoDB', 'Vercel API'],
      category: 'fullstack',
      github: 'https://github.com/anugya-reddy/portfolio-generator',
      live: 'https://portfolio-gen-demo.vercel.app',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      status: 'completed',
      featured: false
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with location-based forecasts, interactive maps, and weather alerts.',
      tech: ['Vue.js', 'Weather API', 'Chart.js', 'CSS3'],
      category: 'frontend',
      github: 'https://github.com/anugya-reddy/weather-dashboard',
      live: 'https://weather-dash-demo.vercel.app',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      status: 'in-progress',
      featured: false
    },
    {
      id: 6,
      title: 'API Gateway Service',
      description: 'Microservices API gateway with rate limiting, authentication, and request routing capabilities.',
      tech: ['Node.js', 'Express', 'Redis', 'Docker'],
      category: 'backend',
      github: 'https://github.com/anugya-reddy/api-gateway',
      live: null,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
      status: 'completed',
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
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

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white backdrop-blur-sm'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={`transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(project.status)}`}>
                      {project.status === 'in-progress' ? 'In Progress' : 'Completed'}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full text-xs font-bold">
                        ⭐ Featured
                      </span>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors duration-200 flex items-center space-x-2"
                        >
                          <span>🔗</span>
                          <span>Live Demo</span>
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors duration-200 flex items-center space-x-2"
                      >
                        <span>📚</span>
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs font-medium">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors duration-200"
                        >
                          View Live →
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white font-medium text-sm transition-colors duration-200"
                      >
                        GitHub
                      </a>
                    </div>
                    <div className="text-gray-500 text-xs">
                      {project.category}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <a
            href="https://github.com/anugya-reddy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
          >
            <span>View All Projects</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
