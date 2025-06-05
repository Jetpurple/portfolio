import React, { useState, useEffect } from 'react';

interface MatrixTextProps {
  text: string;
  className?: string;
}

export const MatrixText: React.FC<MatrixTextProps> = ({ text, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrambledChars, setScrambledChars] = useState<string[]>([]);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Reset state when text changes
    setDisplayedText('');
    setCurrentIndex(0);
    setScrambledChars(new Array(text.length).fill(''));
    setIsAnimating(true);
  }, [text]);

  useEffect(() => {
    if (!isAnimating) return;

    if (currentIndex < text.length) {
      // Matrix effect timing
      const scrambleInterval = setInterval(() => {
        setScrambledChars(prev => {
          const newChars = [...prev];
          for (let i = currentIndex; i < text.length; i++) {
            if (text[i] !== ' ') {
              newChars[i] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'[
                Math.floor(Math.random() * 36)
              ];
            } else {
              newChars[i] = ' ';
            }
          }
          return newChars;
        });
      }, 50);

      // Reveal correct character
      const revealTimeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);

      return () => {
        clearInterval(scrambleInterval);
        clearTimeout(revealTimeout);
      };
    } else {
      setIsAnimating(false);
    }
  }, [currentIndex, text, isAnimating]);

  return (
    <span className={className}>
      {scrambledChars.map((char, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-200 ${
            index < displayedText.length ? 'text-white' : 'text-green-500 opacity-70'
          }`}
        >
          {index < displayedText.length ? text[index] : char}
        </span>
      ))}
    </span>
  );
}; 