import Section from '@/components/section';
import { AutomationBean } from '@/components/sections/services/automatisation/automation-bean';

import { File, GitCompareArrows, Share2Icon } from 'lucide-react';

import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
import Marquee from '@/components/magicui/marquee';
import { cn } from '@/lib/utils';
import { AnimatedListAutomation } from './animated-list-automation';

export const HowItWorks = () => {
  return (
    <Section
      id="Automatisation"
      title="Automatisation"
      subtitle="Comment ça marche ?"
      description="De l’analyse de vos besoins à la mise en place de solutions automatisées, en toute simplicité."
    >
      <BentoDemo />
    </Section>
  );
};

const files = [
  {
    name: 'facture_2024_01.pdf',
    body: 'Facture automatiquement sauvegardée dans votre système de gestion comptable.',
  },
  {
    name: 'rapport_ventes.xlsx',
    body: 'Rapport de ventes généré automatiquement et archivé dans votre dossier dédié.',
  },
  {
    name: 'contrat_client.docx',
    body: 'Contrat client sauvegardé automatiquement avec horodatage et versioning.',
  },
  {
    name: 'backup_donnees.sql',
    body: 'Sauvegarde automatique de votre base de données selon un planning défini.',
  },
  {
    name: 'export_crm.csv',
    body: 'Export automatique de vos contacts CRM vers votre système de stockage.',
  },
];

const features = [
  {
    Icon: GitCompareArrows,
    name: 'Déroulement automatique',
    description: 'Lancement automatique de tâches',
    href: '#',
    cta: 'Commencer',
    className: 'col-span-3 lg:col-span-2',
    background: (
      <AnimatedListAutomation className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
    ),
  },
  {
    Icon: File,
    name: 'Sauvegarde automatique',
    description:
      'Automatisez la sauvegarde de vos fichiers, factures et documents importants.',
    href: '#',
    cta: 'En savoir plus',
    className: 'col-span-3 lg:col-span-2',
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              'relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4',
              'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
              'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
              'transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none'
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: Share2Icon,
    name: 'Automatisation de tâches',
    description: 'Automatisation de tâches pour améliorer la productivité',
    href: '#',
    cta: 'Commencer',
    className: 'col-span-3 lg:col-span-4',
    background: (
      <AutomationBean className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
];

export function BentoDemo() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
