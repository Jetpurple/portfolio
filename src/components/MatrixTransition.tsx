import React, { useEffect, useState } from 'react';

interface MatrixTransitionProps {
  isActive: boolean;
  onComplete?: () => void;
}

export const MatrixTransition: React.FC<MatrixTransitionProps> = ({ isActive, onComplete }) => {
  const [characters, setCharacters] = useState<string[][]>([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isActive && !isComplete) {
      const cols = Math.ceil(window.innerWidth / 20);
      const rows = Math.ceil(window.innerHeight / 20);
      const matrix: string[][] = [];

      for (let i = 0; i < rows; i++) {
        const row: string[] = [];
        for (let j = 0; j < cols; j++) {
          row.push('');
        }
        matrix.push(row);
      }
      setCharacters(matrix);

      let timeouts: NodeJS.Timeout[] = [];
      let completedCells = 0;
      const totalCells = rows * cols;
      const baseDelay = 500; // Délai de base pour une meilleure synchronisation
      const maxRandomDelay = 800; // Délai maximum aléatoire

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const delay = baseDelay + Math.random() * maxRandomDelay + (i + j) * 15;
          timeouts.push(
            setTimeout(() => {
              setCharacters(prev => {
                const newMatrix = [...prev];
                newMatrix[i][j] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'[
                  Math.floor(Math.random() * 36)
                ];
                return newMatrix;
              });
              completedCells++;
              if (completedCells === totalCells) {
                setTimeout(() => {
                  setIsComplete(true);
                  onComplete?.();
                }, 300); // Réduit le délai final pour une transition plus rapide
              }
            }, delay)
          );
        }
      }

      return () => {
        timeouts.forEach(clearTimeout);
      };
    }
  }, [isActive, isComplete, onComplete]);

  if (!isActive) return null;

  return (
    <div 
      className={`fixed inset-0 bg-zinc-900 z-50 font-mono text-sm grid place-items-center overflow-hidden
        ${isComplete ? 'animate-fadeOut' : ''}`}
      style={{ 
        gridTemplateColumns: `repeat(${characters[0]?.length || 1}, 20px)`,
        gridTemplateRows: `repeat(${characters.length || 1}, 20px)`,
      }}
    >
      {characters.flat().map((char, index) => (
        <span 
          key={index}
          className="text-green-500 opacity-70 transition-opacity duration-300"
          style={{ 
            opacity: char ? 0.7 : 0,
            transform: `translateY(${Math.random() * 2}px)`,
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}; 