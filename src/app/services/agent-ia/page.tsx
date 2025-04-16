import ContactSection from '@/components/sections/common/contact';
import { HeroBanner } from '@/components/sections/common/hero-banner';
import ProjectsKeySteps from '@/components/sections/home/project-key-steps';
import AgentIaFAQ from '@/components/sections/services/agents-ia/faq';
import { HowItWorks } from '@/components/sections/services/agents-ia/how-it-works';
import { Brain, Link, Wrench } from 'lucide-react';

export default function AgentIAPage() {
  return (
    <>
      <HeroBanner
        tag="Agent IA 🤖"
        title={['Création d’agent IA', 'optimisée pour votre activité']}
        description="Votre nouveau collègue travaille 24/7.
        Des agents IA sur-mesure qui comprennent, agissent et automatisent pour vous. Gagnez du temps, améliorez l’expérience client, et passez à la vitesse supérieure."
        cta="Créons mon Agent"
        image={{ src: '/agenti-ia-banner.png' }}
        breadcrumb={{
          currentPage: 'Création d’agent IA',
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
            title: '1. Identification des cas d’usage',
            description:
              'Nous commençons par analyser ensemble vos besoins. Quelles tâches souhaitez-vous automatiser ? Quelles actions pourraient être déléguées à un agent IA ? Cette étape permet de cibler les cas d’usage concrets pour maximiser l’impact de la solution.',
            icon: Brain,
          },
          {
            title: '2. Conception & automatisation avec n8n',
            description:
              'Je crée des agents IA personnalisés en utilisant n8n pour automatiser vos processus métiers. Ces agents interagissent avec vos outils existants (CRM, emails, bases de données, etc.) et réalisent des actions automatisées selon des scénarios que nous définissons ensemble.',
            icon: Wrench,
          },
          {
            title: '3. Intégration & suivi des automatisations',
            description:
              "Une fois l'agent IA développé, je l’intègre dans votre environnement de travail. Je reste à vos côtés pour vous assurer que tout fonctionne comme prévu et pour effectuer des ajustements au besoin, afin d’optimiser continuellement vos workflows.",
            icon: Link,
          },
        ]}
      />
      <AgentIaFAQ />
      <ContactSection />
    </>
  );
}
