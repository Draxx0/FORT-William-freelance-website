'use client';

import Section from '@/components/section';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ease = [0.16, 1, 0.3, 1];

import { Icons } from '@/components/icons';
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
import Safari from '@/components/safari';
import { AutomationBean } from '@/components/sections/services/automatisation/automation-bean';
import { Globe, Share2Icon } from 'lucide-react';

const features = [
  {
    Icon: Globe,
    name: 'Site vitrine',
    description: 'Je vous accompagne dans la création de votre site vitrine',
    href: '/services/site-vitrine',
    cta: 'Commencer',
    className: 'col-span-4 lg:col-span-2',
    background: (
      <div className="max-h-[400px] min-h-auto rounded-md shadow-md relative">
        <Safari
          url="https://williamfort.fr"
          src="/vitrine-banner.jpg"
          className="absolute right-2 top-4 sm:top-8 h-[240px] sm:h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105"
        />
      </div>
    ),
  },
  // {
  //   Icon: Bot,
  //   name: 'Agents IA',
  //   description: 'Je vous accompagne dans la création de votre agent IA',
  //   href: '/services/agent-ia',
  //   cta: 'Commencer',
  //   className: 'col-span-4 lg:col-span-2',
  //   background: (
  //     <HomeAgentIaServiceDemo className="absolute right-2 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
  //   ),
  // },
  // {
  //   Icon: ShoppingCart,
  //   name: 'Site e-commerce',
  //   description: 'Je vous accompagne dans la création de votre site e-commerce',
  //   href: '/services/site-e-commerce',
  //   cta: 'Commencer',
  //   className: 'col-span-3 lg:col-span-1',
  //   background: (
  //     <Marquee
  //       pauseOnHover
  //       className="absolute top-0 [--duration:60s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
  //     >
  //       <ThreeDMarquee className="" images={images} />
  //     </Marquee>
  //   ),
  // },
  {
    Icon: Share2Icon,
    name: 'Automatisations',
    description: 'Automatisation de vos tâches pour améliorer la productivité',
    href: '/services/automatisations',
    cta: 'Commencer',
    className: 'col-span-4 lg:col-span-2',
    background: (
      <AutomationBean className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
];

function BentoDemo() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}

export default function ServicesHome() {
  return (
    <Section
      id="services"
      title="Services"
      subtitle="Transformez votre activité"
      description="Je vous accompagne dans la création de solutions digitales efficaces, adaptées à vos besoins."
      className="bg-neutral-100 dark:bg-neutral-900"
    >
      <BentoDemo />

      <motion.div
        className="mx-auto  flex w-fit flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease }}
      >
        <Link
          href="/services"
          className={cn(
            buttonVariants({ variant: 'default' }),
            'mt-12 active:scale-[98%] transition-all ease-in-out duration-300 hover:opacity-80 dark:text-white text-background flex gap-2'
          )}
        >
          Voir les services
          <Icons.logo className="h-6 w-6" />
        </Link>
      </motion.div>
    </Section>
  );
}
