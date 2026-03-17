'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
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
      link: 'mailto:reddyanugya@gmail.com',
      description: 'Send me an email anytime!'
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      value: 'K. Anugya Reddy',
      link: 'https://linkedin.com/in/anugya-reddy',
      description: 'Connect with me professionally'
    },
    {
      icon: FaGithub,
      title: 'GitHub',
      value: '@Anugya415',
      link: 'https://github.com/Anugya415',
      description: 'Check out my code repositories'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Bilaspur, India',
      link: null,
      description: 'Based in Bilaspur, open to remote work'
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-16 sm:scroll-mt-24"
    >

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-sm font-mono text-black/40 dark:text-white/40 tracking-widest uppercase">04</span>
            <div className="h-px w-12 bg-black/20 dark:bg-white/20"></div>
            <span className="text-sm font-mono text-black/60 dark:text-white/60 tracking-widest uppercase">Contact</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-6 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-xl text-black/60 dark:text-white/60 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col h-full"
          >
            <div className="flex-1 flex flex-col justify-between">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-8">Get in Touch</h3>

              {/* Contact Cards */}
              <div className="flex flex-col justify-between flex-1 mb-8 gap-4">
                {contactInfo.map((info) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div
                      variants={itemVariants}
                      key={info.title}
                      className="bg-transparent border border-black/10 dark:border-white/10 rounded-2xl p-6 hover:border-black/30 dark:hover:border-white/30 transition-all group flex-1 flex flex-col justify-center"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-black dark:bg-white rounded-xl group-hover:scale-110 transition-transform">
                          <IconComponent className="text-white dark:text-black text-xl" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-lg font-bold text-black dark:text-white mb-1">{info.title}</h4>
                          <p className="text-sm text-black/60 dark:text-white/60 mb-2">{info.description}</p>
                          {info.link ? (
                            <a
                              href={info.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-black dark:text-white hover:text-black/70 dark:hover:text-white/70 font-medium transition-colors break-all inline-block"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <span className="text-black/80 dark:text-white/80 break-words inline-block">{info.value}</span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col h-full"
          >
            {/* Spacer to align with "Get in Touch" header */}
            <div className="h-[40px] mb-8 hidden lg:block"></div>

            <div className="bg-transparent border border-black/10 dark:border-white/10 rounded-2xl p-6 lg:p-8 flex-1 flex flex-col relative overflow-hidden">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 bg-black dark:bg-white rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                    <span className="text-white dark:text-black">✓</span>
                  </div>
                  <h4 className="text-2xl font-bold text-black dark:text-white mb-3">Message Sent!</h4>
                  <p className="text-black/70 dark:text-white/70">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col flex-1 text-left space-y-8">
                  <div className="space-y-6 flex-1 flex flex-col">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-none">
                      <div>
                        <label htmlFor="name" className="block text-black/80 dark:text-white/80 text-sm font-semibold mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-black/5 dark:bg-white/5 border-2 border-black/10 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white text-black dark:text-white placeholder-black/30 dark:placeholder-white/30 transition-all outline-none"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-black/80 dark:text-white/80 text-sm font-semibold mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-black/5 dark:bg-white/5 border-2 border-black/10 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white text-black dark:text-white placeholder-black/30 dark:placeholder-white/30 transition-all outline-none"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="flex-none">
                      <label htmlFor="subject" className="block text-black/80 dark:text-white/80 text-sm font-semibold mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/5 dark:bg-white/5 border-2 border-black/10 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white text-black dark:text-white placeholder-black/30 dark:placeholder-white/30 transition-all outline-none"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div className="flex flex-col flex-1">
                      <label htmlFor="message" className="block text-black/80 dark:text-white/80 text-sm font-semibold mb-2 flex-none">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="w-full flex-1 px-4 py-3 bg-black/5 dark:bg-white/5 border-2 border-black/10 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white text-black dark:text-white placeholder-black/30 dark:placeholder-white/30 resize-none transition-all outline-none min-h-[200px]"
                        placeholder="Tell me about your project or just say hello!"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-auto bg-black dark:bg-white hover:bg-black/90 dark:hover:bg-white/90 disabled:bg-black/30 dark:disabled:bg-white/30 text-white dark:text-black disabled:text-black/50 dark:disabled:text-white/50 px-6 py-4 rounded-xl font-semibold text-base transition-all duration-300 disabled:cursor-not-allowed hover:scale-[1.02] hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white dark:border-black mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
