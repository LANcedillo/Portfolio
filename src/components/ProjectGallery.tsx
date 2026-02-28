import { useState } from 'react';
import {projectsData} from '../data/projects';
import {ProjectCard} from './ProjectCard';

export const ProjectGallery = () => {
  // Estado para saber qué categoría mostrar
  const [filter, setFilter] = useState<'Todos' | 'Desarrollo' | 'Juego'>('Todos');

  // Filtrado lógico
  const filtered = projectsData.filter(p => 
    filter === 'Todos' ? true : p.category === filter
  );

  return (
    <section id="proyectos" className="max-w-7xl mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Mis Proyectos</h2>
        
        {/* Botones de Filtro */}
        <div className="inline-flex p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
          {(['Todos', 'Desarrollo', 'Juego'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                filter === cat 
                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-white shadow-sm' 
                : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de Proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

// export default ProjectGallery;