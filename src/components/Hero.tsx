import profileImage from '../assets/Portafolio.jpeg'

export const Hero = () => {

  return (
    <section id="about me" className="relative pt-28 pb-16 md:pt-48 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        <div className="flex justify-center relative order-first md:order-last">
          
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-75 md:scale-100"></div> {/* Background de la imagen */}
            <div className="relative w-48 h-48 md:w-80 md:h-80 bg-linear-to-br from-blue-600 to-cyan-400 rounded-3xl rotate-3 md:rotate-6 flex items-center justify-center text-6xl md:text-8xl shadow-3xl transition-transform hover:rotate-0 duration-500">
            <img src={profileImage} alt="LACN_PROFILE" className="rounded-2xl object-cover w-full h-full" />
          </div>
        </div>
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white leading-tight">
            Hola, soy <br />
            <span className="text-blue-600">Luis Angel</span>
          </h1>
          <p className="text-base text-justify md:text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Ingeniero de Software con más de 4 años de experiencia diseñando soluciones de Backend y Cloud Data Engineering enfocadas en el ecosistemas cloud e hibridos. Con experiencia en arquitecturas de datos escalables, Big Data con PySpark y escala ademas de automatización de procesos ETL dinámicos. Me gusta optimizar la gobernanza de datos mediante sistemas basados en configuración y trabajo colaborativo de equipos técnicos bajo estándares.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-500/25 active:scale-95 transition-all">
              <a href="#proyectos" className="text-lg font-medium dark:text-white">Ver proyectos</a>
            </button>
            <button className="w-full sm:w-auto px-8 py-4 border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-900 transition-all">
              <a href="#contacto" className="text-lg font-medium dark:text-white">Contacto</a>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
