import { Icons } from '@/components/icons';

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
    'Make.com',
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
          icon: <Icons.react className="h-6 w-6" />,
          title: 'Services',
          description: 'Découvrez les services',
          href: '/services',
        },
        items: [
          {
            href: '/services/automatisations',
            title: 'Automatisation',
            description: 'Automate repetitive tasks and save time.',
          },
          {
            href: '/services/developpement-de-site-web',
            title: 'Développement web',
            description: 'Développement de site web',
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
