
import { Github, ExternalLink, Layers } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Sistema de Gestión Web & Dashboard",
      description: "Plataforma integral para la optimización de inventarios con autenticación segura y métricas en tiempo real.",
      tech: ["React", "Node.js", "SQL", "Tailwind"],
      github: "#",
      demo: "#",
      image: "bg-gradient-to-br from-slate-700 to-slate-800" 
    },
    {
      title: "Próximo Proyecto Innovador",
      description: "Actualmente en desarrollo. Explorando nuevas arquitecturas y soluciones escalables con IA.",
      tech: ["Next.js", "TypeScript", "AI Integration"],
      github: "#",
      demo: "#",
      image: "bg-slate-800 border-2 border-dashed border-slate-700" 
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <Layers className="text-primary-400" /> Proyectos Destacados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-primary-500/50 transition-all hover:shadow-2xl hover:shadow-primary-500/10">
              <div className={`h-48 w-full ${project.image} flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
                <Layers className="text-slate-600 w-12 h-12" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-4 h-20 text-sm overflow-hidden">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-xs font-medium text-primary-300 bg-primary-900/20 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.github} className="flex-1 flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white py-2 rounded-lg transition-colors text-sm">
                    <Github size={16} /> Código
                  </a>
                  <a href={project.demo} className="flex-1 flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white py-2 rounded-lg transition-colors text-sm">
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;