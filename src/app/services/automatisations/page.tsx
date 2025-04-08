import ContactSection from '@/components/sections/common/contact';
import { HeroBanner } from '@/components/sections/common/hero-banner';
import AutomatisationFAQ from '@/components/sections/services/automatisation/faq';
import { HowItWorks } from '@/components/sections/services/automatisation/how-it-works';

export default function AutomatisationPage() {
  return (
    <>
      <HeroBanner
        tag="Automatisation 🔁"
        title={['Création d’automatisation', 'optimisée pour votre activité']}
        description="Je crée des interfaces modernes et intuitives, centrées sur l'expérience utilisateur. J'accompagne les projets de création d'agent IA, de design, de développement, de maintenance et de référencement."
        cta="Automatisez mes tâches"
        image={{ src: '/automation-banner.png' }}
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
      <HowItWorks />
      <AutomatisationFAQ />
      <ContactSection />
    </>
  );
}
