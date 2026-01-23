import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import ProjectsSection from './components/ProjectsSection';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { RevealOnScroll } from './components/RevealOnScroll'; // Importar aquí

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 selection:bg-primary-500 selection:text-white">
      <Navbar />
      <main>
        <Hero /> {/* El Hero ya tiene su propia animación, no lo envolvemos */}
        
        <RevealOnScroll width="100%">
          <About />
        </RevealOnScroll>

        <RevealOnScroll width="100%">
          <Experience />
        </RevealOnScroll>

        <RevealOnScroll width="100%">
          <ProjectsSection />
        </RevealOnScroll>

        <RevealOnScroll width="100%">
          <Skills />
        </RevealOnScroll>

        <RevealOnScroll width="100%">
          <Contact />
        </RevealOnScroll>
      </main>
    </div>
  );
}

export default App;