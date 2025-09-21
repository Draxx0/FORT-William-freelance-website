import Blog from '@/components/sections/common/blog';
import ContactSection from '@/components/sections/common/contact';
import FAQ from '@/components/sections/home/faq';
import Hero from '@/components/sections/home/hero';
import ProjectsKeySteps from '@/components/sections/home/project-key-steps';
import Solution from '@/components/sections/home/solution';
import TestimonialsCarousel from '@/components/sections/home/testimonials-carousel';

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsKeySteps />
      <Solution />
      <TestimonialsCarousel />
      <Blog />
      <FAQ />
      <ContactSection />
    </>
  );
}
