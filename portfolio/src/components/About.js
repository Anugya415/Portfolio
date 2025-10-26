'use client';

import { useState, useEffect, useRef } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('story');
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

  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '10+', label: 'Technologies' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma'] }
  ];

  const interests = [
    { icon: '💻', title: 'Coding', description: 'Building innovative solutions' },
    { icon: '🎨', title: 'Design', description: 'Creating beautiful interfaces' },
    { icon: '📚', title: 'Learning', description: 'Exploring new technologies' },
    { icon: '🌱', title: 'Open Source', description: 'Contributing to community' }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate developer crafting digital experiences that make a difference
          </p>
        </div>

        {/* Main Content */}
        <div className={`grid lg:grid-cols-2 gap-16 items-center mb-20 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Left Column - Image and Stats */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-8">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto lg:mx-0 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="text-white text-8xl font-bold relative z-10 group-hover:scale-110 transition-transform duration-300">AR</span>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-pulse animation-delay-2000"></div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content Tabs */}
          <div>
            {/* Tab Navigation */}
            <div className="flex space-x-1 mb-8 bg-white/5 rounded-xl p-1">
              {['story', 'skills', 'interests'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[300px]">
              {activeTab === 'story' && (
                <div className="space-y-6 animate-fade-in">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    I'm a passionate full-stack developer with a keen eye for design and user experience.
                    My journey in tech started with curiosity and has evolved into a deep love for creating
                    digital solutions that make a real impact.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    I believe in the power of clean code, intuitive design, and collaborative teamwork.
                    Every project is an opportunity to learn something new and push the boundaries of
                    what's possible.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-6">
                    {['Problem Solver', 'Team Player', 'Quick Learner', 'Creative Thinker'].map((trait) => (
                      <span
                        key={trait}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'skills' && (
                <div className="space-y-6 animate-fade-in">
                  {skills.map((skillGroup) => (
                    <div key={skillGroup.category}>
                      <h4 className="text-white font-semibold mb-3 text-lg">{skillGroup.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-white/10 text-gray-300 rounded-lg text-sm hover:bg-white/20 transition-colors duration-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'interests' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in">
                  {interests.map((interest) => (
                    <div
                      key={interest.title}
                      className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">
                        {interest.icon}
                      </div>
                      <h4 className="text-white font-semibold mb-1">{interest.title}</h4>
                      <p className="text-gray-400 text-sm">{interest.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
