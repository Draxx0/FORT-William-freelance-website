import Blog from '@/components/sections/common/blog';
import ContactSection from '@/components/sections/common/contact';
import { HeroBanner } from '@/components/sections/services/automatisation/HeroBanner';

export default function ServicesPage() {
  return (
    <>
      <HeroBanner />
      <Blog />
      <ContactSection />
    </>
  );
}
