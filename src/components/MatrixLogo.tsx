import React, { useState, useEffect } from 'react';

interface MatrixLogoProps {
  className?: string;
}

export const MatrixLogo: React.FC<MatrixLogoProps> = ({ className = '' }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [matrixChars, setMatrixChars] = useState<string[][]>([]);
  const logoSize = { width: 48, height: 48 };
  const cellSize = 4;
  const cols = Math.ceil(logoSize.width / cellSize);
  const rows = Math.ceil(logoSize.height / cellSize);

  useEffect(() => {
    // Initialize matrix grid
    const initialMatrix = Array(rows).fill(0).map(() => 
      Array(cols).fill('').map(() => 
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'[Math.floor(Math.random() * 36)]
      )
    );
    setMatrixChars(initialMatrix);

    // Animate characters with varying speeds
    const charIntervals: number[] = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const updateSpeed = Math.random() * 50 + 30; // Random speed between 30ms and 80ms
        charIntervals.push(
          window.setInterval(() => {
            if (!isRevealed) {
              setMatrixChars(prev => {
                const newMatrix = [...prev];
                newMatrix[i][j] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'[
                  Math.floor(Math.random() * 36)
                ];
                return newMatrix;
              });
            }
          }, updateSpeed)
        );
      }
    }

    // Start reveal animation with cascade effect
    const startReveal = () => {
      for (let i = 0; i < rows; i++) {
        setTimeout(() => {
          setMatrixChars(prev => {
            const newMatrix = [...prev];
            newMatrix[i] = newMatrix[i].map(() => '');
            return newMatrix;
          });
        }, i * 50); // Cascade effect row by row
      }
      setTimeout(() => setIsRevealed(true), rows * 50 + 300);
    };

    const revealTimeout = window.setTimeout(startReveal, 1200);

    return () => {
      charIntervals.forEach(window.clearInterval);
      window.clearTimeout(revealTimeout);
    };
  }, []);

  return (
    <div className="relative" style={{ width: logoSize.width, height: logoSize.height }}>
      {/* Matrix characters */}
      <div 
        className={`absolute inset-0 grid text-green-500 overflow-hidden transition-all duration-700 ease-in-out
          ${isRevealed ? 'opacity-0 scale-110' : 'opacity-70 scale-100'}`}
        style={{
          gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
          gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
          fontSize: `${cellSize}px`,
          lineHeight: 1,
        }}
      >
        {matrixChars.flat().map((char, index) => (
          <span 
            key={index} 
            className="flex items-center justify-center font-mono transition-opacity duration-300"
            style={{ opacity: char ? 1 : 0 }}
          >
            {char}
          </span>
        ))}
      </div>

      {/* Actual logo */}
      <img 
        src="/images/logo_ludo.png" 
        alt="Ludovic's Logo" 
        className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${className}
          ${isRevealed ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
      />
    </div>
  );
}; 