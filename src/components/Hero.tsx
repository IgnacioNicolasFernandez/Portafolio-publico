
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-[100dvh] w-full flex items-center justify-center pt-32 pb-20 md:pt-20 md:pb-10 px-6 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="text-primary-600 dark:text-primary-400 font-semibold tracking-wider uppercase text-lg md:text-base">Hola, soy</span>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mt-4 mb-8 leading-tight">
            Ignacio Nicolás <br />
            <span className="bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-600 text-transparent bg-clip-text">
              Fernández
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-400 mb-8 font-medium">
            Desarrollador Full Stack | Técnico Superior
          </h2>
          <p className="text-xl md:text-lg text-slate-700 dark:text-slate-300 mb-10 max-w-lg leading-relaxed">
            Transformando lógica compleja en experiencias web fluidas. Especializado en React, Node.js y Metodologías Ágiles.
          </p>
          
          <div className="w-full flex flex-col sm:flex-row justify-center lg:justify-start gap-4 md:gap-6 mt-8">
            <a href="#projects" className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white px-8 py-5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary-500/20 text-xl md:text-lg">
              Ver Proyectos <ArrowRight size={22} />
            </a>
            <a href="/Ignacio Nicolás Fernandez.pdf" download className="w-full sm:w-auto border-2 border-slate-300 dark:border-slate-600 hover:border-slate-400 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-8 py-5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all text-xl md:text-lg">
              Descargar CV <Download size={22} />
            </a>
          </div>
        </div>

        {/* Decoración Visual de Código */}
        <div className="order-1 lg:order-2 w-full max-w-md mx-auto">
           <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-purple-500/20 rounded-full blur-3xl" />
            <div className="relative bg-white dark:bg-slate-800/50 p-3 sm:p-2 rounded-3xl border border-slate-200 dark:border-slate-700/50 backdrop-blur-sm shadow-xl dark:shadow-none transition-colors duration-300">
             <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 lg:p-6 font-mono text-sm sm:text-sm text-slate-600 dark:text-slate-300 shadow-inner overflow-x-auto">
                 <div className="flex gap-2 mb-4">
                   <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-red-500" />
                   <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-yellow-500" />
                   <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-green-500" />
                 </div>
                 <p><span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-blue-600 dark:text-blue-400">developer</span> = <span className="text-yellow-600 dark:text-yellow-400">{`{`}</span></p>
                 <p className="pl-4">name: <span className="text-green-600 dark:text-green-400">"Ignacio N. Fernández"</span>,</p>
                 <p className="pl-4">role: <span className="text-green-600 dark:text-green-400">"Full Stack Developer"</span>,</p>
                 <p className="pl-4">skills: [<span className="text-green-600 dark:text-green-400">"React"</span>, <span className="text-green-600 dark:text-green-400">"Node"</span>],</p>
                 <p className="pl-4">passionate: <span className="text-orange-500 dark:text-orange-400">true</span></p>
                 <p><span className="text-yellow-600 dark:text-yellow-400">{`}`}</span>;</p>
               </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;