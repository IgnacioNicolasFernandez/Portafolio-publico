import { useState } from 'react';
import { ExternalLink, Github, Layers, CheckCircle2, X } from 'lucide-react';

// Definimos la estructura del tipo de proyecto para TypeScript
interface Project {
  title: string;
  category: string;
  description: string;
  features: string[];
  tech: string[];
  github?: string | null;
  liveUrl?: string;
  isPremium: boolean;
  image?: string;
  imagePlaceholder: string;
}

const ProjectsSection = () => {
  // Estado para controlar qué proyecto se está viendo en el modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const productionProjects: Project[] = [
    {
      title: "Planificar Sostenible | Consultoría en Triple Impacto",
      category: "Producción",
      description: "Plataforma corporativa y e-learning. Arquitectura atómica con catálogo dinámico gestionado vía JSON. Incluye tarjetas 3D (Flip Cards) con Framer Motion, sistema condicional de disponibilidad de cursos e inscripciones, enrutamiento semántico y optimización SEO avanzada.",
      features: [
        "Catálogo dinámico gestionado vía JSON",
        "Tarjetas 3D con animaciones de Framer Motion",
        "Disponibilidad condicional de cursos e inscripciones",
        "Arquitectura SEO avanzada y enrutamiento semántico"
      ],
      tech: ["React", "Framer Motion", "Tailwind CSS", "Vercel"],
      liveUrl: "https://planificarsostenible.com",
      github: null,
      isPremium: true,
      image: "/planificar.png",
      imagePlaceholder: "bg-slate-900"
    },
    {
      title: "Portafolio IT Brutalista | Walter Aguirre",
      category: "Producción",
      description: "Diseño y desarrollo de portafolio para un perfil Senior en Infraestructura. Interfaz 'Brutalista' tipo terminal/consola (Data Log) con paleta Emerald & Zinc, rompiendo el estándar web tradicional.",
      features: [
        "Interfaz brutalista inspirada en consola",
        "Paleta Emerald y Zinc para identidad distintiva",
        "Estructura de componentes en React + TypeScript",
        "Diseño adaptado a desktop y mobile"
      ],
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      liveUrl: "https://portafolio-walter.vercel.app",
      github: null,
      isPremium: false,
      image: "/walter.png",
      imagePlaceholder: "bg-slate-950"
    },
    {
      title: "Portafolio Web Moderno | Hernán",
      category: "Producción",
      description: "Desarrollo de portafolio profesional enfocado en clean code, estructura de componentes escalable y presentación ágil de proyectos mediante UI moderna.",
      features: [
        "Estructura escalable orientada a clean code",
        "Presentación moderna y clara de experiencia",
        "Componentes reutilizables por secciones",
        "Navegación simple y alto rendimiento"
      ],
      tech: ["React", "JavaScript", "Vite", "CSS"],
      liveUrl: "https://portafolio-hernan.vercel.app/",
      github: null,
      isPremium: false,
      image: "/hernan.png",
      imagePlaceholder: "bg-slate-800"
    }
  ];

  const internshipProjects: Project[] = [
    {
      title: "Portal Wiki",
      category: "Pasantías",
      description: "Sistema de gestión de conocimiento centralizado para organizar documentación técnica, con navegación jerárquica, control de roles y acceso seguro.",
      features: [
        "Login y validación de usuarios",
        "Gestión de roles (Admin, Editor, Lector)",
        "CRUD completo de documentos",
        "Soporte para PDF, texto plano y URLs"
      ],
      tech: ["Java", "Spring Boot", "Vue.js", "SQL"],
      github: "https://github.com/agus25varela/RepoFullStackPortalWiki",
      isPremium: false,
      image: "/portal-wiki.png",
      imagePlaceholder: "bg-indigo-900"
    },
    {
      title: "Cartelera de Cine",
      category: "Pasantías",
      description: "Catálogo interactivo de películas y animes con búsqueda instantánea y filtros por género y puntuación, orientado a una experiencia clara y dinámica.",
      features: [
        "Búsqueda instantánea de títulos",
        "Filtros por género y puntaje",
        "Interfaz intuitiva y amigable",
        "Gestión y actualización de contenido"
      ],
      tech: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/agus25varela/CatalogoCine",
      isPremium: false,
      image: "/cartelera.png",
      imagePlaceholder: "bg-rose-900"
    },
    {
      title: "TicTacTareas",
      category: "Pasantías",
      description: "Aplicación de productividad para administración de tareas, recordatorios y seguimiento por estados, pensada para mejorar organización personal.",
      features: [
        "Búsqueda inteligente de tareas",
        "Recordatorios y notificaciones",
        "Estados de tarea (Pendiente, En curso, Finalizada)",
        "Perfiles de usuario personalizados"
      ],
      tech: ["Java", "Spring Boot", "MySQL"],
      github: "https://github.com/ErichSchnell/TicTacTareas",
      isPremium: false,
      image: "/tictactareas.jpg",
      imagePlaceholder: "bg-emerald-900"
    }
  ];

  const getTechColor = (tech: string) => {
    switch (tech) {
      case 'React': return 'bg-cyan-500 text-slate-900';
      case 'Framer Motion': return 'bg-fuchsia-600 text-white';
      case 'Tailwind CSS': return 'bg-sky-500 text-white';
      case 'Vercel': return 'bg-black text-white';
      case 'TypeScript': return 'bg-blue-700 text-white';
      case 'Vite': return 'bg-violet-600 text-white';
      case 'JavaScript': return 'bg-yellow-400 text-slate-900';
      case 'CSS': return 'bg-blue-500 text-white';
      case 'Java': return 'bg-red-600 text-white';
      case 'Spring Boot': return 'bg-green-600 text-white';
      case 'Vue.js': return 'bg-emerald-500 text-slate-900';
      case 'SQL': return 'bg-blue-600 text-white';
      case 'MySQL': return 'bg-blue-600 text-white';
      case 'HTML': return 'bg-orange-600 text-white';
      default: return 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300';
    }
  };

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center py-20 px-4 w-full relative bg-slate-50 dark:bg-slate-850 transition-colors duration-300">
      <div className="w-full max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-5 flex items-center justify-center gap-3">
          <Layers className="text-primary-500 dark:text-primary-400" /> Proyectos Destacados
        </h2>

        <h3 className="text-left text-sm md:text-base font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-4">
          En Producción
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {productionProjects.map((project, index) => (
            <div
              key={`prod-${index}`}
              className={`group relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden border transition-all flex flex-col ${
                project.isPremium
                  ? 'border-emerald-400/70 ring-2 ring-yellow-500/70 shadow-[0_0_35px_rgba(234,179,8,0.25)] dark:shadow-[0_0_35px_rgba(16,185,129,0.3)]'
                  : 'border-slate-200 dark:border-slate-800 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/10'
              }`}
            >
              {project.isPremium && (
                <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-slate-950/90 border border-yellow-500/60 text-yellow-300 text-[10px] font-bold tracking-wider uppercase shadow-lg">
                  ⭐ Proyecto destacado
                </div>
              )}
              
              {/* Imagen del Proyecto */}
              <div className="h-48 w-full overflow-hidden relative border-b border-slate-200 dark:border-slate-800 cursor-pointer" onClick={() => setSelectedProject(project)}>
                {project.image ? (
                  <>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`hidden absolute inset-0 w-full h-full flex items-center justify-center ${project.imagePlaceholder} group-hover:scale-105 transition-transform duration-500`}>
                      <Layers className="text-slate-400 dark:text-white/50 w-12 h-12" />
                    </div>
                  </>
                ) : (
                  <div className={`absolute inset-0 w-full h-full flex items-center justify-center ${project.imagePlaceholder} group-hover:scale-105 transition-transform duration-500`}>
                    <Layers className="text-slate-400 dark:text-white/50 w-12 h-12" />
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-primary-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-lg">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map(tech => (
                          <span key={tech} className={`text-[10px] font-bold px-2 py-1 rounded shadow-sm ${getTechColor(tech)}`}>
                          {tech}
                          </span>
                      ))}
                    </div>

                    <div className="flex flex-col gap-3">
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="w-full flex items-center justify-center gap-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white py-2 rounded-lg transition-colors text-sm font-medium"
                      >
                        Ver más
                      </button>

                      {(project.liveUrl || project.github) && (
                        <div className="grid grid-cols-2 gap-3">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white py-2 rounded-lg transition-colors text-sm font-medium ${project.github ? '' : 'col-span-2'}`}
                            >
                              <ExternalLink size={16} /> Ver web
                            </a>
                          )}

                          {!!project.github && (
                            <a 
                              href={project.github} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className={`flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white py-2 rounded-lg transition-colors text-sm font-medium border border-slate-200 dark:border-slate-700 ${project.liveUrl ? '' : 'col-span-2'}`}
                            >
                              <Github size={16} /> Código
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-left text-sm md:text-base font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-4">
          Proyectos de Pasantías
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internshipProjects.map((project, index) => (
            <div
              key={`intern-${index}`}
              className="group relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden border transition-all flex flex-col border-slate-200 dark:border-slate-800 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/10"
            >
              <div className="h-48 w-full overflow-hidden relative border-b border-slate-200 dark:border-slate-800 cursor-pointer" onClick={() => setSelectedProject(project)}>
                {project.image ? (
                  <>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`hidden absolute inset-0 w-full h-full flex items-center justify-center ${project.imagePlaceholder} group-hover:scale-105 transition-transform duration-500`}>
                      <Layers className="text-slate-400 dark:text-white/50 w-12 h-12" />
                    </div>
                  </>
                ) : (
                  <div className={`absolute inset-0 w-full h-full flex items-center justify-center ${project.imagePlaceholder} group-hover:scale-105 transition-transform duration-500`}>
                    <Layers className="text-slate-400 dark:text-white/50 w-12 h-12" />
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-slate-700 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-lg">
                  {project.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(tech => (
                      <span key={tech} className={`text-[10px] font-bold px-2 py-1 rounded shadow-sm ${getTechColor(tech)}`}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="w-full flex items-center justify-center gap-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white py-2 rounded-lg transition-colors text-sm font-medium"
                    >
                      Ver más
                    </button>

                    {(project.liveUrl || project.github) && (
                      <div className="grid grid-cols-2 gap-3">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white py-2 rounded-lg transition-colors text-sm font-medium ${project.github ? '' : 'col-span-2'}`}
                          >
                            <ExternalLink size={16} /> Ver web
                          </a>
                        )}

                        {!!project.github && (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={`flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white py-2 rounded-lg transition-colors text-sm font-medium border border-slate-200 dark:border-slate-700 ${project.liveUrl ? '' : 'col-span-2'}`}
                          >
                            <Github size={16} /> Código
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL (Ventana Emergente) --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          {/* Fondo oscuro backdrop */}
          <div 
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          ></div>

          {/* Contenido del Modal */}
          <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-300">
            
            {/* Botón cerrar */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-red-500/20 hover:text-red-400 transition-all z-10"
            >
              <X size={20} />
            </button>

            {/* Imagen Grande */}
            <div className="h-64 w-full relative">
               {selectedProject.image ? (
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
               ) : (
                  <div className={`w-full h-full ${selectedProject.imagePlaceholder}`}></div>
               )}
               <div className="absolute bottom-0 inset-x-0 from-white dark:from-slate-900 to-transparent h-24"></div>
            </div>

            <div className="p-8 -mt-6 relative">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{selectedProject.title}</h3>
              <span className="text-primary-600 dark:text-primary-400 text-sm font-semibold tracking-wider uppercase mb-6 block">
                {selectedProject.category}
              </span>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {selectedProject.features.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-slate-900 dark:text-white font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-primary-500" /> Funcionalidades clave:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="text-slate-600 dark:text-slate-400 text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tech.map(tech => (
                   <span key={tech} className={`text-xs font-bold px-3 py-1 rounded-full ${getTechColor(tech)}`}>
                      {tech}
                   </span>
                ))}
              </div>

              <div className="flex gap-4 border-t border-slate-200 dark:border-slate-800 pt-6">
                 {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 bg-primary-600 hover:bg-primary-500 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors ${selectedProject.github ? '' : 'basis-full'}`}
                  >
                    <ExternalLink size={20} /> Ver web
                  </a>
                 )}
                 {!!selectedProject.github && (
                  <a 
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors border border-slate-200 dark:border-slate-700"
                   >
                      <Github size={20} /> Ver Código en GitHub
                   </a>
                 )}
                 <button 
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg font-medium transition-colors"
                 >
                    Cerrar
                 </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
