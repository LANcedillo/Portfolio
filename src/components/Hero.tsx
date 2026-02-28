import profileImage from '../assets/Portafolio.jpeg'
// src/components/Hero.tsx
export const Hero = () => {
  return (
    <section id="inicio" className="pt-32 pb-16 md:pt-48 md:pb-32 px-4">
      <div className="max-w-7xl mx-auto text-center md:text-left grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6">
            Hola, soy <span className="text-blue-600">Luis Angel</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg text-justify">
            Ingeniero de Software con más de 4 años de experiencia diseñando soluciones de Backend y Cloud Data Engineering enfocadas
en el ecosistemas cloud e hibridos. Con experiencia en arquitecturas de datos escalables, Big Data con PySpark y escala ademas de automatización de procesos ETL dinámicos. Me gusta optimizar la gobernanza de datos mediante sistemas basados en configuración y trabajo colaborativo de equipos técnicos bajo estándares.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-500/30">
              Ver Proyectos
            </button>
            <button className="px-6 py-3  text-white bg-black border border-slate-300 dark:border-slate-700 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition">
              Contacto
            </button>
          </div>
        </div>
        <div className="hidden md:block relative">
          {/* Aquí puedes poner una ilustración o tu foto con un efecto de degradado detrás */}
          <div className="w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-20 absolute -top-10 -left-10"></div>
          <div className="relative bg-slate-200 dark:bg-slate-800 rounded-2xl aspect-square flex items-center justify-center text-6xl shadow-2xl">
            <img src={profileImage} alt="Tu Nombre" className="rounded-2xl object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

// export default Hero;