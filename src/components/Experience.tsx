import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Instructor de Impresión 3D",
      company: "PlanificarSEH / UTN",
      period: "Actualidad",
      description: "Digitalización de contenidos en Moodle y capacitación técnica especializada.",
      tags: ["Moodle", "Docencia", "Tecnología"]
    },
    {
      title: "Desarrollador Full Stack",
      company: "Social Learning",
      period: "Ago 2025 - Dic 2025",
      description: "Liderazgo técnico y onboarding de pasantes bajo metodología Scrum. Desarrollo de plataforma centralizada.",
      tags: ["React", "Node.js", "Scrum", "Liderazgo"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <Briefcase className="text-primary-400" /> Experiencia
        </h2>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Briefcase size={16} className="text-primary-400" />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-primary-500/30 transition-all shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-white text-lg">{exp.title}</h3>
                  <span className="text-xs font-medium px-2 py-1 rounded bg-primary-900/30 text-primary-400 border border-primary-500/20">
                    {exp.company}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                  <Calendar size={14} />
                  {exp.period}
                </div>
                <p className="text-slate-300 text-sm mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(tag => (
                    <span key={tag} className="text-xs text-slate-400 bg-slate-900 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;