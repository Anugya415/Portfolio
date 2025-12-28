'use client';

import { useState, useEffect, useRef } from 'react';
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
      value: 'anugya@example.com',
      link: 'mailto:anugya@example.com',
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
      value: '@anugya-reddy',
      link: 'https://github.com/anugya-reddy',
      description: 'Check out my code repositories'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Hyderabad, India',
      link: null,
      description: 'Based in Hyderabad, open to remote work'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, #000 1px, transparent 1px),
            linear-gradient(#000 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-sm font-mono text-black/40 tracking-widest uppercase">04</span>
            <div className="h-px w-12 bg-black/20"></div>
            <span className="text-sm font-mono text-black/60 tracking-widest uppercase">Contact</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-6 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-xl text-black/60 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div>
              <h3 className="text-2xl font-bold text-black mb-8">Get in Touch</h3>
              
              {/* Contact Cards */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div
                      key={info.title}
                      className="bg-white border-2 border-black/10 rounded-2xl p-6 card-hover group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-black rounded-xl group-hover:scale-110 transition-transform">
                          <IconComponent className="text-white text-xl" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-black mb-1">{info.title}</h4>
                          <p className="text-sm text-black/60 mb-1">{info.description}</p>
                          {info.link ? (
                            <a
                              href={info.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-black hover:text-black/70 font-medium transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <span className="text-black/80">{info.value}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="bg-white border-2 border-black/10 rounded-3xl p-8 lg:p-10 card-hover">
              <h3 className="text-2xl font-bold text-black mb-8">Send Message</h3>
              
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                    ✓
                  </div>
                  <h4 className="text-2xl font-bold text-black mb-3">Message Sent!</h4>
                  <p className="text-black/70">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-black/80 text-sm font-semibold mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/5 border-2 border-black/10 rounded-xl focus:ring-2 focus:ring-black focus:border-black text-black placeholder-black/30 transition-all"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-black/80 text-sm font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/5 border-2 border-black/10 rounded-xl focus:ring-2 focus:ring-black focus:border-black text-black placeholder-black/30 transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-black/80 text-sm font-semibold mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/5 border-2 border-black/10 rounded-xl focus:ring-2 focus:ring-black focus:border-black text-black placeholder-black/30 transition-all"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-black/80 text-sm font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-black/5 border-2 border-black/10 rounded-xl focus:ring-2 focus:ring-black focus:border-black text-black placeholder-black/30 resize-none transition-all"
                      placeholder="Tell me about your project or just say hello!"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black hover:bg-black/90 disabled:bg-black/30 text-white disabled:text-black/50 px-6 py-4 rounded-xl font-semibold text-base transition-all duration-300 disabled:cursor-not-allowed hover:scale-[1.02] hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
