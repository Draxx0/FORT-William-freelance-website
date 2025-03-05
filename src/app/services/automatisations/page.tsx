import ContactSection from '@/components/sections/common/contact';
import { HeroBanner } from '@/components/sections/common/hero-banner';

export default function AutomatisationPage() {
  return (
    <>
      <HeroBanner
        tag="Automatisation 🔁"
        title={['Création d’automatisation', 'optimisée pour votre activité']}
        description="Je crée des interfaces modernes et intuitives, centrées sur l'expérience utilisateur. J'accompagne les projets de création d'agent IA, de design, de développement, de maintenance et de référencement."
        cta="Démarrons ensemble"
        images={[
          { src: '/automation-banner.png', alt: 'Automatisation' },
          { src: '/automation-banner.png', alt: 'Automatisation' },
        ]}
        breadcrumb={{
          currentPage: 'Automatisation',
          intermediatePages: [
            {
              href: '/services',
              text: 'Services',
            },
          ],
        }}
      />
      <ContactSection />
    </>
  );
}
