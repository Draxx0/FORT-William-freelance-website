import { Bot, LayoutPanelTop, ShoppingBag, Workflow } from 'lucide-react';
import Image from 'next/image';

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: 'William FORT | Développeur web Freelance',
  description: 'Développeur web & Automatisation Freelance',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  keywords: [
    'Freelance',
    'Sites webs',
    'Développeur web',
    'Next.js',
    'React',
    'Tailwind CSS',
    'NestJS',
    'Automatisation',
    'E-commerce',
    'Shopify',
    'Make.com',
    'N8N',
    'Agent IA',
  ],
  links: {
    email: 'contact@williamfort.fr',
    // twitter: "https://twitter.com/magicuidesign",
    // discord: "https://discord.gg/87p2vpsat5",
    // github: "https://github.com/magicuidesign/magicui",
    // instagram: "https://instagram.com/magicuidesign/",
  },
  header: [
    {
      href: '/',
      label: 'Accueil',
    },
    {
      href: '/#projets',
      label: 'Votre projet',
    },
    {
      trigger: 'Services',
      content: {
        main: {
          image: (
            <Image
              src={'/services.jpg'}
              alt="Image représentant un service digital"
              width={150}
              height={120}
              sizes="100vw"
              className="rounded-md w-full h-full object-cover"
            />
          ),
          title: 'Services',
          description: 'Découvrez les services',
          href: '/services',
        },
        items: [
          {
            href: '/services/site-vitrine',
            icon: <LayoutPanelTop className="size-4" />,
            title: 'Site vitrine',
            description:
              "Création de sites web sur mesure, modernes et performants, adaptés à vos besoins, optimisés pour le SEO et l'expérience utilisateur.",
          },
          {
            href: '/services/site-e-commerce',
            icon: <ShoppingBag className="size-4" />,
            title: 'Site e-commerce',
            description:
              "Création de sites web sur mesure, modernes et performants, adaptés à vos besoins, optimisés pour le SEO et l'expérience utilisateur.",
          },
          {
            href: '/services/automatisations',
            icon: <Workflow className="size-4" />,
            title: 'Automatisation',
            description:
              "L'automatisation optimise les tâches répétitives via des systèmes intelligents, augmentant efficacité, précision et productivité avec moins d'intervention humaine.",
          },
          {
            href: '/services/agent-ia',
            icon: <Bot className="size-4" />,
            title: 'Agent IA',
            description:
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quae voluptas, nobis quas ipsum alias enim, saepe minima porro doloremque corporis? Nulla tenetur placeat, odio quaerat consectetur aut quibusdam ipsa. Ea veniam soluta ratione quam, natus corrupti fugiat voluptate culpa ad explicabo dolore praesentium eligendi libero! Perferendis odit dicta eaque deserunt, vel illum nostrum aspernatur sapiente, inventore sed exercitationem delectus!',
          },
        ],
      },
    },
    {
      href: '/#realisations',
      label: 'Réalisations',
    },
    {
      href: '/#avis',
      label: 'Avis',
    },
    {
      href: '/blog',
      label: 'Blog',
    },
  ],
  faqs: [
    {
      question: 'What is acme.ai?',
      answer: (
        <span>
          acme.ai is a platform that helps you build and manage your AI-powered
          applications. It provides tools and services to streamline the
          development and deployment of AI solutions.
        </span>
      ),
    },
    {
      question: 'How can I get started with acme.ai?',
      answer: (
        <span>
          You can get started with acme.ai by signing up for an account on our
          website, creating a new project, and following our quick-start guide.
          We also offer tutorials and documentation to help you along the way.
        </span>
      ),
    },
    {
      question: 'What types of AI models does acme.ai support?',
      answer: (
        <span>
          acme.ai supports a wide range of AI models, including but not limited
          to natural language processing, computer vision, and predictive
          analytics. We continuously update our platform to support the latest
          AI technologies.
        </span>
      ),
    },
    {
      question: 'Is acme.ai suitable for beginners in AI development?',
      answer: (
        <span>
          Yes, acme.ai is designed to be user-friendly for both beginners and
          experienced developers. We offer intuitive interfaces, pre-built
          templates, and extensive learning resources to help users of all skill
          levels create AI-powered applications.
        </span>
      ),
    },
    {
      question: 'What kind of support does acme.ai provide?',
      answer: (
        <span>
          acme.ai provides comprehensive support including documentation, video
          tutorials, a community forum, and dedicated customer support. We also
          offer premium support plans for enterprises with more complex needs.
        </span>
      ),
    },
  ],
};

export type SiteConfig = typeof siteConfig;
