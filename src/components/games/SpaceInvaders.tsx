import { useEffect, useRef, useState } from 'react';

export const SpaceInvaders = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);

const checkCollision = (bullet: {x: number, y: number}, enemy: {x: number, y: number}) => {
  // Dimensiones de la bala: 4x10 (definidas en tu fillRect)
  // Dimensiones del enemigo: 30x20 (definidas en tu fillRect)
  return (
    bullet.x < enemy.x + 30 && // Lado izq bala < Lado der enemigo
    bullet.x + 4 > enemy.x &&  // Lado der bala > Lado izq enemigo
    bullet.y < enemy.y + 20 && // Lado sup bala < Lado inf enemigo
    bullet.y + 10 > enemy.y    // Lado inf bala > Lado sup enemigo
  );
};


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let playerX = canvas.width / 2;
    let bullets: {x: number, y: number}[] = [];
    let enemies: {x: number, y: number}[] = [];

    // Generar enemigos iniciales
    for(let i=0; i<5; i++) enemies.push({x: i * 80 + 50, y: 50});

    
    const gameLoop = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Dibujar Jugador
        ctx.fillStyle = '#3b82f6';
        ctx.fillRect(playerX - 15, canvas.height - 30, 30, 20);

        // Mover y dibujar balas
        ctx.fillStyle = '#ef4444';
        bullets.forEach((b, i) => {
        b.y -= 5;
        ctx.fillRect(b.x - 2, b.y, 4, 10);

        enemies.forEach((e, ei) => {
            // Llamamos a nuestra función lógica
            if (checkCollision({x: b.x - 2, y: b.y}, e)) {
            enemies.splice(ei, 1); // Eliminar enemigo
            bullets.splice(i, 1); // Eliminar bala
            setScore(s => s + 10); // Aumentar puntaje
            }
        });
        });

      // Dibujar Enemigos
      ctx.fillStyle = '#10b981';
      enemies.forEach(e => ctx.fillRect(e.x, e.y, 30, 20));

      requestAnimationFrame(gameLoop);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') playerX -= 20;
      if (e.key === 'ArrowRight') playerX += 20;
      if (e.key === ' ') bullets.push({x: playerX, y: canvas.height - 40});
    };

    window.addEventListener('keydown', handleKeyDown);
    const animationId = requestAnimationFrame(gameLoop);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="flex flex-col items-center pt-32 gap-6">
      <h2 className="text-2xl font-bold dark:text-white">Space Invaders - Score: {score}</h2>
      <canvas 
        ref={canvasRef} 
        width={400} 
        height={500} 
        className="bg-slate-900 rounded-xl shadow-2xl border-4 border-slate-800"
      />
      <p className="text-slate-500 text-sm">Usa Flechas para moverte y Espacio para disparar</p>
    </div>
  );
};