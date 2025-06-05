import React, { useCallback, useRef } from 'react';
import { MousePosition } from '../types';

interface ProjectCardProps {
  image: {
    id: number;
    url: string;
    name: string;
    detailsUrl: string;
  };
  isSelected: boolean;
  mousePosition: MousePosition;
  onClick: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  isSelected,
  mousePosition,
  onClick,
  isFirst,
  isLast,
}) => {
  const clickTimeout = useRef<number | null>(null);
  const isClickPending = useRef(false);

  const handleClick = useCallback(() => {
    if (isClickPending.current) return;
    
    isClickPending.current = true;
    onClick();

    if (clickTimeout.current) {
      window.clearTimeout(clickTimeout.current);
    }

    clickTimeout.current = window.setTimeout(() => {
      isClickPending.current = false;
    }, 500);
  }, [onClick]);

  return (
    <div 
      className={`
        snap-center flex-shrink-0 h-[calc(90vh-15rem)]
        ${isSelected ? 'w-[480px]' : 'w-[200px]'}
        p-2
        ${isFirst ? 'ml-[max(1rem,calc((100vw-280px)/2))]' : ''}
        ${isLast ? 'mr-[max(1rem,calc((100vw-280px)/2))]' : ''}
        transition-all duration-500 ease-out
      `}
      onClick={handleClick}
    >
      <div 
        className={`
          relative h-full w-full rounded-lg overflow-hidden bg-gray-800 
          transition-all duration-500 cursor-pointer
          group-hover:opacity-[0.3] hover:!opacity-100 hover:scale-[1.02]
          ${isSelected ? 'ring-2 ring-green-400' : ''}
        `}
        style={{
          backgroundImage: `url(${image.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `
            perspective(1000px)
            rotateY(${(mousePosition.x / window.innerWidth - 0.5) * 5}deg)
            rotateX(${(mousePosition.y / window.innerHeight - 0.5) * -5}deg)
            translateZ(0)
          `,
          boxShadow: isSelected 
            ? '0 0 25px rgba(74, 222, 128, 0.2), 0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            : '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
      >
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.8))'
          }}
        />
      </div>
    </div>
  );
}; 