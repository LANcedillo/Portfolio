import { Link } from 'react-router-dom';
import { Home, RefreshCcw } from 'lucide-react';

export const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="text-center space-y-8">
        {/* Elemento Visual Central */}
        <div className="relative inline-block">
          <h1 className="text-9xl font-black text-slate-200 dark:text-slate-800 animate-pulse">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl animate-bounce">👾</span>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            ¡Misión Fallida!
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto">
            El recurso que buscas ha sido destruido por invasores espaciales o nunca existió en esta galaxia.
          </p>
        </div>

        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/" 
            className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-500/20"
          >
            <Home size={18} />
            Volver a la Base (Inicio)
          </Link>
          
          <button 
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 px-8 py-3 border-2 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-900 transition-all"
          >
            <RefreshCcw size={18} />
            Reintentar Escaneo
          </button>
        </div>

        {/* Decoración de fondo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 blur-[100px] -z-10 rounded-full"></div>
      </div>
    </main>
  );
};