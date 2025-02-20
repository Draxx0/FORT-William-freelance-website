import Blog from '@/components/sections/blog';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/sections/footer';
import Header from '@/components/sections/header';
import Hero from '@/components/sections/hero';
import Logos from '@/components/sections/logos';
import Problem from '@/components/sections/problem';
import Solution from '@/components/sections/solution';
import TestimonialsCarousel from '@/components/sections/testimonials-carousel';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Logos />
      <Problem />
      <Solution />
      {/* <HowItWorks /> */}
      {/* <Features /> */}
      <TestimonialsCarousel />
      {/* <Testimonials />
      <Pricing /> */}
      {/* <FAQ /> */}
      <Blog />
      <ContactSection />
      <Footer />
    </main>
  );
}
