'use client';
import { Icons } from '@/components/icons';
import { AnimatedBeam } from '@/components/magicui/animated-bean';
import Section from '@/components/section';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React, { forwardRef, useRef } from 'react';

const examples = [
  {
    title: 'Collecte de leads automatique',
    description:
      'Plus de saisie manuelle, vos prospects sont centralisés instantanément.',
    code: <LeadsCollect />,
  },
  {
    title: 'Envoi et archivage automatique des factures',
    description:
      'Envoi automatique au client + sauvegarde dans Google Drive. Vous ne touchez plus à rien.',
    code: <InvoiceGeneration />,
  },
  {
    title: 'Rappel automatique de paiement',
    description:
      'Relancer automatiquement un client X jours après émission d’une facture, si le paiement n’a pas été reçu.',
    code: <PaymentReminder />,
  },
  {
    title: 'Suivi de commandes e-commerce',
    description:
      'Chaque nouvelle commande est automatiquement enregistrée, notifiée sur Slack ou autre et envoyée par email. Un suivi simple et centralisé, sans ouvrir votre boutique.',
    code: <EcommerceFollowUp />,
  },
];

export const AutomatisationsExamples = () => {
  return (
    <Section
      id="automation-examples"
      title="Exemples d'automatisations"
      subtitle="Des exemples de solutions automatisées"
    >
      <div className="border-x mx-5 md:mx-10 relative mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden gap-y-16">
          {examples.map((example) => (
            <div
              key={example.title}
              className="flex flex-col items-center justify-between w-full gap-2 min-h-[275px]"
            >
              <div className="space-y-4 text-center px-2">
                <h3 className="text-xl lg:text-2xl font-bold">
                  {example.title}
                </h3>
                <p className="text-gray-500 max-w-lg text-center">
                  {example.description}
                </p>
              </div>
              {example.code}
            </div>
          ))}
        </div>
      </div>

      <a
        href="#contact"
        className={cn(
          buttonVariants({ variant: 'default' }),
          'w-fit active:scale-[98%] transition-all ease-in-out duration-300 hover:opacity-80 sm:w-fit mx-auto dark:text-white text-background flex gap-2'
        )}
      >
        J&apos;automatise <Icons.logo />
      </a>
    </Section>
  );
};

function LeadsCollect() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex w-full max-w-full mx-auto items-center justify-center overflow-hidden p-6"
      ref={containerRef}
    >
      <div className="flex size-full flex-col items-stretch justify-between gap-24">
        <div className="flex flex-row justify-between">
          <Circle ref={div1Ref}>
            <Icons.tally />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.sheets width={25} height={20} />
          </Circle>
          <Circle ref={div3Ref}>
            <Icons.slack />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        duration={3}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
      />
      <AnimatedBeam
        duration={3}
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div3Ref}
      />
    </div>
  );
}

function InvoiceGeneration() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  return (
    <div
      className="relative flex w-full max-w-full mx-auto items-center justify-center gap-24 overflow-hidden px-3 py-6"
      ref={containerRef}
    >
      <div className="flex size-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row justify-between">
          <Circle ref={div1Ref}>
            <Icons.stripe width={40} height={40} />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.pdf />
          </Circle>
          <Circle ref={div3Ref}>
            <Icons.gmail width={30} height={30} />
          </Circle>
          <Circle ref={div3Ref}>
            <Icons.googleDrive width={30} height={30} />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        duration={3}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
      />
      <AnimatedBeam
        duration={3}
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div3Ref}
      />
      <AnimatedBeam
        duration={3}
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
      />
    </div>
  );
}

function PaymentReminder() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  return (
    <div
      className="relative flex w-full max-w-full mx-auto items-center justify-center gap-24 overflow-hidden px-3 py-6"
      ref={containerRef}
    >
      <div className="flex size-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row justify-between">
          <Circle ref={div1Ref}>
            <Icons.airtable width={30} height={30} />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.gmail width={30} height={30} />
          </Circle>
          <Circle ref={div3Ref}>
            <Icons.slack />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        duration={3}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
      />
      <AnimatedBeam
        duration={3}
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div3Ref}
      />
    </div>
  );
}

function EcommerceFollowUp() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex w-full max-w-full mx-auto items-center justify-center gap-24 overflow-hidden px-3 py-6"
      ref={containerRef}
    >
      <div className="flex size-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row justify-between">
          <Circle ref={div1Ref}>
            <Icons.shopify width={30} height={30} />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.sheets width={25} height={25} />
          </Circle>
          <Circle ref={div3Ref}>
            <Icons.gmail width={30} height={30} />
          </Circle>
          <Circle ref={div3Ref}>
            <Icons.slack />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        duration={3}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
      />
      <AnimatedBeam
        duration={3}
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div3Ref}
      />
      <AnimatedBeam
        duration={3}
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
      />
    </div>
  );
}

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'z-10 flex size-20 items-center justify-center rounded-full border-2  bg-white p-4 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]',
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = 'Circle';
