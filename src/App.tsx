// src/App.tsx
import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import {Footer} from './components/Footer';
import { Home } from './pages/Home';
import { TicTacToe } from './components/games/TicTacToe'; // Supongamos que creaste este

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <HashRouter>
      <div className={darkMode ? '' : 'dark'}>
        <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
          
          {/* El Navbar está fuera de Routes para que siempre sea visible */}
          <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/juego/tictactoe" element={<TicTacToe />} />
            {/* Si el usuario entra a una ruta que no existe, lo mandamos a Home */}
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
}