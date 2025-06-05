import React, { useEffect, useState } from 'react';

interface PixelRevealProps {
  children: React.ReactNode;
}

export const PixelReveal: React.FC<PixelRevealProps> = ({ children }) => {
  const [pixels, setPixels] = useState<boolean[][]>([]);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const cols = Math.ceil(window.innerWidth / 10);
    const rows = Math.ceil(window.innerHeight / 10);
    const initialPixels: boolean[][] = Array(rows).fill(0).map(() => Array(cols).fill(false));
    setPixels(initialPixels);

    // Reveal pixels gradually
    let timeouts: NodeJS.Timeout[] = [];
    let completedPixels = 0;
    const totalPixels = rows * cols;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const delay = Math.random() * 2000;
        timeouts.push(
          setTimeout(() => {
            setPixels(prev => {
              const newPixels = [...prev];
              newPixels[i][j] = true;
              return newPixels;
            });
            completedPixels++;
            if (completedPixels === totalPixels) {
              setTimeout(() => setIsRevealed(true), 500);
            }
          }, delay)
        );
      }
    }

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  if (isRevealed) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 grid"
        style={{ 
          gridTemplateColumns: `repeat(${pixels[0]?.length || 1}, 10px)`,
          gridTemplateRows: `repeat(${pixels.length || 1}, 10px)`,
        }}
      >
        {pixels.flat().map((isVisible, index) => (
          <div
            key={index}
            className="transition-opacity duration-300"
            style={{
              opacity: isVisible ? 0 : 1,
              backgroundColor: '#18181B', // zinc-900
            }}
          />
        ))}
      </div>
      <div className="opacity-0 transition-opacity duration-500" style={{ opacity: isRevealed ? 1 : 0 }}>
        {children}
      </div>
    </div>
  );
}; 