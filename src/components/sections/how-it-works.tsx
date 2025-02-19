import Features from '@/components/features-vertical';
import Section from '@/components/section';
import { Sparkles, Upload, Zap } from 'lucide-react';

const data = [
  {
    id: 1,
    title: '1. Partagez vos besoins',
    content:
      'Décrivez vos objectifs et vos attentes. Que ce soit pour la création d’un site ou l’automatisation de processus, je m’assure de comprendre vos priorités.',
    image: '/dashboard.png',
    icon: <Upload className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    title: '2. Lancement du projet',
    content:
      'Je développe et mets en place les solutions adaptées : conception du site, design moderne et intuitif, ou automatisation des processus via Make.com. Tout est personnalisé pour vous offrir des résultats concrets.',
    image: '/dashboard.png',
    icon: <Zap className="w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    title: '3. Suivi et optimisations',
    content:
      'Je vous accompagne dans le suivi de votre projet. Grâce à des améliorations continues, je m’assure que vos outils restent performants et que votre digitalisation soit toujours à la pointe.',
    image: '/dashboard.png',
    icon: <Sparkles className="w-6 h-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section title="How it works" subtitle="Just 3 steps to get started">
      <Features data={data} />
    </Section>
  );
}
