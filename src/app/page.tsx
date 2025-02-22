import Blog from '@/components/sections/blog';
import ContactSection from '@/components/sections/contact';
import Hero from '@/components/sections/hero';
import Logos from '@/components/sections/logos';
import ProjectsKeySteps from '@/components/sections/project-key-steps';
import Realisations from '@/components/sections/realisations';
import Solution from '@/components/sections/solution';
import TestimonialsCarousel from '@/components/sections/testimonials-carousel';

export default function Home() {
  return (
    <>
      <Hero />
      <Logos />
      <ProjectsKeySteps />
      <Solution />
      <Realisations />
      <TestimonialsCarousel />
      <Blog />
      <ContactSection />
    </>
  );
}
