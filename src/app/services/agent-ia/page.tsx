import ContactSection from '@/components/sections/common/contact';
import { HeroBanner } from '@/components/sections/common/hero-banner';

export default function AgentIAPage() {
  return (
    <>
      <HeroBanner
        tag="Agent IA 🤖"
        title={['Création d’agent IA', 'optimisée pour votre activité']}
        description="Je crée des interfaces modernes et intuitives, centrées sur l'expérience utilisateur. J'accompagne les projets de création d'agent IA, de design, de développement, de maintenance et de référencement."
        cta="Démarrons ensemble"
        images={[
          { src: '/agenti-ia-banner.png', alt: 'Agent IA' },
          { src: '/agenti-ia-banner.png', alt: 'Agent IA' },
        ]}
        breadcrumb={{
          currentPage: 'Création d’agent IA',
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
