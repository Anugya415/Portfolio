'use client';

import { useState, useEffect, useRef } from 'react';
import { FaAward, FaProjectDiagram, FaLayerGroup, FaHeart } from 'react-icons/fa';
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
      icon: IoCodeSlash
    },
    { 
      category: 'Backend', 
      items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
      icon: IoServer
    },
    { 
      category: 'Tools', 
      items: ['Git', 'Docker', 'AWS', 'Figma'],
      icon: IoHammer
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      {/* Subtle background pattern */}
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
        <div className={`text-center mb-24 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-sm font-mono text-black/40 tracking-widest uppercase">01</span>
            <div className="h-px w-12 bg-black/20"></div>
            <span className="text-sm font-mono text-black/60 tracking-widest uppercase">About</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-6 tracking-tight">
            About Me
          </h2>
          <p className="text-xl text-black/60 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with passion and precision
          </p>
        </div>

        {/* Main Content Grid */}
        <div className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-start transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Left Column - Profile & Stats */}
          <div className="space-y-12">
            {/* Profile Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-black/5 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white border-2 border-black/10 rounded-3xl p-8 card-hover">
                <div className="w-48 h-48 mx-auto mb-8 bg-black rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-7xl font-bold">AR</span>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-black mb-2">K. Anugya Reddy</h3>
                  <p className="text-black/60">Full Stack Developer</p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={stat.label}
                    className="bg-white border-2 border-black/10 rounded-2xl p-6 card-hover group"
                  >
                    <div className="flex items-center justify-center mb-3">
                      <div className="p-3 bg-black/5 rounded-xl group-hover:bg-black group-hover:text-white transition-colors">
                        <IconComponent className="text-xl text-black group-hover:text-white" />
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-black mb-1">{stat.number}</div>
                      <div className="text-sm text-black/60 font-medium">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Content Tabs */}
          <div className="space-y-8">
            {/* Tab Navigation */}
            <div className="flex space-x-2 bg-black/5 rounded-2xl p-1.5 border border-black/10">
              {['story', 'skills'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-4 px-6 rounded-xl text-base font-semibold transition-all duration-300 relative ${
                    activeTab === tab
                      ? 'bg-black text-white shadow-lg'
                      : 'text-black/60 hover:text-black hover:bg-white/50'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white border-2 border-black/10 rounded-3xl p-8 lg:p-10 min-h-[400px] card-hover">
              {activeTab === 'story' && (
                <div className="space-y-6 animate-fade-in">
                  <p className="text-lg text-black/80 leading-relaxed">
                    I'm a passionate <span className="font-semibold text-black">full-stack developer</span> with a keen eye for design and user experience.
                    My journey in tech started with curiosity and has evolved into a deep love for creating
                    digital solutions that make a real impact.
                  </p>
                  <p className="text-lg text-black/80 leading-relaxed">
                    I believe in the power of <span className="font-semibold text-black">clean code</span>, intuitive design, and collaborative teamwork.
                    Every project is an opportunity to learn something new and push the boundaries of
                    what's possible.
                  </p>
                  <p className="text-lg text-black/80 leading-relaxed">
                    When I'm not coding, you'll find me exploring the latest technologies, contributing to open-source projects,
                    or sharing knowledge with the developer community.
                  </p>
                  
                  {/* Core Values */}
                  <div className="pt-6 border-t border-black/10">
                    <h3 className="text-xl font-bold text-black mb-4">Core Values</h3>
                    <div className="flex flex-wrap gap-3">
                      {['Problem Solver', 'Team Player', 'Quick Learner', 'Creative Thinker'].map((trait) => (
                        <span
                          key={trait}
                          className="px-4 py-2 bg-black/5 border border-black/20 text-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition-colors cursor-default"
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
                  {skills.map((skillGroup) => {
                    const IconComponent = skillGroup.icon;
                    return (
                      <div key={skillGroup.category} className="group">
                        <div className="flex items-center mb-4">
                          <div className="p-2 mr-3 bg-black rounded-lg">
                            <IconComponent className="text-white text-xl" />
                          </div>
                          <h4 className="text-xl font-bold text-black">{skillGroup.category}</h4>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {skillGroup.items.map((skill) => (
                            <span
                              key={skill}
                              className="px-4 py-2 bg-black/5 border border-black/10 text-black rounded-xl text-sm font-medium hover:bg-black hover:text-white hover:border-black transition-all cursor-default"
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
