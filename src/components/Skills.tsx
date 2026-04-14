import { Cpu } from 'lucide-react';

const Skills = () => {
  const skills = {
    Frontend: ["React", "Framer Motion", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "TypeScript", "Next.js", "Vite", "Vue.js"],
    Backend: ["Node.js", "Express", "Java", "Spring Boot", "SQL", "MySQL", "C# / .NET Concepts"],
    Herramientas: ["Git & GitHub", "SourceTree", "Vercel", "Scrum", "Jira", "VS Code", "Figma", "Canva"]
  };

  return (
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center py-32 md:py-20 px-6 w-full relative transition-colors duration-300">
      <div className="w-full max-w-6xl text-center">
        <h2 className="text-5xl md:text-3xl font-bold text-slate-900 dark:text-white mb-20 md:mb-16 flex items-center justify-center gap-3">
          <Cpu className="w-10 h-10 md:w-6 md:h-6 text-primary-500 dark:text-primary-400" /> Tecnologías
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white dark:bg-slate-800/30 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors shadow-sm dark:shadow-none">
              <h3 className="text-primary-600 dark:text-primary-400 font-bold mb-6 text-2xl md:text-lg">{category}</h3>
              <div className="flex flex-wrap gap-4 md:gap-2">
                {items.map(skill => (
                  <span key={skill} className="text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 px-5 py-2 md:px-3 md:py-1 rounded-full text-lg md:text-sm border border-slate-200 dark:border-slate-800 shadow-sm">
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
