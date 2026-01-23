import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-[100dvh] w-full flex items-center justify-center pt-20 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold tracking-wider uppercase text-sm lg:text-base">Hola, soy</span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white mt-2 lg:mt-4 mb-4 lg:mb-6 leading-tight">
            Ignacio Nicolás <br />
            <span className="bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-600 text-transparent bg-clip-text">
              Fernández
            </span>
          </h1>
          <h2 className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-6 font-medium">
            Desarrollador Full Stack | Técnico Superior
          </h2>
          <p className="text-base lg:text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-lg leading-relaxed">
            Transformando lógica compleja en experiencias web fluidas. Especializado en React, Node.js y Metodologías Ágiles.
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a href="#projects" className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white px-6 py-3 lg:px-8 lg:py-3 rounded-lg font-medium flex items-center gap-2 transition-all shadow-lg shadow-primary-500/20 text-sm lg:text-base">
              Ver Proyectos <ArrowRight size={18} />
            </a>
            <a href="/Ignacio Nicolás Fernandez.pdf" download className="border border-slate-300 dark:border-slate-600 hover:border-slate-400 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-6 py-3 lg:px-8 lg:py-3 rounded-lg font-medium flex items-center gap-2 transition-all text-sm lg:text-base">
              Descargar CV <Download size={18} />
            </a>
          </div>
        </motion.div>

        {/* Decoración Visual de Código */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 lg:order-2 w-full max-w-md mx-auto"
        >
           <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-purple-500/20 rounded-full blur-3xl" />
             <div className="relative bg-white dark:bg-slate-800/50 p-2 rounded-2xl border border-slate-200 dark:border-slate-700/50 backdrop-blur-sm shadow-xl dark:shadow-none transition-colors duration-300">
               <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 lg:p-6 font-mono text-xs sm:text-sm text-slate-600 dark:text-slate-300 shadow-inner">
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;