import { Icons } from '@/components/icons';
import Section from '@/components/section';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function CtaSection() {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Prêt à faire décoller votre activité ?"
      className="bg-primary/10 rounded-xl py-16"
    >
      <div className="flex flex-col w-full sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
        <Link
          href="/contact"
          className={cn(
            buttonVariants({ variant: 'default' }),
            'w-full active:scale-[98%] dark:text-white transition-all ease-in-out duration-300 hover:opacity-80 sm:w-auto text-background flex gap-2'
          )}
        >
          Contactez-moi
          <Icons.logo className="h-6 w-6" />
        </Link>
      </div>
    </Section>
  );
}
