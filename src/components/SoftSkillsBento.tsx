import { softSkillsData } from '../data/softSkills';

export const SoftSkillsBento = () => {
  return (
    <section id="soft-skills" className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-200 dark:border-slate-800">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">
          Habilidades Interpersonales (Soft Skills)
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Competencias clave que facilitan la colaboración, la resolución de conflictos y la entrega de software de alta calidad en entornos de ingeniería.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {softSkillsData.map((skill) => (
          <div 
            key={skill.id}
            className={`group p-8 rounded-3xl bg-white dark:bg-slate-900 border-2 ${skill.color} shadow-sm transition-all hover:shadow-xl hover:-translate-y-1`}
          >
            <div className="flex items-center gap-4 mb-5">
              <span className="text-4xl">{skill.icon}</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {skill.name}
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};