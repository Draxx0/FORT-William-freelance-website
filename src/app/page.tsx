import Blog from '@/components/sections/common/blog';
import ContactSection from '@/components/sections/common/contact';
import Hero from '@/components/sections/home/hero';
import Logos from '@/components/sections/home/logos';
import ProjectsKeySteps from '@/components/sections/home/project-key-steps';
import Realisations from '@/components/sections/home/realisations';
import Solution from '@/components/sections/home/solution';
import TestimonialsCarousel from '@/components/sections/home/testimonials-carousel';

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
