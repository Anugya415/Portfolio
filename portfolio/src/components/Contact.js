'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'reddyanugya@gmail.com',
      link: 'mailto:reddyanugya@gmail.com'
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/anugya-reddy',
      link: 'https://linkedin.com/in/anugya-reddy'
    },
    {
      icon: FaGithub,
      title: 'GitHub',
      value: 'github.com/Anugya415',
      link: 'https://github.com/Anugya415'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Bilaspur, India',
      link: null
    }
  ];

  return (
    <section
      id="contact"
      className="scroll-mt-16 sm:scroll-mt-24 w-full transition-colors duration-500"
    >
      <div className="relative z-10 w-full mb-32">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-sm font-mono text-zinc-500 dark:text-zinc-600 tracking-widest uppercase">05</span>
            <div className="h-px w-12 bg-zinc-300 dark:bg-zinc-700"></div>
            <span className="text-sm font-mono text-zinc-700 dark:text-zinc-400 tracking-widest uppercase">Contact</span>
          </div>
          <p className="text-lg text-black/60 dark:text-white/60 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together.
          </p>
        </motion.div>

        {/* The Box */}
        <div className="bg-white dark:bg-black text-black dark:text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-zinc-200 dark:border-zinc-800 shadow-sm max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
            
            {/* Contact Info (Left Side - 2 columns span) */}
            <div className="lg:col-span-2 flex flex-col justify-center">
              <h3 className="text-xs font-bold tracking-widest text-zinc-500 dark:text-zinc-400 uppercase mb-10">
                Contact Details
              </h3>
              
              <div className="space-y-10">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.title} className="flex flex-col">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="text-zinc-400 dark:text-zinc-500 text-sm" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
                          {info.title}
                        </span>
                      </div>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base font-medium text-zinc-900 dark:text-zinc-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-base font-medium text-zinc-900 dark:text-zinc-100">
                          {info.value}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Form (Right Side - 3 columns span) */}
            <div className="lg:col-span-3">
              <h3 className="text-xs font-bold tracking-widest text-zinc-500 dark:text-zinc-400 uppercase mb-10">
                Send a Message
              </h3>

              <div className="relative min-h-[400px]">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-100 dark:border-zinc-800"
                    >
                      <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-full flex items-center justify-center text-xl mb-4">
                        ✓
                      </div>
                      <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">Message Sent Successfully</h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        Thank you for reaching out. I'll get back to you as soon as possible.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit} 
                      className="space-y-8"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="flex flex-col">
                          <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-2 focus:border-zinc-900 dark:focus:border-zinc-100 text-zinc-900 dark:text-zinc-100 placeholder-zinc-300 dark:placeholder-zinc-700 outline-none transition-colors"
                            placeholder="John Doe"
                          />
                        </div>

                        <div className="flex flex-col">
                          <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-2 focus:border-zinc-900 dark:focus:border-zinc-100 text-zinc-900 dark:text-zinc-100 placeholder-zinc-300 dark:placeholder-zinc-700 outline-none transition-colors"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-2 focus:border-zinc-900 dark:focus:border-zinc-100 text-zinc-900 dark:text-zinc-100 placeholder-zinc-300 dark:placeholder-zinc-700 outline-none transition-colors"
                          placeholder="Project Inquiry"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows="4"
                          className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-2 focus:border-zinc-900 dark:focus:border-zinc-100 text-zinc-900 dark:text-zinc-100 placeholder-zinc-300 dark:placeholder-zinc-700 outline-none transition-colors resize-none"
                          placeholder="Hello there..."
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="mt-6 px-8 py-3 bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-zinc-100 dark:text-zinc-900 rounded-full font-bold uppercase tracking-widest text-xs transition-colors disabled:opacity-50 inline-flex items-center justify-center min-w-[160px]"
                      >
                        {isSubmitting ? (
                          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                          'Send Message'
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
