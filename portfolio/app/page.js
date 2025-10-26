import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import TechStack from '../src/components/TechStack';
import Projects from '../src/components/Projects';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
