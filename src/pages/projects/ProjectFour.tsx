import React from 'react';
import { ProjectLayout } from './ProjectLayout';

export const ProjectFour = () => {
  return (
    <ProjectLayout
      title="CryptoVault DeFi"
      description="Plateforme décentralisée de finance (DeFi) permettant aux utilisateurs de gérer, échanger et investir leurs crypto-actifs en toute sécurité. Interface moderne et intuitive pour démocratiser l'accès à la DeFi."
      technologies={[
        'Solidity',
        'Web3.js',
        'React',
        'Next.js',
        'Ethers.js',
        'Hardhat'
      ]}
      imageUrl="https://images.unsplash.com/photo-1639762681485-074b7f938ba0"
      demoUrl="https://cryptovault.demo.com"
      githubUrl="https://github.com/username/cryptovault-defi"
    >
      <div className="prose prose-invert max-w-none">
        <h2>Vision du projet</h2>
        <p>
          CryptoVault DeFi vise à simplifier l'accès aux services financiers décentralisés 
          en offrant une interface utilisateur intuitive et sécurisée. Le projet met l'accent 
          sur la transparence, la sécurité et l'accessibilité.
        </p>

        <h2>Fonctionnalités clés</h2>
        <ul>
          <li>Échange décentralisé de tokens (DEX)</li>
          <li>Pools de liquidité avec rendements optimisés</li>
          <li>Staking de tokens avec récompenses</li>
          <li>Gouvernance DAO intégrée</li>
          <li>Bridge multi-chaînes</li>
          <li>Tableau de bord analytique en temps réel</li>
        </ul>

        <h2>Sécurité et Audits</h2>
        <p>
          Les smart contracts ont été audités par des firmes de sécurité reconnues et suivent 
          les meilleures pratiques de l'industrie. Le code est open source et a fait l'objet 
          de multiples revues par la communauté.
        </p>

        <h2>Architecture technique</h2>
        <p>
          La plateforme utilise une architecture moderne combinant des smart contracts Solidity 
          pour la logique on-chain et une interface utilisateur React optimisée. Next.js assure 
          des performances optimales et un bon référencement.
        </p>

        <h2>Innovation DeFi</h2>
        <p>
          Le projet introduit plusieurs innovations dans l'espace DeFi, notamment un système 
          de gestion de risque automatisé et des stratégies d'investissement optimisées par 
          algorithme. L'intégration multi-chaînes permet une interopérabilité maximale.
        </p>

        <h2>Perspectives d'évolution</h2>
        <p>
          La feuille de route inclut l'intégration de nouvelles chaînes de blocs, le développement 
          de produits DeFi innovants et l'expansion des fonctionnalités de gouvernance pour 
          renforcer la décentralisation du protocole.
        </p>
      </div>
    </ProjectLayout>
  );
}; 