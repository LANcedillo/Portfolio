import type { Project } from '../data/projects';
import { useNavigate } from 'react-router-dom';

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
  // Si el link empieza con '/', es una ruta interna de nuestra App
  if (project.link.startsWith('/')) {
    navigate(project.link);
  } else {
    // Si es una URL completa, abrimos en una pestaña nueva
    window.open(project.link, '_blank', 'noopener,noreferrer');
  }
  };
  return (
    <div onClick={handleNavigation} className="group overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all">
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
        <p className="text-sm text-slate-500 mt-2">
            {project.link.startsWith('/') ? '🎮 Jugar ahora' : '🔗 Ver repositorio'}
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




// import { useNavigate } from 'react-router-dom';
// import type { Project } from '../data/projects';

// export const ProjectCard = ({ project }: { project: Project }) => {
//   const navigate = useNavigate();

//   const handleNavigation = () => {
//     // Si el link empieza con '/', es una ruta interna de nuestra App
//     if (project.link.startsWith('/')) {
//       navigate(project.link);
//     } else {
//       // Si es una URL completa, abrimos en una pestaña nueva
//       window.open(project.link, '_blank', 'noopener,noreferrer');
//     }
//   };

//   return (
//     <div 
//       onClick={handleNavigation}
//       className="group cursor-pointer overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-all hover:border-blue-500"
//     >
//       {/* ... resto del contenido de tu tarjeta ... */}
//       <div className="p-5">
//         <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
//           {project.title}
//         </h3>
//         <p className="text-sm text-slate-500 mt-2">
//           {project.link.startsWith('/') ? '🎮 Jugar ahora' : '🔗 Ver repositorio'}
//         </p>
//       </div>
//     </div>
//   );
// };