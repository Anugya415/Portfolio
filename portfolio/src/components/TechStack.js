'use client';

import { useState, useEffect, useRef } from 'react';

export default function TechStack() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('frontend');
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

  const techStack = {
    frontend: [
      { name: 'React', icon: '⚛️', level: 95, color: 'from-blue-400 to-blue-600' },
      { name: 'Next.js', icon: '▲', level: 90, color: 'from-gray-400 to-gray-600' },
      { name: 'TypeScript', icon: '📘', level: 85, color: 'from-blue-500 to-blue-700' },
      { name: 'Tailwind CSS', icon: '🎨', level: 92, color: 'from-cyan-400 to-cyan-600' },
      { name: 'JavaScript', icon: '🟨', level: 95, color: 'from-yellow-400 to-yellow-600' },
      { name: 'HTML/CSS', icon: '🌐', level: 98, color: 'from-orange-400 to-orange-600' }
    ],
    backend: [
      { name: 'Node.js', icon: '🟢', level: 88, color: 'from-green-400 to-green-600' },
      { name: 'Python', icon: '🐍', level: 82, color: 'from-blue-400 to-yellow-500' },
      { name: 'PostgreSQL', icon: '🐘', level: 80, color: 'from-blue-500 to-blue-700' },
      { name: 'MongoDB', icon: '🍃', level: 85, color: 'from-green-500 to-green-700' },
      { name: 'GraphQL', icon: '📊', level: 75, color: 'from-pink-400 to-pink-600' },
      { name: 'REST APIs', icon: '🔗', level: 90, color: 'from-purple-400 to-purple-600' }
    ],
    tools: [
      { name: 'Git', icon: '📚', level: 92, color: 'from-orange-400 to-red-500' },
      { name: 'Docker', icon: '🐳', level: 78, color: 'from-blue-400 to-blue-600' },
      { name: 'AWS', icon: '☁️', level: 75, color: 'from-yellow-400 to-orange-500' },
      { name: 'Figma', icon: '🎨', level: 85, color: 'from-purple-400 to-pink-500' },
      { name: 'VS Code', icon: '💻', level: 95, color: 'from-blue-500 to-blue-700' },
      { name: 'Vercel', icon: '▲', level: 88, color: 'from-gray-400 to-gray-600' }
    ]
  };

  const categories = [
    { id: 'frontend', label: 'Frontend', icon: '🎨' },
    { id: 'backend', label: 'Backend', icon: '⚙️' },
    { id: 'tools', label: 'Tools', icon: '🛠️' }
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black to-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Skills & <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex space-x-1 bg-white/5 rounded-2xl p-1 backdrop-blur-sm">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className={`transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack[activeCategory].map((tech, index) => (
              <div
                key={tech.name}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-200">
                      {tech.icon}
                    </span>
                    <h3 className="text-white font-semibold text-lg">
                      {tech.name}
                    </h3>
                  </div>
                  <span className="text-gray-400 text-sm font-medium">
                    {tech.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: isVisible ? `${tech.level}%` : '0%',
                      transitionDelay: `${index * 100 + 500}ms`
                    }}
                  />
                </div>

                {/* Skill Level Indicator */}
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-gray-400 mb-6">
            Always learning and exploring new technologies to stay at the forefront of development
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Learning', 'Experimenting', 'Building', 'Growing'].map((action, index) => (
              <span
                key={action}
                className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium animate-pulse"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {action}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
