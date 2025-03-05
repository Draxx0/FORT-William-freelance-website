import ContactSection from '@/components/sections/common/contact';
import { HeroBanner } from '@/components/sections/common/hero-banner';
import ProjectsKeySteps from '@/components/sections/home/project-key-steps';
import TestimonialsCarousel from '@/components/sections/home/testimonials-carousel';
import { Services } from '@/components/sections/services/services';

export default function ServicesPage() {
  return (
    <>
      <HeroBanner
        tag="Services 🚀"
        title={[
          'Des solutions',
          'digitales',
          'sur mesure ',
          'pour',
          'votre',
          'activité',
        ]}
        description="Création de sites web performants, automatisation de tâches
            répétitives… Profitez de mon expertise pour optimiser votre présence
            en ligne et gagner du temps. Concentrez-vous sur l’essentiel, je
            m’occupe du reste !"
        cta=" Démarrons ensemble"
        images={[
          {
            src: '/service-image.jpg',
            alt: 'Vitrine',
          },
          {
            src: '/service-image.jpg',
            alt: 'Vitrine',
          },
        ]}
        breadcrumb={{
          currentPage: 'Services',
        }}
      />
      <Services />
      <ProjectsKeySteps />
      <TestimonialsCarousel />
      <ContactSection />
    </>
  );
}
