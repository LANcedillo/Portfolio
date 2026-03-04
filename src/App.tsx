// src/App.tsx
import { useState } from 'react';
import { HashRouter} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import {Footer} from './components/Footer';
import { AppRoutes } from './routes';
import { CartProvider } from './context/CartContext';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <CartProvider>
    <HashRouter>
      <div className={darkMode ? '' : 'dark'}>
        <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
          <Navbar darkMode={darkMode} 
          toggleDarkMode={() => setDarkMode(!darkMode)} />
          <AppRoutes />
          <Footer iconClass="w-6 h-6" size={24} />
        </div>
      </div>
    </HashRouter>
    </CartProvider>
  );
}