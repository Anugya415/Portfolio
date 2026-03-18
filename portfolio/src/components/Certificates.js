'use client';

import { motion } from 'framer-motion';

export default function Certificates() {
  const certificates = [
    {
      title: 'Automation Anywhere Essential Developer',
      issuer: 'Automation Anywhere',
      description: 'Mastered the fundamentals of robotic process automation (RPA) to design, build, and deploy intelligent software bots for automating repetitive business processes.',
    },
    {
      title: 'Aviatrix Multi-Cloud Network Associate',
      issuer: 'Aviatrix',
      description: 'Demonstrated expertise in multi-cloud networking architectures, security, and operational visibility across AWS, Azure, Google Cloud, and Oracle Cloud.',
    },
    {
      title: 'Oracle Cloud Infrastructure - Data Science Professional',
      issuer: 'Oracle',
      description: 'Certified in leveraging OCI Data Science to build, train, deploy, and manage machine learning models effectively using Python and scalable cloud infrastructure.',
    },
    {
      title: 'Oracle Cloud Infrastructure - Generative AI Professional',
      issuer: 'Oracle',
      description: 'Validated skills in foundational Large Language Models (LLMs), fine-tuning techniques, and safely deploying generative AI solutions on Oracle Cloud.',
    },
    {
      title: 'Salesforce Certified AI Associate',
      issuer: 'Salesforce',
      description: 'Equipped with foundational knowledge of enterprise artificial intelligence concepts, ethical AI usage, and Salesforce’s trusted AI principles and capabilities.',
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section
      id="certificates"
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
            <span className="text-sm font-mono text-zinc-500 dark:text-zinc-600 tracking-widest uppercase">04</span>
            <div className="h-px w-12 bg-zinc-300 dark:bg-zinc-700"></div>
            <span className="text-sm font-mono text-zinc-700 dark:text-zinc-400 tracking-widest uppercase">Certifications</span>
          </div>
        </motion.div>

        <div className="w-full">
          {/* Certificates Vertical List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col space-y-12"
          >
            {certificates.map((cert, index) => (
              <motion.div key={index} variants={itemVariants} className="group relative pl-8 sm:pl-12 border-l border-zinc-200 dark:border-zinc-800 hover:border-teal-500 dark:hover:border-teal-400 transition-colors duration-300">
                <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700 group-hover:bg-teal-500 dark:group-hover:bg-teal-400 transition-colors duration-300" />
                
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {cert.title}
                </h3>
                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-4">
                  {cert.issuer}
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
