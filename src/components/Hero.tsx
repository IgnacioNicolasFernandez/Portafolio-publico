import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex items-center transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold tracking-wider uppercase">Hola, soy</span>
          <h1 className="text-5xl sm:text-7xl font-bold text-slate-900 dark:text-white mt-4 mb-6 leading-tight">
            Ignacio Nicolás <br />
            <span className="bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-600 text-transparent bg-clip-text">
              Fernández
            </span>
          </h1>
          <h2 className="text-2xl text-slate-600 dark:text-slate-400 mb-6">
            Desarrollador Full Stack | Técnico Superior
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-lg leading-relaxed">
            Transformando lógica compleja en experiencias web fluidas. Especializado en React, Node.js y Metodologías Ágiles.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-all shadow-lg shadow-primary-500/20">
              Ver Proyectos <ArrowRight size={20} />
            </a>
            <a href="/Ignacio Nicolás Fernandez.pdf" download className="border border-slate-300 dark:border-slate-600 hover:border-slate-400 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-all">
              Descargar CV <Download size={20} />
            </a>
          </div>
        </motion.div>

        {/* Decoración Visual de Código */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative hidden lg:block"
        >
           <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-purple-500/20 rounded-full blur-3xl" />
           <div className="relative bg-white dark:bg-slate-800/50 p-2 rounded-2xl border border-slate-200 dark:border-slate-700/50 backdrop-blur-sm shadow-xl dark:shadow-none transition-colors duration-300">
             <div className="bg-slate-900 rounded-xl p-6 font-mono text-sm text-slate-300 shadow-2xl">
               <div className="flex gap-2 mb-4">
                 <div className="w-3 h-3 rounded-full bg-red-500" />
                 <div className="w-3 h-3 rounded-full bg-yellow-500" />
                 <div className="w-3 h-3 rounded-full bg-green-500" />
               </div>
               <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = <span className="text-yellow-400">{`{`}</span></p>
               <p className="pl-4">name: <span className="text-green-400">"Ignacio N. Fernández"</span>,</p>
               <p className="pl-4">role: <span className="text-green-400">"Full Stack Developer"</span>,</p>
               <p className="pl-4">skills: [<span className="text-green-400">"React"</span>, <span className="text-green-400">"Node"</span>, <span className="text-green-400">"Scrum"</span>],</p>
               <p className="pl-4">passionate: <span className="text-orange-400">true</span></p>
               <p><span className="text-yellow-400">{`}`}</span>;</p>
             </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;