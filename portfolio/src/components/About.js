'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaProjectDiagram, FaLayerGroup, FaHeart } from 'react-icons/fa';
import { IoCodeSlash, IoServer, IoHammer } from 'react-icons/io5';

export default function About() {
  const [activeTab, setActiveTab] = useState('story');

  const stats = [
    { number: '1+', label: 'YEARS\nEXPERIENCE', icon: FaAward },
    { number: '10+', label: 'PROJECTS\nCOMPLETED', icon: FaProjectDiagram },
    { number: '10+', label: 'TECHNOLOGIES', icon: FaLayerGroup },
    { number: '100%', label: 'CLIENT\nSATISFACTION', icon: FaHeart }
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
      className="scroll-mt-16 sm:scroll-mt-24"
    >
      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-sm font-mono text-zinc-500 dark:text-zinc-600 tracking-widest uppercase">01</span>
            <div className="h-px w-12 bg-zinc-300 dark:bg-zinc-700"></div>
            <span className="text-sm font-mono text-zinc-700 dark:text-zinc-400 tracking-widest uppercase">About</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-zinc-900 dark:text-zinc-50 mb-6">
            About Me
          </h2>
          <p className="text-lg text-black/60 dark:text-white/60 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with passion and precision
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col gap-16 lg:gap-24 items-center w-full max-w-4xl mx-auto">
          {/* Top Section - Stats Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="w-full"
          >
            <div className="grid grid-cols-2 max-w-2xl mx-auto">
              {stats.map((stat, index) => {
                return (
                  <motion.div
                    variants={fadeInUp}
                    key={stat.label}
                    className={`p-6 sm:p-12 transition-all flex flex-col justify-center ${index % 2 === 0 ? 'border-r border-zinc-200 dark:border-zinc-800' : ''} ${index < 2 ? 'border-b border-zinc-200 dark:border-zinc-800' : ''}`}
                  >
                    <div className="text-left">
                      <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 mb-3">{stat.number}</div>
                      <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 whitespace-pre-line leading-relaxed">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Bottom Section - Content Tabs */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-8"
          >
            {/* Tab Navigation */}
            <div className="flex space-x-2 border-b border-zinc-200 dark:border-zinc-800">
              {['story', 'skills'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-6 text-sm font-bold uppercase tracking-widest transition-all duration-300 relative ${activeTab === tab
                      ? 'text-zinc-900 dark:text-zinc-50 border-b-2 border-zinc-900 dark:border-zinc-50'
                      : 'text-zinc-500 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-300'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-transparent border-0 mt-4 h-full">
              {activeTab === 'story' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <p className="text-base text-black/80 dark:text-white/80 leading-relaxed max-w-3xl">
                    I'm a passionate <span className="font-semibold text-black dark:text-white">full-stack developer</span> with a keen eye for design and user experience. I build clean, intuitive, and scalable digital solutions that make a real impact.
                  </p>
                  <p className="text-base text-black/80 dark:text-white/80 leading-relaxed max-w-3xl">
                    When I'm not coding, you'll find me exploring emerging technologies, contributing to open-source projects, or sharing knowledge with the community.
                  </p>

                  {/* Core Values */}
                  <div className="pt-6 mt-8 border-t border-zinc-200 dark:border-zinc-800">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-50 mb-6">Core Values</h3>
                    <div className="flex flex-wrap gap-4">
                      {['Problem Solver', 'Team Player', 'Quick Learner', 'Creative Thinker'].map((trait) => (
                        <span
                          key={trait}
                          className="text-zinc-700 dark:text-zinc-300 text-sm font-medium transition-colors cursor-default"
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
                      <div key={skillGroup.category} className="group mb-8">
                        <div className="flex items-center mb-4">
                          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-900 dark:text-zinc-50">{skillGroup.category}</h4>
                        </div>
                        <div className="flex flex-wrap gap-x-6 gap-y-2">
                          {skillGroup.items.map((skill) => (
                            <span
                              key={skill}
                              className="text-zinc-600 dark:text-zinc-400 text-sm font-medium transition-colors cursor-default"
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
