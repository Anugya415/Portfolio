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
      { name: 'Next.js', icon: '▲', level: 90 },
      { name: 'React', icon: '⚛️', level: 95 },
      { name: 'React Native', icon: '📱', level: 85 },
      { name: 'Tailwind CSS', icon: '🎨', level: 95 },
      { name: 'Framer Motion', icon: '✨', level: 80 },
      { name: 'tsParticles', icon: '🎇', level: 75 }
    ],
    backend: [
      { name: 'Node.js', icon: '🟢', level: 85 },
      { name: 'Express', icon: '🚂', level: 80 },
      { name: 'Prisma ORM', icon: '🗄️', level: 85 },
      { name: 'MongoDB', icon: '🍃', level: 80 },
      { name: 'Firebase', icon: '🔥', level: 80 },
      { name: 'REST APIs', icon: '🔗', level: 90 }
    ],
    tools: [
      { name: 'Git & GitHub', icon: '📚', level: 92 },
      { name: 'VS Code', icon: '💻', level: 95 },
      { name: 'Expo', icon: '🚀', level: 85 },
      { name: 'Vercel', icon: '▲', level: 90 },
      { name: 'Figma', icon: '🎨', level: 85 },
      { name: 'Postman', icon: '🚀', level: 88 }
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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-sm font-mono text-black/40 tracking-widest uppercase">02</span>
            <div className="h-px w-12 bg-black/20"></div>
            <span className="text-sm font-mono text-black/60 tracking-widest uppercase">Skills</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-6 tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-xl text-black/60 max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`flex justify-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <div className="flex space-x-2 bg-black/5 rounded-2xl p-1.5 border border-black/10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${activeCategory === category.id
                  ? 'bg-black text-white shadow-lg'
                  : 'text-black/70 hover:text-black hover:bg-white/50'
                  }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          {techStack[activeCategory].map((tech, index) => (
            <div
              key={tech.name}
              className="bg-white border-2 border-black/10 rounded-2xl p-6 card-hover group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-200">
                    {tech.icon}
                  </span>
                  <h3 className="text-lg font-bold text-black">
                    {tech.name}
                  </h3>
                </div>
                <span className="text-black/60 text-sm font-semibold">
                  {tech.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-black/5 rounded-full h-2.5 mb-2 overflow-hidden">
                <div
                  className="h-full bg-black rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: isVisible ? `${tech.level}%` : '0%',
                    transitionDelay: `${index * 100 + 500}ms`
                  }}
                />
              </div>

              {/* Skill Level Indicator */}
              <div className="flex justify-between text-xs text-black/40 font-medium">
                <span>Beginner</span>
                <span>Expert</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <p className="text-black/60 mb-8 text-lg">
            Always learning and exploring new technologies to stay at the forefront of development
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Learning', 'Experimenting', 'Building', 'Growing'].map((action, index) => (
              <span
                key={action}
                className="px-5 py-2.5 bg-black/5 border border-black/10 text-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition-all cursor-default"
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
