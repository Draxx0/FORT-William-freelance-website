import Section from '@/components/section';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const ServicesData = [
  {
    title: 'Site vitrine',
    description:
      "Un site vitrine optimisé pour refléter votre activité et attirer vos clients. Votre présence en ligne est essentielle pour capter de nouveaux prospects et montrer votre expertise. Je vous accompagne dans la création d'un site vitrine moderne, responsive et optimisé pour le SEO.<br /> <br /> Grâce à un développement sur-mesure, je m'assure que votre site reflète parfaitement l'image de votre entreprise, tout en offrant une navigation fluide et une expérience utilisateur agréable. Vous aurez un outil performant pour séduire et convaincre vos visiteurs en ligne, le tout sans compromis sur la vitesse et l'accessibilité.",
    image: {
      src: '/vitrine-banner.jpg',
      alt: 'Vitrine',
    },
    altImage: {
      src: '/code-logo.png',
      alt: 'VSCODE Logo',
    },
    cta: 'Digitaliser mon activité ',
    ctaHref: '/services/site-vitrine',
  },
  // {
  //   title: 'Site e-commerce Shopify',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro hic libero sed reiciendis a ad non quis aut aperiam vero? Dignissimos officia facilis non reiciendis, reprehenderit expedita sed soluta perferendis!<br /> <br /> Earum modi molestias tempora, ipsum, perspiciatis impedit itaque omnis sed recusandae veritatis ab cupiditate nemo illum aliquam laudantium obcaecati optio, eaque praesentium explicabo magni qui mollitia! Quisquam voluptatem nemo incidunt.',
  //   image: {
  //     src: '/shopify-banner.webp',
  //     alt: 'Shopify',
  //   },
  //   altImage: {
  //     src: '/shopify-logo.png',
  //     alt: 'Shopify Logo',
  //   },
  //   cta: 'Vendre mes produits en ligne ',
  //   ctaHref: '/services/site-e-commerce',
  // },
  // {
  //   title: "Création d'agent IA",
  //   description:
  //     "Créez un agent IA sur-mesure pour améliorer votre productivité et vos interactions. Un agent IA, c'est bien plus qu'un simple chatbot. C'est un assistant virtuel capable de comprendre, répondre et exécuter des tâches complexes en automatisant des processus.<br /> <br /> Que ce soit pour améliorer le service client, automatiser des réponses ou aider dans la gestion quotidienne, je vous aide à développer et à déployer un agent IA parfaitement adapté à vos besoins. Le but ? Vous faire gagner du temps, améliorer l'expérience utilisateur, et augmenter l'efficacité de votre activité.",
  //   image: {
  //     src: '/agenti-ia-banner.png',
  //     alt: 'Agent IA',
  //   },
  //   altImage: {
  //     src: '/gpt-logo.webp',
  //     alt: 'GPT Logo',
  //   },
  //   cta: 'Créer des solutions intelligentes',
  //   ctaHref: '/services/agent-ia',
  // },
  {
    title: 'Automatisation',
    description:
      'Optimisez vos processus avec des automatisations intelligentes et personnalisées. Automatiser vos tâches répétitives et chronophages, c’est libérer du temps pour vous concentrer sur ce qui compte vraiment.<br /> <br /> En analysant vos flux de travail, je crée des solutions sur-mesure qui connectent vos outils, automatisent vos processus et vous permettent de gérer plus efficacement vos activités. Que ce soit pour automatiser la gestion des emails, la synchronisation de données ou même des workflows complexes, vous bénéficiez d’une automatisation fiable et optimale, adaptée à vos objectifs.',
    image: {
      src: '/automation-banner.jpg',
      alt: 'Automatisation',
    },
    altImage: {
      src: '/n8n-logo.png',
      alt: 'N8N Logo',
    },
    cta: 'Automatiser mes tâches',
    ctaHref: '/services/automatisations',
  },
];

export const Services = () => {
  return (
    <Section
      id="services"
      title="Services"
      subtitle="Transformez votre activité"
      className="bg-neutral-100 dark:bg-neutral-900 pb-24"
    >
      <div className="space-y-24 mt-24">
        {' '}
        {ServicesData.map((service, i) => (
          <div
            key={i}
            className={cn(
              'flex justify-between items-center flex-col md:flex-row gap-12 md:ap-24',
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
                href={service.ctaHref}
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
