import { GraduationCap, BookOpen, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center py-32 md:py-20 px-6 w-full relative bg-white dark:bg-slate-850 transition-colors duration-300">
      <div className="w-full max-w-6xl text-center">
        <h2 className="text-5xl md:text-3xl font-bold text-slate-900 dark:text-white mb-20 md:mb-12 flex items-center justify-center gap-3">
          <User className="w-10 h-10 md:w-6 md:h-6 text-primary-500 dark:text-primary-400" /> Sobre Mí
        </h2>
        
        <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl transition-colors duration-300">
          <p className="text-slate-700 dark:text-slate-300 text-xl md:text-lg leading-relaxed mb-6">
            Soy un desarrollador apasionado por el ciclo completo de desarrollo de software (End-to-End). 
            Recientemente graduado como <strong className="text-primary-600 dark:text-primary-400">Técnico Superior en Programación por Teclab</strong>, 
            combino mi formación técnica con habilidades de liderazgo y enseñanza.
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-xl md:text-lg leading-relaxed">
            No solo escribo código; también me apasiona compartir conocimiento, como lo demuestro en mi rol actual 
            como Profesor de Impresión 3D, y disfruto trabajando en entornos ágiles donde la colaboración es clave.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 p-6 bg-white dark:bg-slate-800/50 rounded-lg shadow-sm dark:shadow-none border border-slate-100 dark:border-transparent transition-colors duration-300">
              <GraduationCap className="text-primary-500 dark:text-primary-400 w-12 h-12 md:w-8 md:h-8" />
              <div>
                <h3 className="text-slate-900 dark:text-white font-bold text-xl md:text-lg mb-2">Formación Técnica</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg md:text-sm">Graduado en Teclab con enfoque práctico en tecnologías modernas.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 p-6 bg-white dark:bg-slate-800/50 rounded-lg shadow-sm dark:shadow-none border border-slate-100 dark:border-transparent transition-colors duration-300">
              <BookOpen className="text-primary-500 dark:text-primary-400 w-12 h-12 md:w-8 md:h-8" />
              <div>
                <h3 className="text-slate-900 dark:text-white font-bold text-xl md:text-lg mb-2">Mentoría & Docencia</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg md:text-sm">Experiencia capacitando equipos y alumnos en tecnología.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;