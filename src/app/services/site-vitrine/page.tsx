import ContactSection from '@/components/sections/common/contact';
import { HeroBanner } from '@/components/sections/common/hero-banner';
import ProjectsKeySteps from '@/components/sections/home/project-key-steps';
import TestimonialsCarousel from '@/components/sections/home/testimonials-carousel';
import VitrineFAQ from '@/components/sections/services/site-vitrine/faq';
import { Brain, Monitor, Upload } from 'lucide-react';

export default function SiteVitrinePage() {
  return (
    <>
      <HeroBanner
        tag="Site vitrine 💻"
        title={[
          'Développement de site vitrine',
          'optimisé pour votre activité',
        ]}
        className="mb-0"
        description="Un site vitrine pensé pour votre activité. Structure optimisée, performance assurée, fonctionnalités adaptées. Votre présence en ligne mérite mieux qu'un template."
        cta="Je veux un site"
        image={{ src: '/vitrine-banner.jpg' }}
        breadcrumb={{
          currentPage: 'Site vitrine',
          intermediatePages: [
            {
              href: '/services',
              text: 'Services',
            },
          ],
        }}
      />
      {/* <WorksList /> */}
      <ProjectsKeySteps
        problems={[
          {
            title: '1. Échange & compréhension',
            description:
              'On commence par discuter de votre activité, vos objectifs et le message que vous souhaitez transmettre. L’idée est de bien cerner votre univers pour créer un site qui vous ressemble et parle à votre audience.',
            icon: Brain,
          },
          {
            title: '2. Conception & développement',
            description:
              'Je développe un site rapide, sécurisé et évolutif, en m’appuyant sur des technologies modernes. L’objectif : un site vitrine sur-mesure qui reflète votre image et offre une expérience fluide à vos visiteurs.',
            icon: Monitor,
          },
          {
            title: '3. Mise en ligne & accompagnement',
            description:
              'Une fois le site validé, je m’occupe de la mise en ligne. Je reste disponible après le lancement pour les ajustements, les évolutions, ou vous former à la prise en main si besoin.',
            icon: Upload,
          },
        ]}
      />
      <VitrineFAQ />
      <TestimonialsCarousel />
      <ContactSection />
    </>
  );
}
