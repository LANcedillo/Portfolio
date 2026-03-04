import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
// import { TicTacToe } from '../components/games/TicTacToe';
// import { SpaceInvaders } from '../components/games/SpaceInvaders';

const LazyTicTacToe = lazy(() => import('../components/games/TicTacToe'));
const LazySpaceInvaders = lazy(() => import('../components/games/SpaceInvaders'));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-blue-500">Cargando recurso pesado...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/juego/tictactoe" element={<LazyTicTacToe />} />
        <Route path="/juego/space" element={<LazySpaceInvaders />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
};