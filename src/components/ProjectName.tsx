import React from 'react';
import { MatrixText } from './MatrixText';
import { ArrowUpRight } from 'lucide-react';

interface ProjectNameProps {
  name?: string;
  detailsUrl?: string;
  onNavigate: (to: string) => void;
}

export const ProjectName: React.FC<ProjectNameProps> = ({ name, detailsUrl, onNavigate }) => {
  if (!name) return null;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (detailsUrl) {
      onNavigate(detailsUrl);
    }
  };

  return (
    <div className="fixed bottom-20 left-8">
      <div className="flex flex-col gap-4">
        <div className="text-white text-6xl font-light tracking-wider transform transition-all duration-500 opacity-100 font-mono">
          <span className="text-green-400">&lt;</span>
          <MatrixText key={name} text={name} />
          <span className="text-green-400">/&gt;</span>
        </div>
        {detailsUrl && (
          <button
            onClick={handleClick}
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-xl font-mono"
          >
            <span className="group-hover:underline">View Details</span>
            <ArrowUpRight 
              className="transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
              size={20} 
            />
          </button>
        )}
      </div>
    </div>
  );
}; 