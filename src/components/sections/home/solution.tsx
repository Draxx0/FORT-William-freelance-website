'use client';

import Safari from '@/components/safari';
import Section from '@/components/section';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import FlickeringGrid from '../../magicui/flickering-grid';
import Ripple from '../../magicui/ripple';

const ease = [0.16, 1, 0.3, 1];

const features = [
  {
    title: 'Développement de landing pages optimisées',
    description:
      'Je conçois des sites web adaptés à vos besoins, de la maquette à la mise en ligne. Que ce soit pour une vitrine, un portfolio ou une solution plus complexe, chaque site est personnalisé pour refléter votre image et atteindre vos objectifs.',
    className: 'hover:bg-red-500/10 transition-all duration-500 ease-out',
    content: (
      <>
        <Safari
          src={`/vitrine-banner.webp`}
          url="https://williamfort.fr"
          className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
        />
      </>
    ),
  },
  {
    title: '    Développement de site e-commerce Shopify',
    description:
      "Je développe des landing pages efficaces pour maximiser vos conversions. Chaque page est conçue pour répondre à des objectifs précis, qu’il s’agisse de générer des leads, de promouvoir un produit ou d'engager votre audience.",
    className:
      'order-3 xl:order-none hover:bg-blue-500/10 transition-all duration-500 ease-out',
    content: (
      <Safari
        src={`/shopify-banner.webp`}
        url="https://shop.williamfort.fr"
        className="-mb-24 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
      />
    ),
  },
  {
    title: "Création d'agent IA",
    description:
      "Je crée des interfaces modernes et intuitives, centrées sur l'expérience utilisateur. Chaque design est pensé pour offrir une navigation fluide, un impact visuel fort et une ergonomie optimale, tout en étant fonctionnel.",
    className:
      'md:row-span-2 hover:bg-orange-500/10 transition-all duration-500 ease-out',
    content: (
      <>
        <FlickeringGrid
          className="z-0 absolute inset-0 [mask:radial-gradient(circle_at_center,#fff_400px,transparent_0)]"
          squareSize={4}
          gridGap={6}
          color="#000"
          maxOpacity={0.1}
          flickerChance={0.1}
          height={800}
          width={800}
        />
        <Safari
          src={`/agenti-ia-banner.png`}
          imageWidthAuto
          url="https://agent-ia.williamfort.fr"
          className="-mb-48 ml-12 mt-16 h-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-x-[-10px] transition-all duration-300"
        />
      </>
    ),
  },
  {
    title: 'Automatisation',
    description:
      "Je vous aide à automatiser vos processus métiers grâce à Make.com, une plateforme puissante pour connecter vos outils et automatiser vos tâches répétitives. Que ce soit pour l'intégration d'applications, la gestion de projets, ou l'automatisation de campagnes marketing, je simplifie vos workflows pour augmenter votre productivité.",
    className:
      'flex-row order-4 md:col-span-2 md:flex-row xl:order-none hover:bg-green-500/10 transition-all duration-500 ease-out',
    content: (
      <>
        <Ripple className="absolute -bottom-full" />
        <Safari
          src={`/automation-banner.png`}
          url="https://automation.williamfort.fr"
          className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
        />
      </>
    ),
  },
];

export default function Component() {
  return (
    <Section
      id="services"
      title="Services"
      subtitle="Transformez votre activité"
      description="Je vous accompagne dans la création de solutions digitales efficaces, adaptées à vos besoins."
      className="bg-neutral-100 dark:bg-neutral-900"
    >
      <div className="mx-auto mt-16 grid max-w-sm grid-cols-1 gap-6 text-gray-500 md:max-w-3xl md:grid-cols-2 xl:grid-rows-2 md:grid-rows-3 xl:max-w-6xl xl:auto-rows-fr xl:grid-cols-3">
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
      </div>

      <motion.div
        className="mx-auto mt-6 flex w-fit flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease }}
      >
        <Link
          href="#contact"
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
