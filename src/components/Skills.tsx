import React from 'react';
import { Cpu } from 'lucide-react';

const Skills = () => {
  const skills = {
    Frontend: ["React", "Tailwind CSS", "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
    Backend: ["Node.js", "Express", "SQL", "C# / .NET Concepts"],
    Herramientas: ["Git & GitHub", "Vercel", "Scrum", "Jira", "VS Code"]
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <Cpu className="text-primary-400" /> Tecnologías
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-slate-800/30 p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors">
              <h3 className="text-primary-400 font-bold mb-4 text-lg">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span key={skill} className="text-slate-300 bg-slate-900 px-3 py-1 rounded-full text-sm border border-slate-800 shadow-sm">
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