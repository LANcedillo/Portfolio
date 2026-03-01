// src/components/Navbar.tsx
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PortfolioIcon } from './icons/IconDemo';

export const Navbar = ({ darkMode, toggleDarkMode }: { darkMode: boolean, toggleDarkMode: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menu_elements = [
    { name: 'Inicio', href: '/' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Contacto', href: '#contacto' },
  ];
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          <PortfolioIcon className="w-8 h-8 inline-block mr-1" /> LACN
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {menu_elements.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={() => setIsOpen(false)} 
              className="text-sm font-medium hover:text-blue-600 dark:text-slate-300"
            >
              {item.name}
            </a>
          ))}
          <button onClick={toggleDarkMode} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleDarkMode} className="p-2 text-slate-600 dark:text-slate-300">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 dark:text-slate-300">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-5">
          {menu_elements.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={() => setIsOpen(false)} 
              className="text-sm font-medium hover:text-blue-600 dark:text-slate-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};