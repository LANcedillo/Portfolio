import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';

const LazyTicTacToe = lazy(() => import('../components/games/TicTacToe').then(module => ({ default: module.TicTacToe })));
const LazySpaceInvaders = lazy(() => import('../components/games/SpaceInvaders').then(module => ({ default: module.SpaceInvaders })));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-blue-500">Cargando recurso pesado...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/juego/tictactoe" element={<LazyTicTacToe />} />
        <Route path="/juego/space" element={<LazySpaceInvaders />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};