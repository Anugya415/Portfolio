'use client';

import { useState, useEffect, useRef } from 'react';
import { FaCode, FaDatabase, FaTools, FaAward, FaProjectDiagram, FaLayerGroup, FaHeart } from 'react-icons/fa';
import { IoCodeSlash, IoServer, IoHammer } from 'react-icons/io5';

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
    { number: '3+', label: 'Years Experience', icon: FaAward },
    { number: '50+', label: 'Projects Completed', icon: FaProjectDiagram },
    { number: '10+', label: 'Technologies', icon: FaLayerGroup },
    { number: '100%', label: 'Client Satisfaction', icon: FaHeart }
  ];

  const skills = [
    { 
      category: 'Frontend', 
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      icon: IoCodeSlash,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      category: 'Backend', 
      items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
      icon: IoServer,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      category: 'Tools', 
      items: ['Git', 'Docker', 'AWS', 'Figma'],
      icon: IoHammer,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-block mb-4">
            <span className="text-blue-400 font-mono text-sm tracking-widest uppercase">01.</span>
            <span className="text-gray-500 font-mono text-sm tracking-widest uppercase ml-2">About</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Passionate developer crafting digital experiences that make a difference
          </p>
        </div>

        {/* Main Content */}
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Left Column - Enhanced Image and Stats */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-12 group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-20 group-hover:opacity-40 blur-2xl transition-opacity duration-500"></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-3xl mx-auto lg:mx-0 flex items-center justify-center overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 to-purple-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full" style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
                
                <span className="text-white text-9xl font-bold relative z-10 group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl">AR</span>
                
                {/* Decorative circles */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full opacity-30 animate-pulse blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-pink-400 rounded-full opacity-30 animate-pulse blur-xl" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={stat.label}
                    className="group relative p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    {/* Background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-center lg:justify-start mb-3">
                        <IconComponent className="text-blue-400 text-2xl mr-2 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Enhanced Content Tabs */}
          <div className="w-full">
            {/* Enhanced Tab Navigation */}
            <div className="flex space-x-2 mb-8 bg-white/5 backdrop-blur-md rounded-2xl p-1.5 border border-white/10">
              {['story', 'skills'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-4 px-6 rounded-xl text-base font-semibold transition-all duration-300 relative overflow-hidden ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50 scale-105'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {activeTab === tab && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-50 animate-pulse"></div>
                  )}
                  <span className="relative z-10">{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
                </button>
              ))}
            </div>

            {/* Enhanced Tab Content */}
            <div className="min-h-[400px] bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 lg:p-10">
              {activeTab === 'story' && (
                <div className="space-y-8 animate-fade-in">
                  <div className="space-y-6">
                    <p className="text-gray-200 text-lg leading-relaxed font-light">
                      I'm a passionate <span className="text-blue-400 font-semibold">full-stack developer</span> with a keen eye for design and user experience.
                      My journey in tech started with curiosity and has evolved into a deep love for creating
                      digital solutions that make a real impact.
                    </p>
                    <p className="text-gray-200 text-lg leading-relaxed font-light">
                      I believe in the power of <span className="text-purple-400 font-semibold">clean code</span>, intuitive design, and collaborative teamwork.
                      Every project is an opportunity to learn something new and push the boundaries of
                      what's possible.
                    </p>
                    <p className="text-gray-200 text-lg leading-relaxed font-light">
                      When I'm not coding, you'll find me exploring the latest technologies, contributing to open-source projects,
                      or sharing knowledge with the developer community.
                    </p>
                  </div>
                  
                  {/* Enhanced Traits */}
                  <div className="pt-6 border-t border-white/10">
                    <h3 className="text-white font-semibold mb-4 text-lg">Core Values</h3>
                    <div className="flex flex-wrap gap-3">
                      {['Problem Solver', 'Team Player', 'Quick Learner', 'Creative Thinker'].map((trait, idx) => (
                        <span
                          key={trait}
                          className="group px-5 py-2.5 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/40 text-blue-300 rounded-full text-sm font-medium hover:from-blue-500/30 hover:to-purple-600/30 hover:border-blue-500/60 hover:scale-110 transition-all duration-300 cursor-default"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'skills' && (
                <div className="space-y-8 animate-fade-in">
                  {skills.map((skillGroup, groupIdx) => {
                    const IconComponent = skillGroup.icon;
                    return (
                      <div key={skillGroup.category} className="group">
                        <div className="flex items-center mb-4">
                          <div className={`p-2 mr-3 rounded-lg bg-gradient-to-br ${skillGroup.color} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                            <IconComponent className="text-white text-xl" />
                          </div>
                          <h4 className="text-white font-bold text-xl">{skillGroup.category}</h4>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {skillGroup.items.map((skill, idx) => (
                            <span
                              key={skill}
                              className="group/skill px-4 py-2.5 bg-white/10 backdrop-blur-sm text-gray-300 rounded-xl text-sm font-medium border border-white/10 hover:bg-white/20 hover:border-blue-500/50 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-default"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
