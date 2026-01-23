import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-850">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">¿Trabajamos juntos?</h2>
        <p className="text-slate-400 mb-8 text-lg">
          Estoy disponible para nuevas oportunidades. Si buscas un desarrollador comprometido con la calidad y el trabajo en equipo, hablemos.
        </p>
        
        <div className="flex justify-center gap-6 mb-12">
          <a href="mailto:inf26012004@gmail.com" className="flex items-center gap-2 text-white hover:text-primary-400 transition-colors text-lg font-medium">
            <Mail /> inf26012004@gmail.com
          </a>
        </div>

        <div className="flex justify-center gap-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-800 rounded-full text-slate-300 hover:text-white hover:bg-primary-600 transition-all hover:-translate-y-1 shadow-lg">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-800 rounded-full text-slate-300 hover:text-white hover:bg-primary-600 transition-all hover:-translate-y-1 shadow-lg">
            <Github size={24} />
          </a>
        </div>
      </div>
      
      <footer className="mt-24 text-center text-slate-600 text-sm border-t border-slate-800 pt-8">
        <p>© {new Date().getFullYear()} Ignacio Nicolás Fernández. Creado con React & Tailwind.</p>
      </footer>
    </section>
  );
};

export default Contact;