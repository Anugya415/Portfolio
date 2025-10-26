'use client';

import { useState, useEffect, useRef } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'anugya@example.com',
      link: 'mailto:anugya@example.com',
      description: 'Send me an email anytime!',
      color: 'from-red-400 to-red-600'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'K. Anugya Reddy',
      link: 'https://linkedin.com/in/anugya-reddy',
      description: 'Connect with me professionally',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: '@anugya-reddy',
      link: 'https://github.com/anugya-reddy',
      description: 'Check out my code repositories',
      color: 'from-gray-400 to-gray-600'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Hyderabad, India',
      link: null,
      description: 'Based in Hyderabad, open to remote work',
      color: 'from-green-400 to-green-600'
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/anugya-reddy', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com/anugya-reddy', color: 'hover:text-pink-400' },
    { name: 'Discord', icon: '🎮', url: 'https://discord.com/users/anugya-reddy', color: 'hover:text-purple-400' },
    { name: 'Telegram', icon: '✈️', url: 'https://t.me/anugya-reddy', color: 'hover:text-blue-400' }
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black to-gray-900 relative overflow-hidden"
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
            Let's <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
            Have a project in mind? Let's create something amazing together.
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Hyderabad, India
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
            
            {/* Contact Cards */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-200`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-lg">{info.title}</h4>
                      <p className="text-gray-400 text-sm mb-1">{info.description}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-gray-300">{info.value}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mb-8">
              <h4 className="text-white font-semibold text-lg mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-xl text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/20`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Resume Download */}
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-6">
              <h4 className="text-white font-semibold text-lg mb-2">Download Resume</h4>
              <p className="text-gray-400 text-sm mb-4">
                Get a detailed overview of my experience and skills
              </p>
              <a
                href="#"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                </svg>
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
              
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                    ✅
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-300">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200 backdrop-blur-sm"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200 backdrop-blur-sm"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200 backdrop-blur-sm"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none transition-all duration-200 backdrop-blur-sm"
                      placeholder="Tell me about your project or just say hello!"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 disabled:cursor-not-allowed hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <span>Send Message</span>
                        <span>🚀</span>
                      </div>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Quick Contact Options */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-gray-400 mb-6">
            Prefer a quick chat? Reach out directly!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:anugya@example.com"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 text-white rounded-full font-medium transition-all duration-300 hover:bg-white/20 hover:scale-105 backdrop-blur-sm"
            >
              <span>📧</span>
              <span>Email Me</span>
            </a>
            <a
              href="https://linkedin.com/in/anugya-reddy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 text-white rounded-full font-medium transition-all duration-300 hover:bg-white/20 hover:scale-105 backdrop-blur-sm"
            >
              <span>💼</span>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://calendly.com/anugya-reddy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span>📅</span>
              <span>Schedule Call</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
