import Blog from '@/components/sections/common/blog';
import ContactSection from '@/components/sections/common/contact';
import Hero from '@/components/sections/home/hero';
import ProjectsKeySteps from '@/components/sections/home/project-key-steps';
import Solution from '@/components/sections/home/solution';

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsKeySteps />
      <Solution />
      {/* <Realisations /> */}
      {/* <TestimonialsCarousel /> */}
      <Blog />
      <ContactSection />
    </>
  );
}
