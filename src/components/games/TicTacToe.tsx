// src/components/games/TicTacToe.tsx
import { useState } from 'react';

export const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i: number) => {
    if (board[i]) return;
    const newBoard = [...board];
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  return (
    <div className="pt-32 flex flex-col items-center">
      <h2 className="text-2xl font-bold dark:text-white mb-8">Tic Tac Toe</h2>
      <div className="grid grid-cols-3 gap-2 bg-slate-200 dark:bg-slate-800 p-2 rounded-lg">
        {board.map((val, i) => (
          <button 
            key={i}
            onClick={() => handleClick(i)}
            className="w-20 h-20 bg-white dark:bg-slate-700 text-3xl font-bold dark:text-white rounded flex items-center justify-center hover:bg-blue-50 transition"
          >
            {val}
          </button>
        ))}
      </div>
      <button 
        onClick={() => setBoard(Array(9).fill(null))}
        className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg"
      >
        Reiniciar
      </button>
    </div>
  );
};