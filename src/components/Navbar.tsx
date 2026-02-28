// src/components/Navbar.tsx
import { Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  return (
    <nav className="fixed w-full z-50 top-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
      <div className="max-w-7xl   flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex justify-between h-16 items-center">
          {/* <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            MiPortafolio.dev
          </span> */}

          <div className="hidden md:flex space-x-8 items-center text-slate-700 dark:text-slate-300">
            <a href="#inicio" className="hover:text-blue-500 transition">Inicio</a>
            <a href="#proyectos" className="hover:text-blue-500 transition">Proyectos</a>
            <Link to="/juego/tictactoe" className="hover:text-blue-500 transition font-medium text-blue-600">
              ¡Jugar!</Link>
            {/* <a href="#sobre-mi" className="hover:text-blue-500 transition">Sobre mí</a> */}
            
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:ring-2 ring-blue-400 transition"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};



