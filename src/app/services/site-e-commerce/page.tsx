import ContactSection from '@/components/sections/common/contact';
import { HeroBanner } from '@/components/sections/common/hero-banner';

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
      <ContactSection />
    </>
  );
}
