export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Full Stack Developer',
      company: 'Self-Taught Journey',
      period: '2024 - Present',
      type: 'Self-Learning',
      description: 'Building full-stack applications using modern web technologies. Developed expertise in React, Next.js, Node.js, and cloud deployment.',
      achievements: [
        'Built 10+ full-stack applications from concept to deployment',
        'Gained proficiency in React ecosystem and modern JavaScript',
        'Implemented secure authentication systems and API integrations',
        'Deployed applications on cloud platforms (Vercel, AWS)',
        'Contributed to open-source projects and collaborated with developers worldwide'
      ],
      skills: ['React', 'Next.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'AWS']
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Personal Projects',
      period: '2023 - Present',
      type: 'Freelance',
      description: 'Creating responsive and interactive user interfaces with focus on user experience and performance optimization.',
      achievements: [
        'Developed responsive web applications with modern UI/UX principles',
        'Implemented state management solutions and component architecture',
        'Optimized applications for performance and SEO',
        'Integrated third-party APIs and services',
        'Maintained clean, scalable, and maintainable codebases'
      ],
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux']
    }
  ];

  const education = {
    degree: 'Bachelor of Technology in Computer Science',
    university: 'KL University',
    period: '2023 - 2027',
    location: 'Vijayawada, India',
    description: 'Focused on software engineering, algorithms, data structures, and web development. Active member of the computer science club and participated in various hackathons and coding competitions.',
    achievements: [
      'Graduated with honors (CGPA: 9.02/10)',
      'Active member of Computer Science Club',
      'Completed coursework in Advanced Algorithms, Data Structures, and Software Engineering'
    ],
    relevantCourses: ['Data Structures & Algorithms', 'Web Development', 'Database Management', 'Software Engineering', 'Computer Networks']
  };

  return (
    <section id="experience" className="scroll-mt-16 sm:scroll-mt-24">
      <div className="">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
            Experience & Education
          </h2>
        </div>

        {/* Experience Section */}
        <div className="mb-20">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 mb-12 text-center">
            Professional Experience
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-zinc-200 dark:bg-zinc-800"></div>

            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative flex items-start group">
                  {/* Timeline dot */}
                  <div className="absolute left-[29px] w-2 h-2 bg-zinc-400 dark:bg-zinc-600 rounded-full group-hover:bg-zinc-900 dark:group-hover:bg-zinc-50 group-hover:scale-150 transition-all duration-300 mt-2"></div>

                  {/* Content */}
                  <div className="ml-16 w-full">
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4 gap-2">
                      <div>
                        <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                          {exp.title}
                        </h4>
                        <p className="text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-left md:text-right mt-2 md:mt-0 opacity-80">
                        <span className="inline-block md:ml-4 text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1">
                          {exp.type}
                        </span>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm font-mono tracking-tight">
                          {exp.period}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">

                      <h5 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-50 mb-3">Key Achievements</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-zinc-600 dark:text-zinc-400">
                            <span className="text-zinc-400 dark:text-zinc-500 mr-3 mt-1 text-xs">▹</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800/50 text-teal-700 dark:text-teal-300 rounded-full text-xs font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 mb-12 text-center mt-32">
            Education
          </h3>

          <div className="w-full">
            <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between mb-6">
              <div className="flex-1">
                <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                  {education.degree}
                </h4>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 font-medium mb-1">
                  {education.university}
                </p>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm font-mono">
                  {education.location} • {education.period}
                </p>
              </div>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed max-w-2xl">
              {education.description}
            </p>

            {/* Achievements */}
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-black dark:text-white mb-3">Academic Achievements:</h5>
              <div className="grid md:grid-cols-2 gap-2">
                {education.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start text-gray-600 dark:text-gray-400">
                    <span className="text-black dark:text-white mr-2 mt-1">🏆</span>
                    {achievement}
                  </div>
                ))}
              </div>
            </div>

            {/* Relevant Courses */}
            <div className="mt-8">
              <div className="flex flex-wrap gap-2">
                {education.relevantCourses.map((course) => (
                  <span key={course} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800/50 text-teal-700 dark:text-teal-300 rounded-full text-xs font-medium">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Overview */}
        <div className="mt-32">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 mb-12 text-center">
            Skills Overview
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="group">
              <h4 className="font-bold text-zinc-900 dark:text-zinc-50 mb-2 group-hover:text-teal-500 transition-colors">Frontend</h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">React, Next.js, TypeScript</p>
            </div>
            <div className="group">
              <h4 className="font-bold text-zinc-900 dark:text-zinc-50 mb-2 group-hover:text-teal-500 transition-colors">Backend</h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Node.js, Express, Python</p>
            </div>
            <div className="group">
              <h4 className="font-bold text-zinc-900 dark:text-zinc-50 mb-2 group-hover:text-teal-500 transition-colors">Database</h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">MongoDB, PostgreSQL</p>
            </div>
            <div className="group">
              <h4 className="font-bold text-zinc-900 dark:text-zinc-50 mb-2 group-hover:text-teal-500 transition-colors">Cloud</h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">AWS, Vercel, Docker</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
