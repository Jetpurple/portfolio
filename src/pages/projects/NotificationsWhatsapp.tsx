import React from 'react';
import { ProjectLayout } from './ProjectLayout';

interface NotificationsWhatsappProps {
  onNavigate: (to: string) => void;
}

export const NotificationsWhatsapp: React.FC<NotificationsWhatsappProps> = ({ onNavigate }) => {
  return (
    <ProjectLayout
      title="Notifications Whatsapp"
      description="Un portfolio moderne et interactif développé avec React et TypeScript, mettant en valeur mes projets avec des animations fluides et un design inspiré de Matrix."
      technologies={[
        'React',
        'TypeScript',
        'Tailwind CSS',
        'React Router',
        'Framer Motion',
        'Vite'
      ]}
      imageUrl="https://metro.co.uk/wp-content/uploads/2025/04/GettyImages-2183307378-1-ea1b.jpg"
      demoUrl="https://portfolio.demo.com"
      githubUrl="https://github.com/username/notifications-whatsapp"
      onNavigate={onNavigate}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-green-400 mb-6">Vue d'ensemble</h2>
        <p className="text-lg text-white/80">
          Ce process a été réalisé pour un client qui souhaitait recevoir des notifications sur son téléphone lorsqu'il y avait une nouvelles rupture
          sur un produit en rayonnage.
        </p>

        <h2 className="text-3xl font-bold text-green-400 mt-12 mb-6">Caractéristiques principales</h2>
        <ul className="space-y-4 text-lg text-white/80">
          <li className="flex items-start">
            <span className="text-green-400 mr-2">•</span>
            Utilisation de l'API de WhatsApp pour envoyer des notifications
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-2">•</span>
            Utilisation d'un serveur pour envoyer les notifications
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-2">•</span>
            Architecture MVC avec CodeIgniter 4
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-2">•</span>
            Design responsive et adaptatif
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-2">•</span>
            Mode sombre optimisé
          </li>
        </ul>

        <h2 className="text-3xl font-bold text-green-400 mt-12 mb-6">Aspects techniques</h2>
        <p className="text-lg text-white/80">
          Le site utilise React avec TypeScript pour une base de code robuste et maintenable. 
          Tailwind CSS permet un design cohérent et personnalisé, tandis que Framer Motion 
          gère les animations complexes. Le tout est optimisé pour les performances avec Vite.
        </p>

        <h2 className="text-3xl font-bold text-green-400 mt-12 mb-6">Optimisations</h2>
        <p className="text-lg text-white/80">
          Une attention particulière a été portée à l'optimisation des performances, notamment 
          avec le lazy loading des images, le code splitting automatique de React Router, et 
          l'utilisation de transitions matérielles pour une expérience fluide sur tous les appareils.
        </p>
      </div>
    </ProjectLayout>
  );
}; 