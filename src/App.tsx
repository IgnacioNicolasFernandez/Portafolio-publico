import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import ProjectsSection from './components/ProjectsSection';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { RevealOnScroll } from './components/RevealOnScroll'; 

function App() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen text-slate-900 dark:text-slate-200 selection:bg-primary-500 selection:text-white transition-colors duration-300">
      <Navbar />
      <main className="w-full">
        <Hero />
        
        <RevealOnScroll>
          <About />
        </RevealOnScroll>

        <RevealOnScroll>
          <Experience />
        </RevealOnScroll>

        <RevealOnScroll>
          <ProjectsSection />
        </RevealOnScroll>

        <RevealOnScroll>
          <Skills />
        </RevealOnScroll>

        <RevealOnScroll>
          <Contact />
        </RevealOnScroll>
      </main>
    </div>
  );
}

export default App;