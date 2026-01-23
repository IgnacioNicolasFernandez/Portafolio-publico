import { Cpu } from 'lucide-react';

const Skills = () => {
  const skills = {
    Frontend: ["React", "Tailwind CSS", "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
    Backend: ["Node.js", "Express", "SQL", "C# / .NET Concepts"],
    Herramientas: ["Git & GitHub", "Vercel", "Scrum", "Jira", "VS Code"]
  };

  return (
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center py-20 px-4 w-full relative transition-colors duration-300">
      <div className="w-full max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-16 flex items-center justify-center gap-3">
          <Cpu className="text-primary-500 dark:text-primary-400" /> Tecnologías
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white dark:bg-slate-800/30 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors shadow-sm dark:shadow-none">
              <h3 className="text-primary-600 dark:text-primary-400 font-bold mb-4 text-lg">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span key={skill} className="text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-full text-sm border border-slate-200 dark:border-slate-800 shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;