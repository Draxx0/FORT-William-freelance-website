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
        description="Des solutions digitales personnalisées pour répondre à vos besoins spécifiques. Je vous aide à optimiser votre présence en ligne, automatiser vos processus et intégrer des outils puissants, le tout sur-mesure, pour booster votre activité et votre efficacité."
        cta=" Construisons votre solution digitale"
        image={{
          src: '/service-image.jpg',
        }}
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
