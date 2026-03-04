import { skillsGroups } from '../data/skills';
import { SkillCard } from './SkillCard';

export const SkillsSection = () => {
  return (
    <section id="habilidades" className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">
          Habilidades Técnicas
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          Mi stack tecnológico enfocado en la creación de aplicaciones robustas, escalables y con gran experiencia de usuario.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsGroups.map((group) => (
          <SkillCard key={group.category} group={group} />
        ))}
      </div>
    </section>
  );
};
