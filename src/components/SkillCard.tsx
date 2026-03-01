import type { SkillGroup } from '../data/skills';

export const SkillCard = ({ group }: { group: SkillGroup }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition-all hover:shadow-md">
      
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
        <span className={`w-1.5 h-6 rounded-full bg-linear-to-b ${group.groupColor}`}></span>
        {group.category}
      </h3>

      <div  className="space-y-7">
        {group.skills.map((skill) => (
          <div  key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2 font-semibold text-slate-700 dark:text-slate-300">
                <span>{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
              <span className="text-xs font-mono text-slate-500">{skill.percentage}%</span>
            </div>
            
            {/* Contenedor de la barra */}
            <div title={`${skill.name} al ${skill.percentage}%`}  
            className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              {/* Barra de progreso con animación */}
              <div  
                className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                style={{ width: `${skill.percentage}%` }}
              ></div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};