import type { SkillGroup } from '../data/skills';
import { memo } from 'react';
import { SkillTile } from './SkillTile';
export const SkillCard = memo(({ group }: { group: SkillGroup }) => {
  return (
    <div className="group/card relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition-all hover:shadow-md">
      
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
        <span className={`w-1.5 h-6 rounded-full bg-linear-to-b ${group.groupColor}`}></span>
        {group.category}
      </h3>

      <div  className="space-y-7">
        {group.skills.map((skill) => (
            <SkillTile key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
});