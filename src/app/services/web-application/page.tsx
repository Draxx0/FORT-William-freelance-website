import ContactSection from '@/components/sections/common/contact';
import { HeroBanner } from '@/components/sections/common/hero-banner';
import ProjectsKeySteps from '@/components/sections/home/project-key-steps';
import TestimonialsCarousel from '@/components/sections/home/testimonials-carousel';
import WebApplicationFAQ from '@/components/sections/services/web-application/faq';
import { WorksList } from '@/components/sections/services/web-application/works-list';
import { Brain, Monitor, Upload } from 'lucide-react';

export default function WebApplicationPage() {
  return (
    <>
      <HeroBanner
        tag="Application web 💻"
        title={[
          "Développement d'application web",
          'sur-mesure pour votre activité',
        ]}
        className="mb-0"
        description="Une application web conçue pour vos besoins spécifiques. Architecture robuste, fonctionnalités avancées, expérience utilisateur optimale. Transformez votre vision en solution digitale performante."
        cta="Je veux une application"
        video={{ src: 'https://williamfort.fr/videos/ridmi.mp4' }}
        breadcrumb={{
          currentPage: 'Application web',
          intermediatePages: [
            {
              href: '/services',
              text: 'Services',
            },
          ],
        }}
      />
      <ProjectsKeySteps
        problems={[
          {
            title: '1. Échange & compréhension',
            description:
              "On commence par discuter de votre projet, vos besoins fonctionnels et vos objectifs. L'idée est de bien comprendre vos processus métier pour créer une application qui optimise vraiment votre activité.",
            icon: Brain,
          },
          {
            title: '2. Conception & développement',
            description:
              "Je développe une application robuste et évolutive, avec une architecture moderne. L'objectif : une solution sur-mesure qui automatise vos processus, facilite la collaboration et s'adapte à votre croissance.",
            icon: Monitor,
          },
          {
            title: '3. Mise en ligne & accompagnement',
            description:
              "Une fois l'application validée et testée, je m'occupe du déploiement. Je vous accompagne dans la prise en main, forme vos équipes si besoin, et reste disponible pour les évolutions futures.",
            icon: Upload,
          },
        ]}
      />
      <WorksList />
      <WebApplicationFAQ />
      <TestimonialsCarousel />
      <ContactSection />
    </>
  );
}
