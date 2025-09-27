import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import TechStack from '../src/components/TechStack';
import Projects from '../src/components/Projects';
import Experience from '../src/components/Experience';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
