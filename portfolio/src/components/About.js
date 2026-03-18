'use client';

import { motion } from 'framer-motion';
import { IoDocumentText } from 'react-icons/io5';

export default function About() {
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
          <p className="text-lg text-black/60 dark:text-white/60 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with passion and precision
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col gap-16 lg:gap-24 items-center w-full max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="w-full space-y-16"
          >
            {/* Story Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <p className="text-base text-black/80 dark:text-white/80 leading-relaxed max-w-3xl">
                I&apos;m a passionate <span className="font-semibold text-black dark:text-white">full-stack developer</span> with a keen eye for design and user experience. I build clean, intuitive, and scalable digital solutions that make a real impact.
              </p>
              <p className="text-base text-black/80 dark:text-white/80 leading-relaxed max-w-3xl">
                When I&apos;m not coding, you&apos;ll find me exploring emerging technologies, contributing to open-source projects, or sharing knowledge with the community.
              </p>

              <div className="pt-12">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 font-bold uppercase tracking-widest text-xs rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm"
                >
                  <IoDocumentText className="mr-2 text-lg" />
                  View Resume
                </a>
              </div>


            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
