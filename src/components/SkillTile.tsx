import type { Skill } from '../data/skills';

export const SkillTile = ({ skill }: { skill: Skill }) => {
  return (
    <div className="group/title flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:border-blue-500/50 hover:shadow-lg hover:-translate-y-1">
      
      {/* SVG del Icono */}
      <div className="w-12 h-12 flex items-center justify-center p-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
        <img 
          src={skill.iconPath} 
          alt={`${skill.name} icon`} 
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex-1 space-y-2">
        <div className="flex justify-between items-center">
          <h4 className="font-bold text-slate-800 dark:text-white group-hover/title:text-blue-500 transition-colors">
            {skill.name}
          </h4>
          {/* Número porcentual (Animado en Hover) */}
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 opacity-0 group-hover/title:opacity-100 transition-opacity duration-300">
            {skill.percentage}%
          </span>
        </div>

        {/* Contenedor de la barra */}
        <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          {/* Barra de progreso con animación suave */}
          <div 
            className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover/title:bg-lime-50`}
            style={{ width: `${skill.percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

