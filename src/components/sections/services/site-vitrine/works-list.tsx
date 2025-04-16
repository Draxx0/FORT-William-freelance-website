import Section from '@/components/section';
import { ThreeDMarquee } from '@/components/ui/3d-marquee';

const images = [
  'https://assets.aceternity.com/cloudinary_bkp/3d-card.png',
  'https://assets.aceternity.com/animated-modal.png',
  'https://assets.aceternity.com/cloudinary_bkp/3d-card.png',
  'https://assets.aceternity.com/animated-modal.png',
  'https://assets.aceternity.com/cloudinary_bkp/3d-card.png',
  'https://assets.aceternity.com/animated-modal.png',
  'https://assets.aceternity.com/cloudinary_bkp/3d-card.png',
  'https://assets.aceternity.com/animated-modal.png',
  'https://assets.aceternity.com/cloudinary_bkp/3d-card.png',
  'https://assets.aceternity.com/animated-modal.png',
  'https://assets.aceternity.com/cloudinary_bkp/3d-card.png',
  'https://assets.aceternity.com/animated-modal.png',
  'https://assets.aceternity.com/cloudinary_bkp/3d-card.png',
  'https://assets.aceternity.com/animated-modal.png',
  'https://assets.aceternity.com/cloudinary_bkp/3d-card.png',
  'https://assets.aceternity.com/animated-modal.png',
  'https://assets.aceternity.com/cloudinary_bkp/3d-card.png',
  'https://assets.aceternity.com/animated-modal.png',
  'https://assets.aceternity.com/cloudinary_bkp/3d-card.png',
  'https://assets.aceternity.com/animated-modal.png',
  'https://assets.aceternity.com/cloudinary_bkp/3d-card.png',
  'https://assets.aceternity.com/animated-modal.png',
  'https://assets.aceternity.com/cloudinary_bkp/3d-card.png',
  'https://assets.aceternity.com/animated-modal.png',
  'https://assets.aceternity.com/cloudinary_bkp/3d-card.png',
  'https://assets.aceternity.com/animated-modal.png',
  'https://assets.aceternity.com/cloudinary_bkp/3d-card.png',
  'https://assets.aceternity.com/animated-modal.png',
  'https://assets.aceternity.com/cloudinary_bkp/3d-card.png',
  'https://assets.aceternity.com/animated-modal.png',
];

export const WorksList = () => {
  return (
    <Section
      id="works-list"
      title="Réalisations"
      subtitle="Des sites de clients satisfait"
    >
      <ThreeDMarquee className="mt-16" images={images} />
    </Section>
  );
};
