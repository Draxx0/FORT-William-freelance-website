import ContactSection from '@/components/sections/common/contact';
import { HeroBanner } from '@/components/sections/common/hero-banner';
import ProjectsKeySteps from '@/components/sections/home/project-key-steps';
import EcommerceFAQ from '@/components/sections/services/site-e-commerce/faq';
import { Rocket, ShoppingCart, Target } from 'lucide-react';

export default function SiteEcommercePage() {
  return (
    <>
      <HeroBanner
        tag="Site e-commerce 🛍️"
        title={[
          'Développement de site e-commerce',
          'optimisé pour votre activité',
        ]}
        description="Je développe des sites e-commerce optimisés pour votre activité. J'accompagne les projets de création de site vitrine, de design, de développement, de maintenance et de référencement."
        cta="Démarrons ensemble"
        image={{ src: '/shopify-banner.webp' }}
        breadcrumb={{
          currentPage: 'Site e-commerce',
          intermediatePages: [
            {
              href: '/services',
              text: 'Services',
            },
          ],
        }}
      />
      <ProjectsKeySteps
        problems={[
          {
            title: '1. Analyse des besoins & objectifs',
            description:
              'Nous commençons par échanger sur vos objectifs de vente en ligne. Quels produits vendez-vous ? Quelle est votre cible ? Je vous aide à définir la meilleure stratégie pour votre boutique en ligne, en tenant compte de vos besoins spécifiques.',
            icon: Target,
          },
          {
            title: '2. Conception & développement de la boutique',
            description:
              "Je crée un site e-commerce Shopify sur-mesure, en concevant une interface intuitive et un parcours utilisateur optimisé. Je m'assure que votre boutique est rapide, sécurisée et parfaitement adaptée à vos produits et à votre image de marque.",
            icon: ShoppingCart,
          },
          {
            title: '3. Lancement & accompagnement',
            description:
              'Une fois votre boutique en ligne, je m’assure que tout est fonctionnel (paiements, expéditions, etc.) et vous accompagne pour son lancement. Je reste disponible pour optimiser vos performances, ajuster les fonctionnalités et vous fournir un support continu.',
            icon: Rocket,
          },
        ]}
      />
      <EcommerceFAQ />
      <ContactSection />
    </>
  );
}
