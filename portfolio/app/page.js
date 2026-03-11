import Sidebar from '../src/components/Sidebar';
import About from '../src/components/About';
import Experience from '../src/components/Experience';
import TechStack from '../src/components/TechStack';
import Projects from '../src/components/Projects';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';

export default function Portfolio() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 min-h-screen text-zinc-900 dark:text-zinc-50 relative selection:bg-teal-300/30 selection:text-teal-900 dark:selection:bg-teal-300/30 dark:selection:text-teal-100 transition-colors duration-500">
      
      {/* Dark Mode Background Spotlights - Toned down for minimalist look */}
      <div className="pointer-events-none fixed inset-0 z-[-1] hidden dark:block">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-blue-900/5 rounded-full blur-[120px] mix-blend-screen overflow-hidden"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vh] bg-teal-900/5 rounded-full blur-[120px] mix-blend-screen overflow-hidden"></div>
      </div>

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Sidebar />
          <main id="content" className="pt-24 lg:w-[52%] lg:py-24 space-y-24 sm:space-y-32">
            <About />
            <Experience />
            <Projects />
            <TechStack />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
