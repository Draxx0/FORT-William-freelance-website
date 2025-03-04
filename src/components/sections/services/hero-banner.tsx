'use client';

import { Icons } from '@/components/icons';
import Section from '@/components/section';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Tag } from '../../ui/Tag';

const ease = [0.16, 1, 0.3, 1];

export const HeroBanner = () => {
  return (
    <Section>
      <div className="flex flex-col md:flex-row justify-between gap-12">
        <div className="space-y-4 md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <Tag>Services 🚀</Tag>
          </motion.div>

          <motion.h1
            className="text-2xl md:text-3xl font-medium leading-tight text-foreground"
            initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease,
              staggerChildren: 0.2,
            }}
          >
            {[
              'Des solutions',
              'digitales',
              'sur mesure ',
              'pour',
              'votre',
              'activité',
            ].map((text, index) => (
              <motion.span
                key={index}
                className="inline-block px-1 md:px-2 text-balance font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease,
                }}
              >
                {text}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="text-lg leading-7 text-muted-foreground sm:text-xl sm:leading-9"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.8,
              ease,
            }}
          >
            Création de sites web performants, automatisation de tâches
            répétitives… Profitez de mon expertise pour optimiser votre présence
            en ligne et gagner du temps. Concentrez-vous sur l’essentiel, je
            m’occupe du reste !
          </motion.p>

          <motion.div
            className="w-fit mt-6 flex max-w-2xl flex-col sm:flex-row sm:space-x-4 sm:space-y-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease }}
          >
            <Link
              href="#contact"
              className={cn(
                buttonVariants({ variant: 'default' }),
                'w-full active:scale-[98%] transition-all ease-in-out duration-300 hover:opacity-80 sm:w-auto dark:text-white text-background flex gap-2'
              )}
            >
              Démarrons ensemble
              <Icons.logo className="h-6 w-6" />
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1, ease }}
        >
          <Image
            src={'/service-image.jpg'}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-full max-h-[400px] rounded-md shadow-md object-cover"
          />

          <Image
            src={'/service-image.jpg'}
            alt="Photo de"
            width={200}
            height={200}
            className="absolute -bottom-8 left-0 md:-left-8 rounded-md shadow-md "
          />
        </motion.div>
      </div>
    </Section>
  );
};
