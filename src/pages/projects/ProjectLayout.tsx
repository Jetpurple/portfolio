import React from 'react';

interface ProjectLayoutProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
  children: React.ReactNode;
  onNavigate: (to: string) => void;
}

export const ProjectLayout: React.FC<ProjectLayoutProps> = ({
  title,
  description,
  technologies,
  imageUrl,
  demoUrl,
  githubUrl,
  children,
  onNavigate,
}) => {
  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('/');
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Hero section avec image en arrière-plan et effet de fondu */}
      <div className="relative h-[50vh] min-h-[400px]">
        {/* Image de fond avec overlay gradient */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/70 via-zinc-900/50 to-zinc-900"></div>
        </div>

        {/* Contenu du header superposé sur l'image */}
        <div className="relative z-10 h-full container mx-auto px-4">
          <div className="flex flex-col h-full">

            <div className="flex-1 flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl">{description}</p>
            </div>

            <div className="py-6 flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-white/10 rounded-full text-sm backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-4 mb-8">
            <a 
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-lg transition-colors"
            >
              Voir la démo
            </a>
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-zinc-700 hover:bg-zinc-600 rounded-lg transition-colors"
            >
              Code source
            </a>
          </div>

          {children}
        </div>
      </main>
    </div>
  );
}; 