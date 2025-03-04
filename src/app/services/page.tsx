import ContactSection from '@/components/sections/common/contact';
import ProjectsKeySteps from '@/components/sections/home/project-key-steps';
import TestimonialsCarousel from '@/components/sections/home/testimonials-carousel';
import { HeroBanner } from '@/components/sections/services/hero-banner';
import { Services } from '@/components/sections/services/services';

export default function ServicesPage() {
  return (
    <>
      <HeroBanner />
      <Services />
      <ProjectsKeySteps />
      <TestimonialsCarousel />
      <ContactSection />
    </>
  );
}
