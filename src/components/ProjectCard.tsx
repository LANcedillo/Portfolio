import type { Project } from '../data/projects';

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <div className="group overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all">
      <div className="aspect-video bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-4xl group-hover:scale-105 transition-transform">
        {project.category === 'Juego' ? '🎮' : '💻'}
      </div>
      <div className="p-5">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          {project.category}
        </span>
        <h3 className="text-xl font-bold mt-1 text-slate-900 dark:text-white">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">
          {project.description}
        </p>
                <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map(t => (
            <span key={t} className="px-2 py-1 text-[10px] rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};


