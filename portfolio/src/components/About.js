export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center">
              <span className="text-white text-6xl font-bold">[YN]</span>
            </div>
          </div>
          <div>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              I'm a passionate full-stack developer with a keen eye for design and user experience.
              I love turning complex problems into simple, beautiful solutions.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              or enjoying a good cup of coffee while reading about the latest in tech.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">Problem Solver</span>
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">Team Player</span>
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">Quick Learner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
