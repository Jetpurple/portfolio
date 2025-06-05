import React from 'react';
import { ProjectLayout } from './ProjectLayout';

interface FitTrackProProps {
  onNavigate: (to: string) => void;
}

export const FitTrackPro: React.FC<FitTrackProProps> = ({ onNavigate }) => {
  return (
    <ProjectLayout
      title="FitTrack Pro"
      description="Application mobile de suivi fitness qui utilise l'apprentissage automatique pour personnaliser les programmes d'entraînement et suivre les progrès en temps réel. Disponible sur iOS et Android."
      technologies={[
        'React Native',
        'TypeScript',
        'Node.js',
        'MongoDB',
        'TensorFlow Lite',
        'Firebase'
      ]}
      imageUrl="https://images.unsplash.com/photo-1605296867424-35fc25c9212a"
      demoUrl="https://fittrack.demo.com"
      githubUrl="https://github.com/username/fittrack-pro"
      onNavigate={onNavigate}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-green-400 mb-6">À propos du projet</h2>
        <p className="text-lg text-white/80">
          FitTrack Pro révolutionne l'expérience fitness en combinant le suivi d'activité 
          traditionnel avec l'intelligence artificielle pour offrir des recommandations 
          personnalisées et un suivi précis des mouvements pendant l'exercice.
        </p>

        <h2 className="text-3xl font-bold text-green-400 mt-12 mb-6">Caractéristiques innovantes</h2>
        <ul className="space-y-4 text-lg text-white/80">
          <li className="flex items-start">
            <span className="text-green-400 mr-2">•</span>
            Reconnaissance des mouvements en temps réel via la caméra
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-2">•</span>
            Programmes d'entraînement adaptatifs basés sur les performances
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-2">•</span>
            Analyse de la forme et corrections en direct
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-2">•</span>
            Synchronisation multi-appareils
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-2">•</span>
            Mode hors ligne complet
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-2">•</span>
            Intégration avec les montres connectées
          </li>
        </ul>

        <h2 className="text-3xl font-bold text-green-400 mt-12 mb-6">Développement cross-platform</h2>
        <p className="text-lg text-white/80">
          Développée avec React Native, l'application offre une expérience native sur iOS et 
          Android tout en maintenant une base de code unique. L'utilisation de TypeScript 
          assure la robustesse et la maintenabilité du code.
        </p>

        <h2 className="text-3xl font-bold text-green-400 mt-12 mb-6">Intelligence artificielle embarquée</h2>
        <p className="text-lg text-white/80">
          L'application utilise TensorFlow Lite pour exécuter des modèles d'IA directement 
          sur l'appareil, permettant une analyse en temps réel des mouvements même sans 
          connexion internet. Les modèles sont régulièrement mis à jour via Firebase pour 
          améliorer la précision.
        </p>

        <h2 className="text-3xl font-bold text-green-400 mt-12 mb-6">Infrastructure backend</h2>
        <p className="text-lg text-white/80">
          Le backend Node.js gère la synchronisation des données, l'authentification et 
          le stockage des programmes d'entraînement. MongoDB est utilisé pour sa flexibilité 
          dans le stockage des données d'exercice et des métriques utilisateur.
        </p>
      </div>
    </ProjectLayout>
  );
}; 