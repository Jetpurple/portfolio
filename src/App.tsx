import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { ProjectCard } from './components/ProjectCard';
import { ScrollIndicator } from './components/ScrollIndicator';
import { ProjectName } from './components/ProjectName';
import { NotificationsWhatsapp } from './pages/projects/NotificationsWhatsapp';
import { AIImageGenerator } from './pages/projects/AIImageGenerator';
import { FitTrackPro } from './pages/projects/FitTrackPro';
import { CryptoVaultDeFi } from './pages/projects/CryptoVaultDeFi';
import { images } from './data/images';
import { MousePosition } from './types';
import { MatrixTransition } from './components/MatrixTransition';

function HomePage({ onNavigate }: { onNavigate: (to: string) => void }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  useEffect(() => {
    const updateScrollInfo = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setScrollPosition(scrollLeft);
        setMaxScroll(scrollWidth - clientWidth);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCard(null);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', updateScrollInfo);
      updateScrollInfo();
      window.addEventListener('resize', updateScrollInfo);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', updateScrollInfo);
      }
      window.removeEventListener('resize', updateScrollInfo);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const scrollProgress = maxScroll > 0 ? (scrollPosition / maxScroll) * 100 : 0;
  const selectedProject = images.find(img => img.id === selectedCard);

  const handleProjectClick = (detailsUrl: string) => {
    onNavigate(detailsUrl);
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <main className="flex-1 flex flex-col justify-center">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory group"
          style={{ scrollBehavior: 'smooth' }}
        >
          {images.map((image, index) => (
            <ProjectCard
              key={image.id}
              image={image}
              isSelected={selectedCard === image.id}
              mousePosition={mousePosition}
              onClick={() => {
                setSelectedCard(selectedCard === image.id ? null : image.id);
              }}
              isFirst={index === 0}
              isLast={index === images.length - 1}
            />
          ))}
        </div>

        <ProjectName 
          name={selectedProject?.name} 
          detailsUrl={selectedProject?.detailsUrl}
          onNavigate={onNavigate}
        />
        <ScrollIndicator scrollProgress={scrollProgress} />
      </main>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextLocation, setNextLocation] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigationInProgress = useRef(false);

  const handleNavigate = (to: string) => {
    if (to === location.pathname || navigationInProgress.current) return;
    
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }

    navigationInProgress.current = true;
    setIsTransitioning(true);
    setNextLocation(to);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest('a');
      if (link && link.href.startsWith(window.location.origin)) {
        e.preventDefault();
        const path = link.href.slice(window.location.origin.length);
        handleNavigate(path);
      }
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [location.pathname]);

  useEffect(() => {
    const handlePopState = () => {
      if (!navigationInProgress.current) {
        setIsTransitioning(true);
        setNextLocation(location.pathname);
        navigationInProgress.current = true;
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MatrixTransition 
        isActive={isTransitioning} 
        onComplete={() => {
          setIsTransitioning(false);
          if (nextLocation) {
            navigate(nextLocation);
            setNextLocation(null);
            setTimeout(() => {
              navigationInProgress.current = false;
            }, 100);
          }
        }} 
      />
      <Routes>
        <Route path="/" element={<HomePage onNavigate={handleNavigate} />} />
        <Route path="/projects/notifications-whatsapp" element={<NotificationsWhatsapp onNavigate={handleNavigate} />} />
        <Route path="/projects/ai-image-generator" element={<AIImageGenerator onNavigate={handleNavigate} />} />
        <Route path="/projects/fittrack-pro" element={<FitTrackPro onNavigate={handleNavigate} />} />
        <Route path="/projects/cryptovault-defi" element={<CryptoVaultDeFi onNavigate={handleNavigate} />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;