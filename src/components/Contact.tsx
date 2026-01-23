import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 w-full relative bg-slate-50 dark:bg-slate-850 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">¿Trabajamos juntos?</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
          Estoy disponible para nuevas oportunidades. Si buscas un desarrollador comprometido con la calidad, manejo de buenas practicas en codigo, presentaciones de avances y trabajo en equipo, hablemos.
        </p>
        
        <div className="flex justify-center gap-6 mb-12">
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=inf26012004@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-lg font-medium"
          >
            <Mail /> inf26012004@gmail.com
          </a>
        </div>

        <div className="flex justify-center gap-4">
          <a href="https://www.linkedin.com/in/ignacio-nicol%C3%A1s-fernandez/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300 hover:text-white hover:bg-primary-600 dark:hover:bg-primary-600 transition-all hover:-translate-y-1 shadow-lg border border-slate-200 dark:border-transparent">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/IgnacioNicolasFernandez" target="_blank" rel="noopener noreferrer" className="p-4 bg-white dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300 hover:text-white hover:bg-primary-600 dark:hover:bg-primary-600 transition-all hover:-translate-y-1 shadow-lg border border-slate-200 dark:border-transparent">
            <Github size={24} />
          </a>
        </div>
      </div>
      
      <footer className="mt-24 text-center text-slate-500 dark:text-slate-600 text-sm border-t border-slate-200 dark:border-slate-800 pt-8">
        <p>© {new Date().getFullYear()} Ignacio Nicolás Fernández. Creado con React & Tailwind.</p>
      </footer>
    </section>
  );
};

export default Contact;