import ContactSection from '@/components/sections/common/contact';
import { HeroBanner } from '@/components/sections/common/hero-banner';

export default function SiteVitrinePage() {
  return (
    <>
      <HeroBanner
        tag="Site vitrine 💻"
        title={[
          'Développement de site vitrine',
          'optimisé pour votre activité',
        ]}
        description="Je développe des sites vitrine optimisés pour votre activité. J'accompagne les projets de création de site vitrine, de design, de développement, de maintenance et de référencement."
        cta="Démarrons ensemble"
        images={[
          { src: '/vitrine-banner.webp', alt: 'Vitrine' },
          { src: '/vitrine-banner.webp', alt: 'Vitrine' },
        ]}
        breadcrumb={{
          currentPage: 'Site vitrine',
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
