export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      longDescription: 'Built a comprehensive e-commerce platform from scratch with modern technologies. Implemented secure user authentication, integrated Stripe for payments, and created an intuitive admin dashboard for inventory management.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express'],
      github: 'https://github.com/anugya-reddy/ecommerce-platform',
      live: 'https://ecommerce-demo.vercel.app',
      image: '/project1.jpg',
      featured: true,
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      longDescription: 'Developed a real-time task management application with drag-and-drop functionality, team collaboration features, and instant updates using WebSocket technology.',
      tech: ['Next.js', 'PostgreSQL', 'Socket.io', 'Tailwind CSS', 'Prisma'],
      github: 'https://github.com/anugya-reddy/task-manager',
      live: 'https://taskmanager-demo.vercel.app',
      image: '/project2.jpg',
      featured: true,
      category: 'Full Stack'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather and forecasts for multiple locations with beautiful data visualizations.',
      longDescription: 'Created an interactive weather dashboard with stunning data visualizations, location-based weather tracking, and responsive design for all devices.',
      tech: ['React', 'Chart.js', 'OpenWeather API', 'CSS', 'Axios'],
      github: 'https://github.com/anugya-reddy/weather-dashboard',
      live: 'https://weather-app-demo.vercel.app',
      image: '/project3.jpg',
      featured: false,
      category: 'Frontend'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and interactive elements.',
      longDescription: 'Designed and developed a personal portfolio website showcasing modern web development skills with smooth animations, dark mode support, and responsive design.',
      tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'React'],
      github: 'https://github.com/anugya-reddy/portfolio',
      live: 'https://anugya-reddy.vercel.app',
      image: '/project4.jpg',
      featured: false,
      category: 'Frontend'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on recently. Each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.filter(project => project.featured).map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-700 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl opacity-30 group-hover:opacity-20 transition-opacity">
                    {project.id === 1 ? '🛒' : project.id === 2 ? '📋' : '📊'}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium">
                    Featured
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-xs font-medium">
                    {project.category}
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white px-4 py-3 rounded-lg font-medium transition-colors text-center flex items-center justify-center gap-2"
                  >
                    <span>🔗</span> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-3 rounded-lg font-medium transition-colors text-center flex items-center justify-center gap-2"
                  >
                    <span>🌐</span> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.filter(project => !project.featured).map((project, index) => (
            <div
              key={project.id}
              className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded text-xs font-medium">
                  {project.category}
                </span>
              </div>

              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 3).map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-sm">
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded text-sm">
                    +{project.tech.length - 3} more
                  </span>
                )}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm flex items-center gap-1"
                >
                  <span>🔗</span> View Code →
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 font-medium text-sm flex items-center gap-1"
                >
                  <span>🌐</span> Live Demo →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Interested in seeing more of my work?
          </p>
          <a
            href="https://github.com/anugya-reddy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <span>🐙</span> View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
