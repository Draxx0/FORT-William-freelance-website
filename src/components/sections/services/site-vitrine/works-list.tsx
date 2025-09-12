import Section from '@/components/section';
import { ThreeDMarquee } from '@/components/ui/3d-marquee';

const images = [
  '/vitrine-banner.jpg',
  '/vitrine-banner.jpg',
  '/vitrine-banner.jpg',
  '/vitrine-banner.jpg',
  '/vitrine-banner.jpg',
  '/vitrine-banner.jpg',
  '/vitrine-banner.jpg',
  '/vitrine-banner.jpg',
  '/vitrine-banner.jpg',
  '/vitrine-banner.jpg',
  '/vitrine-banner.jpg',
  '/vitrine-banner.jpg',
  '/vitrine-banner.jpg',
  '/vitrine-banner.jpg',
  '/vitrine-banner.jpg',
  '/vitrine-banner.jpg',
  '/vitrine-banner.jpg',
  '/vitrine-banner.jpg',
  '/vitrine-banner.jpg',
  '/vitrine-banner.jpg',
  '/vitrine-banner.jpg',
  '/vitrine-banner.jpg',
  '/vitrine-banner.jpg',
  '/vitrine-banner.jpg',
  '/vitrine-banner.jpg',
  '/vitrine-banner.jpg',
  '/vitrine-banner.jpg',
  '/vitrine-banner.jpg',
  '/vitrine-banner.jpg',
  '/vitrine-banner.jpg',
  '/vitrine-banner.jpg',
  '/vitrine-banner.jpg',
  '/vitrine-banner.jpg',
  '/vitrine-banner.jpg',
  '/vitrine-banner.jpg',
  '/vitrine-banner.jpg',
];

export const WorksList = () => {
  return (
    <Section
      id="works-list"
      title="Réalisations"
      subtitle="Des sites de clients satisfait"
    >
      <ThreeDMarquee className="mt-8" images={images} />
    </Section>
  );
};
