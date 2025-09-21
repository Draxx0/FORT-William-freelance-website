import Features from '@/components/features-vertical';
import Section from '@/components/section';
import { Bitcoin, Book, Mail } from 'lucide-react';

export const WorksList = () => {
  return (
    <Section
      id="works-list"
      title="Réalisations"
      subtitle="Des applications de clients satisfait"
    >
      <Features
        collapseDelay={25000}
        data={[
          {
            id: 1,
            title: 'Ridmi',
            content:
              'Ridmi est une plateforme pour les passionnés de lecture, permettant de découvrir, organiser, noter et partager ses livres via une interface élégante et intuitive.',
            icon: <Book className="size-6 text-primary" />,
            video: 'https://williamfort.fr/videos/ridmi.mp4',
          },
          {
            id: 2,
            title: 'Nodex',
            content:
              'Application de suivi de cryptos en temps réel via l’API CoinGecko, avec graphiques interactifs pour visualiser et suivre facilement vos investissements et performances.',
            icon: <Bitcoin className="size-7 text-primary" />,
            video: 'https://williamfort.fr/videos/nodex.mp4',
          },
          {
            id: 3,
            title: 'Reqeefy',
            content:
              'Outil pour agences web qui centralise toutes les demandes clients dispersées par emails et contacts, pour tout gérer au même endroit sans perdre de temps.',
            icon: <Mail className="size-6 text-primary" />,
            video: 'https://williamfort.fr/videos/reqeefy-edit.mp4',
          },
        ]}
      />
    </Section>
  );
};
