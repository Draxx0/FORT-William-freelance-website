'use client';

import Section from '@/components/section';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ease = [0.16, 1, 0.3, 1];

import { HomeAgentIaServiceDemo } from '@/components/home-animated-agent-ia-list';
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
import Marquee from '@/components/magicui/marquee';
import { AutomationBean } from '@/components/sections/services/automatisation/automation-bean';
import { ThreeDMarquee } from '@/components/ui/3d-marquee';
import { Bot, Globe, Share2Icon } from 'lucide-react';

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

const features = [
  {
    Icon: Globe,
    name: 'Site vitrine',
    description: 'Je vous accompagne dans la création de votre site vitrine',
    href: '/services/site-vitrine',
    cta: 'Commencer',
    className: 'col-span-3 lg:col-span-1',
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-0 [--duration:60s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        <ThreeDMarquee className="" images={images} />
      </Marquee>
    ),
  },
  {
    Icon: Bot,
    name: 'Agents IA',
    description: 'Je vous accompagne dans la création de votre agent IA',
    href: '/services/agent-ia',
    cta: 'Commencer',
    className: 'col-span-3 lg:col-span-2',
    background: (
      <HomeAgentIaServiceDemo className="absolute right-2 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
    ),
  },
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
    className: 'col-span-3 lg:col-span-4',
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
      {/* <div className="mx-auto mt-16 grid max-w-sm grid-cols-1 gap-6 text-gray-500 md:max-w-3xl md:grid-cols-2 xl:grid-rows-2 md:grid-rows-3 xl:max-w-6xl xl:auto-rows-fr xl:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={cn(
              'group relative items-start overflow-hidden bg-neutral-50 dark:bg-neutral-800 p-6 rounded-2xl',
              feature.className
            )}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              type: 'spring',
              stiffness: 100,
              damping: 30,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="font-semibold mb-2 text-primary">
                {feature.title}
              </h3>
              <p className="text-foreground">{feature.description}</p>
            </div>
            {feature.content}
            <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-neutral-50 dark:from-neutral-900 pointer-events-none"></div>
          </motion.div>
        ))}
      </div> */}

      <BentoDemo />

      <motion.div
        className="mx-auto mt-6 flex w-fit flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
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
        </Link>
      </motion.div>
    </Section>
  );
}
