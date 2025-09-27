export default function TechStack() {
  const technologies = [
    { name: 'JavaScript', color: 'bg-yellow-400', icon: '⚡', category: 'Language' },
    { name: 'React', color: 'bg-blue-500', icon: '⚛️', category: 'Frontend' },
    { name: 'Next.js', color: 'bg-black', icon: '▲', category: 'Framework' },
    { name: 'Node.js', color: 'bg-green-600', icon: '🟢', category: 'Backend' },
    { name: 'Python', color: 'bg-blue-600', icon: '🐍', category: 'Language' },
    { name: 'TypeScript', color: 'bg-blue-700', icon: '🔷', category: 'Language' },
    { name: 'HTML/CSS', color: 'bg-orange-500', icon: '🎨', category: 'Frontend' },
    { name: 'Tailwind CSS', color: 'bg-teal-500', icon: '💨', category: 'Styling' },
    { name: 'Git', color: 'bg-red-500', icon: '📚', category: 'Tools' },
    { name: 'MongoDB', color: 'bg-green-700', icon: '🍃', category: 'Database' },
    { name: 'PostgreSQL', color: 'bg-blue-700', icon: '🐘', category: 'Database' },
    { name: 'Docker', color: 'bg-blue-600', icon: '🐳', category: 'DevOps' },
    { name: 'AWS', color: 'bg-orange-400', icon: '☁️', category: 'Cloud' },
    { name: 'GraphQL', color: 'bg-pink-500', icon: '🔺', category: 'API' },
    { name: 'Firebase', color: 'bg-yellow-500', icon: '🔥', category: 'Backend' }
  ];

  const categories = ['All', 'Language', 'Frontend', 'Backend', 'Database', 'DevOps', 'Tools'];

  return (
    <section id="techstack" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Tech Stack & Tools
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border border-slate-200 dark:border-slate-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className={`w-16 h-16 ${tech.color} rounded-2xl mb-4 flex items-center justify-center mx-auto text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {tech.icon}
                </div>

                {/* Tech Name */}
                <h3 className="text-slate-900 dark:text-white font-semibold mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {tech.name}
                </h3>

                {/* Category */}
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {tech.category}
                </p>

                {/* Skill level indicator (placeholder) */}
                <div className="mt-3 flex justify-center space-x-1">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <div
                      key={level}
                      className={`w-2 h-2 rounded-full ${
                        level <= Math.floor(Math.random() * 5) + 1
                          ? 'bg-blue-500'
                          : 'bg-slate-200 dark:bg-slate-600'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Floating particles effect */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
              <div className="absolute bottom-2 left-2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform">
              15+
            </div>
            <div className="text-slate-600 dark:text-slate-300">Technologies</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2 group-hover:scale-110 transition-transform">
              2+
            </div>
            <div className="text-slate-600 dark:text-slate-300">Years Experience</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2 group-hover:scale-110 transition-transform">
              10+
            </div>
            <div className="text-slate-600 dark:text-slate-300">Projects Completed</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2 group-hover:scale-110 transition-transform">
              ∞
            </div>
            <div className="text-slate-600 dark:text-slate-300">Learning Journey</div>
          </div>
        </div>
      </div>
    </section>
  );
}
