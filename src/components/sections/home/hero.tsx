'use client';

import { motion } from 'framer-motion';

import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const ease = [0.16, 1, 0.3, 1];

function HeroPill() {
  return (
    <motion.a
      href="/blog/5-signaux-qui-montrent-que-votre-site-web-a-besoin-d-etre-modernise"
      className="flex w-auto items-center space-x-2 rounded-full bg-[#dd3e3e]/10 px-2 py-1 ring-1 ring-accent whitespace-pre"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease }}
    >
      <div className="w-fit rounded-full bg-primary px-3 py-0.5 text-center text-xs font-medium text-white sm:text-sm">
        ✍️​ Blog
      </div>
      <p className="text-xs font-medium text-primary sm:text-sm">
        Dernier article
      </p>
      <svg
        width="12"
        height="12"
        className="ml-1"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.78141 5.33312L5.20541 1.75712L6.14808 0.814453L11.3334 5.99979L6.14808 11.1851L5.20541 10.2425L8.78141 6.66645H0.666748V5.33312H8.78141Z"
          fill="hsl(var(--primary))"
        />
      </svg>
    </motion.a>
  );
}

function HeroTitles() {
  return (
    <div className="flex w-full max-w-4xl flex-col space-y-4 overflow-hidden pt-8">
      <motion.h1
        className="text-center text-3xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl"
        initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
        animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease,
          staggerChildren: 0.2,
        }}
      >
        {['Faites passer', 'vos projets', 'au niveau', 'supérieur.'].map(
          (text, index) => (
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
          )
        )}
      </motion.h1>
      <motion.p
        className="mx-auto lg:max-w-xl text-center text-lg leading-7 text-muted-foreground sm:text-xl sm:leading-9 lg:text-balance"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
          ease,
        }}
      >
        Expert en développement de sites web et automatisations.
      </motion.p>
    </div>
  );
}

function HeroCTA() {
  return (
    <>
      <motion.p
        className="text-center mt-5 text-sm text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8, ease }}
      >
        Des sites modernes, fonctionnels et adaptés à vos besoins.
      </motion.p>
      <motion.div
        className="mx-auto mt-6 flex w-full max-w-2xl flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
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
    </>
  );
}

function HeroImage() {
  return (
    <motion.div
      className="relative mx-auto flex w-full items-center justify-center select-none pointer-events-none"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 1, ease }}
    >
      <Image
        src={'/profile.png'}
        alt="Photo de William FORT"
        width={0}
        height={0}
        sizes="100vw"
        quality={100}
        className="size-[40rem] object-contain"
      />
    </motion.div>
  );
}

export default function Hero2() {
  return (
    <section id="hero">
      <div className="relative flex w-full flex-col items-center justify-start px-4 pt-16 sm:px-6 sm:pt-24 md:pt-16 lg:px-8">
        <HeroPill />
        <HeroTitles />
        <HeroCTA />
        <HeroImage />
        <div className="pointer-events-none absolute inset-x-0 -bottom-12 h-1/3 bg-gradient-to-t from-background via-background to-transparent lg:h-1/4"></div>
      </div>
    </section>
  );
}
