import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
  scrollProgress: number;
}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ scrollProgress }) => {
  return (
    <div className="flex flex-col items-center pb-4 pt-2">
      <div className="text-[10px] text-gray-400 tracking-wider mb-1">(SCROLL)</div>
      <ChevronDown size={14} className="animate-bounce text-gray-400" />
      
      {/* Progress Bar */}
      <div className="w-36 h-0.5 bg-gray-800 mt-2 rounded-full overflow-hidden">
        <div 
          className="h-full bg-white transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </div>
  );
}; 