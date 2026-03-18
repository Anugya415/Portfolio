'use client';

import { motion } from 'framer-motion';

export default function TechStack() {
  const competencies = [
    {
      title: 'FRONTEND',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    },
    {
      title: 'BACKEND',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Prisma']
    },
    {
      title: 'DEVELOPMENT TOOLS',
      skills: ['Git', 'Docker', 'AWS', 'Figma', 'Vercel']
    },
    {
      title: 'CLOUD / DEV',
      skills: ['Docker', 'Git', 'OpenCV / MediaPipe']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section
      id="skills"
      className="scroll-mt-16 sm:scroll-mt-24 w-full transition-colors duration-500"
    >
      <div className="relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-sm font-mono text-zinc-500 dark:text-zinc-600 tracking-widest uppercase">02</span>
            <div className="h-px w-12 bg-zinc-300 dark:bg-zinc-700"></div>
            <span className="text-sm font-mono text-zinc-700 dark:text-zinc-400 tracking-widest uppercase">Skills</span>
          </div>
        </motion.div>

        <div className="w-full">
          {/* Core Competencies Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h3 className="text-xs font-bold tracking-widest text-zinc-500 dark:text-zinc-400 uppercase">
              CORE COMPETENCIES
            </h3>
          </motion.div>

          {/* Competencies Vertical List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col space-y-12"
          >
            {competencies.map((group) => (
              <motion.div key={group.title} variants={itemVariants} className="flex flex-col">
                <h3 className="text-sm font-bold tracking-[0.2em] text-zinc-900 dark:text-zinc-100 uppercase mb-6">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-zinc-600 dark:text-zinc-400 text-sm font-medium transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Optional subtle bottom divider line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 w-full h-[1px] bg-zinc-200 dark:bg-zinc-800 origin-left"
          ></motion.div>
        </div>
      </div>
    </section>
  );
}
