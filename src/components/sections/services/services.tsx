import Section from '@/components/section';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const ServicesData = [
  {
    title: 'Site vitrine',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro hic libero sed reiciendis a ad non quis aut aperiam vero? Dignissimos officia facilis non reiciendis, reprehenderit expedita sed soluta perferendis!<br /> <br /> Earum modi molestias tempora, ipsum, perspiciatis impedit itaque omnis sed recusandae veritatis ab cupiditate nemo illum aliquam laudantium obcaecati optio, eaque praesentium explicabo magni qui mollitia! Quisquam voluptatem nemo incidunt.',
    image: {
      src: '/vitrine-banner.webp',
      alt: 'Vitrine',
    },
    altImage: {
      src: '/code-logo.png',
      alt: 'VSCODE Logo',
    },
    cta: 'Digitaliser mon activité ',
  },
  {
    title: 'Développement de site e-commerce Shopify',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro hic libero sed reiciendis a ad non quis aut aperiam vero? Dignissimos officia facilis non reiciendis, reprehenderit expedita sed soluta perferendis!<br /> <br /> Earum modi molestias tempora, ipsum, perspiciatis impedit itaque omnis sed recusandae veritatis ab cupiditate nemo illum aliquam laudantium obcaecati optio, eaque praesentium explicabo magni qui mollitia! Quisquam voluptatem nemo incidunt.',
    image: {
      src: '/shopify-banner.webp',
      alt: 'Shopify',
    },
    altImage: {
      src: '/shopify-logo.png',
      alt: 'Shopify Logo',
    },
    cta: 'Vendre mes produits en ligne ',
  },
  {
    title: "Création d'agent IA",
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro hic libero sed reiciendis a ad non quis aut aperiam vero? Dignissimos officia facilis non reiciendis, reprehenderit expedita sed soluta perferendis!<br /> <br /> Earum modi molestias tempora, ipsum, perspiciatis impedit itaque omnis sed recusandae veritatis ab cupiditate nemo illum aliquam laudantium obcaecati optio, eaque praesentium explicabo magni qui mollitia! Quisquam voluptatem nemo incidunt.',
    image: {
      src: '/agenti-ia-banner.png',
      alt: 'Agent IA',
    },
    altImage: {
      src: '/gpt-logo.webp',
      alt: 'GPT Logo',
    },
    cta: 'Créer des solutions intelligentes',
  },
  {
    title: 'Automatisation',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro hic libero sed reiciendis a ad non quis aut aperiam vero? Dignissimos officia facilis non reiciendis, reprehenderit expedita sed soluta perferendis!<br /> <br /> Earum modi molestias tempora, ipsum, perspiciatis impedit itaque omnis sed recusandae veritatis ab cupiditate nemo illum aliquam laudantium obcaecati optio, eaque praesentium explicabo magni qui mollitia! Quisquam voluptatem nemo incidunt.',
    image: {
      src: '/automation-banner.png',
      alt: 'Automatisation',
    },
    altImage: {
      src: '/n8n-logo.png',
      alt: 'N8N Logo',
    },
    cta: 'Automatiser mes tâches',
  },
];

export const Services = () => {
  return (
    <Section
      id="services"
      title="Services"
      subtitle="Transformez votre activité"
      description="Je vous accompagne dans la création de solutions digitales efficaces, adaptées à vos besoins."
      className="bg-neutral-100 dark:bg-neutral-900 pb-24"
    >
      <div className="space-y-24 mt-24">
        {' '}
        {ServicesData.map((service, i) => (
          <div
            key={i}
            className={cn(
              'flex justify-between flex-col md:flex-row gap-12 md:ap-24',
              {
                'md:flex-row-reverse': i % 2 !== 0,
              }
            )}
          >
            <div className="md:w-2/5 w-full relative">
              <Image
                src={service.image.src}
                alt={service.image.alt}
                width={0}
                sizes="100vw"
                height={0}
                className="min-h-[400px] max-h-[400px] w-full rounded-md shadow-md object-cover"
              />

              <div className="absolute -bottom-8 left-0 md:-left-8 size-24 flex items-center justify-center p-3 text-5xl rounded-full bg-neutral-200 dark:bg-neutral-800">
                <Image
                  src={service.altImage.src}
                  alt={service.altImage.alt}
                  width={36}
                  height={36}
                />
              </div>
            </div>

            <div className="space-y-4 flex-1">
              <h3 className="text-3xl font-semibold">{service.title}</h3>
              <p
                className="text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: service.description }}
              />
              <Link
                href="#contact"
                className={cn(
                  buttonVariants({ variant: 'default' }),
                  'w-fit active:scale-[98%] transition-all ease-in-out duration-300 hover:opacity-80 sm:w-auto dark:text-white text-background'
                )}
              >
                {service.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
