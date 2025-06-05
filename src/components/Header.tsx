import React from 'react';
import { Link } from 'react-router-dom';
import { MatrixLogo } from './MatrixLogo';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="relative z-50 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link 
            to="/" 
            className="flex items-center space-x-4 relative group"
            aria-label="Retour à l'accueil"
          >
            <div className="transform transition-transform duration-300 group-hover:scale-105">
              <MatrixLogo />
            </div>
          </Link>

          <nav className={`
            fixed top-0 right-0 h-screen bg-zinc-900/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out
            w-64 p-8 flex flex-col items-start space-y-6
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            md:relative md:h-auto md:w-auto md:p-0 md:bg-transparent md:backdrop-blur-none md:translate-x-0 md:flex-row md:items-center md:space-x-8 md:space-y-0
          `}>
            <Link 
              to="/" 
              className="text-white hover:text-green-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Projets
            </Link>
            <Link 
              to="/#" 
              className="text-white hover:text-green-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </Link>
            <Link 
              to="/#" 
              className="text-white hover:text-green-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>

          <button
            className="md:hidden z-50 relative w-10 h-10 text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <span
                className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
                  isMenuOpen ? 'rotate-45 delay-200' : '-translate-y-1.5'
                }`}
              ></span>
              <span
                className={`absolute h-0.5 bg-white transform transition-all duration-200 ease-in-out ${
                  isMenuOpen ? 'w-0 opacity-50' : 'w-5 delay-200 opacity-100'
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
                  isMenuOpen ? '-rotate-45 delay-200' : 'translate-y-1.5'
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}; 