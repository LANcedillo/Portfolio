import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { TicTacToe } from '../components/games/TicTacToe';
import { SpaceInvaders } from '../components/games/SpaceInvaders';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/juego/tictactoe" element={<TicTacToe />} />
      <Route path="/juego/space" element={<SpaceInvaders />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};