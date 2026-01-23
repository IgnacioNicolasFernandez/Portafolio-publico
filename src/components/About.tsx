import { GraduationCap, BookOpen, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <User className="text-primary-400" /> Sobre Mí
        </h2>
        
        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            Soy un desarrollador apasionado por el ciclo completo de desarrollo de software (End-to-End). 
            Recientemente graduado como <strong className="text-primary-400">Técnico Superior en Programación por Teclab</strong>, 
            combino mi formación técnica con habilidades de liderazgo y enseñanza.
          </p>
          <p className="text-slate-300 text-lg leading-relaxed">
            No solo escribo código; también me apasiona compartir conocimiento, como lo demuestro en mi rol actual 
            como Instructor de Impresión 3D, y disfruto trabajando en entornos ágiles donde la colaboración es clave.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg">
              <GraduationCap className="text-primary-400 w-8 h-8 mt-1" />
              <div>
                <h3 className="text-white font-semibold">Formación Técnica</h3>
                <p className="text-slate-400 text-sm">Graduado en Teclab con enfoque práctico en tecnologías modernas.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg">
              <BookOpen className="text-primary-400 w-8 h-8 mt-1" />
              <div>
                <h3 className="text-white font-semibold">Mentoría & Docencia</h3>
                <p className="text-slate-400 text-sm">Experiencia capacitando equipos y alumnos en tecnología.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;