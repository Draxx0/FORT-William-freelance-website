import ContactSection from '@/components/sections/common/contact';
import { HeroBanner } from '@/components/sections/common/hero-banner';
import ProjectsKeySteps from '@/components/sections/home/project-key-steps';
import AutomatisationFAQ from '@/components/sections/services/automatisation/faq';
import { HowItWorks } from '@/components/sections/services/automatisation/how-it-works';
import { CheckCircle, Code, Workflow } from 'lucide-react';

export default function AutomatisationPage() {
  return (
    <>
      <HeroBanner
        tag="Automatisation 🔁"
        title={['Création d’automatisation', 'optimisée pour votre activité']}
        description="Automatisez, optimisez, libérez du temps. Je conçois des automatisations sur-mesure pour simplifier vos processus et augmenter votre efficacité."
        cta="Automatiser maintenant"
        image={{ src: '/automation-banner.png' }}
        breadcrumb={{
          currentPage: 'Automatisation',
          intermediatePages: [
            {
              href: '/services',
              text: 'Services',
            },
          ],
        }}
      />
      <HowItWorks />
      <ProjectsKeySteps
        problems={[
          {
            title: '1. Analyse des processus à automatiser',
            description:
              "Nous commençons par analyser vos processus métiers et identifier les tâches manuelles ou répétitives qui peuvent être automatisées. Que ce soit pour la gestion des emails, des CRM, ou des bases de données, l’objectif est de gagner du temps et d'optimiser vos workflows.",
            icon: Workflow,
          },
          {
            title: '2. Conception & développement des automatisations',
            description:
              'Je crée des automatisations sur-mesure avec n8n pour intégrer vos outils existants et créer des flux de travail automatisés. Chaque scénario est conçu spécifiquement pour répondre à vos besoins, et n8n permet de relier plusieurs applications entre elles de manière fluide et efficace.',
            icon: Code,
          },
          {
            title: '3. Déploiement & suivi des automatisations',
            description:
              "Une fois les automatisations mises en place, je vous aide à les déployer et m'assure que tout fonctionne comme prévu. Je reste disponible pour assurer un suivi régulier, ajuster les flux si nécessaire, et apporter des améliorations continues pour répondre à l’évolution de vos besoins.",
            icon: CheckCircle,
          },
        ]}
      />
      <AutomatisationFAQ />
      <ContactSection />
    </>
  );
}
