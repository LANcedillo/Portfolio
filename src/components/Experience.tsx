import { experienceData } from '../data/experience';

export const Experience = () => {
  return (
    <section id="sobre-mi" className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">Mi Experiencia</h2>
      <div className="space-y-8">
        {experienceData.map((item, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
            <div className="mb-1 text-sm font-semibold text-blue-600 dark:text-blue-400">
              {item.duration}
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.position}</h3>
            <div className="text-lg text-slate-500 dark:text-slate-400 mb-4">{item.company}</div>
            <ul className="text-slate-600 dark:text-slate-400 max-w-5xl space-y-2">
              {item.description.map((desc, i) => (
                // Agregar negritas y separadores para cada punto de la descripción
                <li key={i} className="list-disc pl-4 text-sm text-justify"><b>{desc}</b></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

// export default Experience;