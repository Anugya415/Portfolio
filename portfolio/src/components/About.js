'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaProjectDiagram, FaLayerGroup, FaHeart } from 'react-icons/fa';
import { IoCodeSlash, IoServer, IoHammer } from 'react-icons/io5';

export default function About() {
  const [activeTab, setActiveTab] = useState('story');

  const stats = [
    { number: '3+', label: 'Years Experience', icon: FaAward },
    { number: '50+', label: 'Projects Completed', icon: FaProjectDiagram },
    { number: '10+', label: 'Technologies', icon: FaLayerGroup },
    { number: '100%', label: 'Client Satisfaction', icon: FaHeart }
  ];

  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      icon: IoCodeSlash
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Prisma'],
      icon: IoServer
    },
    {
      category: 'Tools',
      items: ['Git', 'Docker', 'AWS', 'Figma', 'Vercel'],
      icon: IoHammer
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section
      id="about"
      className="py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black relative overflow-hidden transition-colors duration-500"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, currentColor 1px, transparent 1px),
            linear-gradient(currentColor 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-sm font-mono text-black/40 dark:text-white/40 tracking-widest uppercase">01</span>
            <div className="h-px w-12 bg-black/20 dark:bg-white/20"></div>
            <span className="text-sm font-mono text-black/60 dark:text-white/60 tracking-widest uppercase">About</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-6 tracking-tight">
            About Me
          </h2>
          <p className="text-xl text-black/60 dark:text-white/60 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with passion and precision
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Profile & Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-12"
          >
            {/* Profile Card */}
            <motion.div variants={fadeInUp} className="relative group">
              <div className="absolute -inset-1 bg-black/5 dark:bg-white/5 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white dark:bg-black border-2 border-black/10 dark:border-white/10 rounded-3xl p-8 card-hover">
                <div className="w-48 h-48 mx-auto mb-8 bg-black dark:bg-white rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white dark:text-black text-7xl font-bold">AR</span>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-2">K. Anugya Reddy</h3>
                  <p className="text-black/60 dark:text-white/60">Full Stack Developer</p>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    variants={fadeInUp}
                    key={stat.label}
                    className="bg-white dark:bg-[#0a0a0a] border-2 border-black/10 dark:border-white/10 rounded-2xl p-6 hover:border-black/30 dark:hover:border-white/30 transition-all group"
                  >
                    <div className="flex items-center justify-center mb-3">
                      <div className="p-3 bg-black/5 dark:bg-white/5 rounded-xl group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-colors">
                        <IconComponent className="text-xl text-black dark:text-white group-hover:text-white dark:group-hover:text-black" />
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-black dark:text-white mb-1">{stat.number}</div>
                      <div className="text-sm text-black/60 dark:text-white/60 font-medium">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Content Tabs */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-8"
          >
            {/* Tab Navigation */}
            <div className="flex space-x-2 bg-black/5 dark:bg-white/5 rounded-2xl p-1.5 border border-black/10 dark:border-white/10">
              {['story', 'skills'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-4 px-6 rounded-xl text-base font-semibold transition-all duration-300 relative ${activeTab === tab
                      ? 'bg-black text-white dark:bg-white dark:text-black shadow-lg'
                      : 'text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/10'
                    }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white dark:bg-[#0a0a0a] border-2 border-black/10 dark:border-white/10 rounded-3xl p-8 lg:p-10 min-h-[400px]">
              {activeTab === 'story' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <p className="text-lg text-black/80 dark:text-white/80 leading-relaxed">
                    I'm a passionate <span className="font-semibold text-black dark:text-white">full-stack developer</span> with a keen eye for design and user experience.
                    My journey in tech started with curiosity and has evolved into a deep love for creating
                    digital solutions that make a real impact.
                  </p>
                  <p className="text-lg text-black/80 dark:text-white/80 leading-relaxed">
                    I believe in the power of <span className="font-semibold text-black dark:text-white">clean code</span>, intuitive design, and collaborative teamwork.
                    Every project is an opportunity to learn something new and push the boundaries of
                    what's possible.
                  </p>
                  <p className="text-lg text-black/80 dark:text-white/80 leading-relaxed">
                    When I'm not coding, you'll find me exploring the latest technologies, contributing to open-source projects,
                    or sharing knowledge with the developer community.
                  </p>

                  {/* Core Values */}
                  <div className="pt-6 border-t border-black/10 dark:border-white/10">
                    <h3 className="text-xl font-bold text-black dark:text-white mb-4">Core Values</h3>
                    <div className="flex flex-wrap gap-3">
                      {['Problem Solver', 'Team Player', 'Quick Learner', 'Creative Thinker'].map((trait) => (
                        <span
                          key={trait}
                          className="px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/20 dark:border-white/20 text-black dark:text-white rounded-full text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-default"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'skills' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  {skills.map((skillGroup) => {
                    const IconComponent = skillGroup.icon;
                    return (
                      <div key={skillGroup.category} className="group">
                        <div className="flex items-center mb-4">
                          <div className="p-2 mr-3 bg-black dark:bg-white rounded-lg">
                            <IconComponent className="text-white dark:text-black text-xl" />
                          </div>
                          <h4 className="text-xl font-bold text-black dark:text-white">{skillGroup.category}</h4>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {skillGroup.items.map((skill) => (
                            <span
                              key={skill}
                              className="px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black dark:text-white rounded-xl text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-black dark:hover:border-white transition-all cursor-default"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
