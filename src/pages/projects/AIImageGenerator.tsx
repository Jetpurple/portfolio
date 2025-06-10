import React from 'react';
import { ProjectLayout } from './ProjectLayout';

interface AIImageGeneratorProps {
  onNavigate: (to: string) => void;
}

export const AIImageGenerator: React.FC<AIImageGeneratorProps> = ({ onNavigate }) => {
  return (
    <ProjectLayout
      title="AI Image Generator"
      description="Une application web innovante qui utilise l'intelligence artificielle pour générer des images uniques à partir de descriptions textuelles. Intégration de modèles de pointe comme DALL-E et Stable Diffusion."
      technologies={[
        'React',
        'Python',
        'TensorFlow',
        'OpenAI API',
        'Docker',
        'AWS'
      ]}
      imageUrl="https://images.unsplash.com/photo-1677442136019-21780ecad995"
      demoUrl="https://hire-me.demo.com"
      githubUrl="https://github.com/username/hire-me"
      onNavigate={onNavigate}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-green-400 mb-6">Vue d'ensemble du projet</h2>
        <p className="text-lg text-white/80">
          Ce projet combine l'art et la technologie en permettant aux utilisateurs de créer des œuvres 
          d'art uniques à partir de simples descriptions textuelles. L'application utilise des modèles 
          d'IA avancés pour interpréter les descriptions et générer des images correspondantes en temps réel.
        </p>

        <h2 className="text-3xl font-bold text-green-400 mt-12 mb-6">Fonctionnalités principales</h2>
        <ul className="space-y-4 text-lg text-white/80">
          <li className="flex items-start">
            <span className="text-green-400 mr-2">•</span>
            Génération d'images à partir de texte en temps réel
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-2">•</span>
            Personnalisation avancée des paramètres de génération
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-2">•</span>
            Galerie de sauvegarde des créations
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-2">•</span>
            Partage social intégré
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-2">•</span>
            Interface utilisateur intuitive et réactive
          </li>
        </ul>

        <h2 className="text-3xl font-bold text-green-400 mt-12 mb-6">Défis techniques</h2>
        <p className="text-lg text-white/80">
          L'un des plus grands défis a été d'optimiser les performances du modèle d'IA pour obtenir 
          des temps de génération rapides tout en maintenant une haute qualité d'image. Nous avons 
          également mis en place une architecture scalable pour gérer de nombreuses requêtes simultanées.
        </p>

        <h2 className="text-3xl font-bold text-green-400 mt-12 mb-6">Architecture technique</h2>
        <p className="text-lg text-white/80">
          Le projet utilise une architecture microservices avec Docker pour faciliter le déploiement. 
          Le frontend React communique avec une API Python qui orchestre les différents modèles d'IA. 
          AWS est utilisé pour le stockage et le traitement distribué.
        </p>
      </div>
    </ProjectLayout>
  );
}; 