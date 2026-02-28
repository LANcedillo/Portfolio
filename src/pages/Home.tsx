// src/pages/Home.tsx
import {Hero} from '../components/Hero';
import {ProjectGallery} from '../components/ProjectGallery';
import {Experience} from '../components/Experience';

export const Home = () => {
  return (
    <main className="relative">
      {/* Efecto de iluminación de fondo (Glow effect) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>
      </div>

      <Hero />
      
      <section className="max-w-7xl mx-auto px-4">
        <div className="h-px bg-slate-200 dark:bg-slate-800" />
      </section>

      <ProjectGallery />

      <section className="max-w-7xl mx-auto px-4">
        <div className="h-px bg-slate-200 dark:bg-slate-800" />
      </section>

      <Experience />
      
      {/* Aquí podrías añadir una sección de 'Tecnologías' o 'Habilidades' más adelante */}
    </main>
  );
};