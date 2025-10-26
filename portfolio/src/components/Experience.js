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
    university: 'Your University Name',
    period: '2020 - 2024',
    location: 'Your City, Country',
    description: 'Focused on software engineering, algorithms, data structures, and web development. Active member of the computer science club and participated in various hackathons and coding competitions.',
    achievements: [
      'Graduated with honors (CGPA: 8.5/10)',
      'Active member of Computer Science Club',
      'Participated in 5+ hackathons and coding competitions',
      'Led team projects and collaborated on open-source initiatives',
      'Completed coursework in Advanced Algorithms, Data Structures, and Software Engineering'
    ],
    relevantCourses: ['Data Structures & Algorithms', 'Web Development', 'Database Management', 'Software Engineering', 'Computer Networks']
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey in software development and academic background
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-black dark:text-white mb-12 text-center">
            Professional Experience
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-black dark:bg-white"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-black dark:bg-white rounded-full border-4 border-white dark:border-black shadow-lg"></div>

                  {/* Content */}
                  <div className="ml-16 bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 shadow-xl border-2 border-gray-200 dark:border-gray-700 w-full hover:shadow-2xl transition-all duration-300 hover:border-black dark:hover:border-white">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-black dark:text-white mb-1">
                          {exp.title}
                        </h4>
                        <p className="text-black dark:text-white font-medium mb-2">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 bg-white dark:bg-black text-black dark:text-white border-2 border-black dark:border-white rounded-full text-sm font-medium mb-2">
                          {exp.type}
                        </span>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                          {exp.period}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h5 className="text-lg font-semibold text-black dark:text-white mb-3">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-gray-600 dark:text-gray-400">
                            <span className="text-black dark:text-white mr-2 mt-1">✓</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h5 className="text-lg font-semibold text-black dark:text-white mb-3">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white rounded-full text-sm font-medium">
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
          <h3 className="text-3xl font-bold text-black dark:text-white mb-12 text-center">
            Education
          </h3>

          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 shadow-xl border-2 border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:border-black dark:hover:border-white">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-black dark:text-white mb-2">
                  {education.degree}
                </h4>
                <p className="text-black dark:text-white font-medium mb-1">
                  {education.university}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {education.location} • {education.period}
                </p>
              </div>
              <div className="mt-4 lg:mt-0 lg:text-right">
                <div className="inline-block px-4 py-2 bg-white dark:bg-black text-black dark:text-white border-2 border-black dark:border-white rounded-lg font-medium">
                  🎓 Graduated with Honors
                </div>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
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
            <div>
              <h5 className="text-lg font-semibold text-black dark:text-white mb-3">Relevant Coursework:</h5>
              <div className="flex flex-wrap gap-2">
                {education.relevantCourses.map((course) => (
                  <span key={course} className="px-3 py-1 bg-white dark:bg-black text-black dark:text-white border-2 border-black dark:border-white rounded-full text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Overview */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-8">
            Skills Overview
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-lg border-2 border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-2">🚀</div>
              <h4 className="font-semibold text-black dark:text-white mb-1">Frontend</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">React, Next.js, TypeScript</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-lg border-2 border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-2">⚙️</div>
              <h4 className="font-semibold text-black dark:text-white mb-1">Backend</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Node.js, Express, Python</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-lg border-2 border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-2">🗄️</div>
              <h4 className="font-semibold text-black dark:text-white mb-1">Database</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">MongoDB, PostgreSQL</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-lg border-2 border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-2">☁️</div>
              <h4 className="font-semibold text-black dark:text-white mb-1">Cloud</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">AWS, Vercel, Docker</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
