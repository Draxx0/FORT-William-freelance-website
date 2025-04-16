import { FirstBentoAnimation } from '@/components/first-bento-animation';
import { SecondBentoAnimation } from '@/components/second-bento-animation';
import { Bot, LayoutPanelTop, Workflow } from 'lucide-react';
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
    email: 'williamfort.work@gmail.com',
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
          // {
          //   href: '/services/site-e-commerce',
          //   icon: <ShoppingBag className="size-4" />,
          //   title: 'Site e-commerce',
          //   description:
          //     "Création de sites web sur mesure, modernes et performants, adaptés à vos besoins, optimisés pour le SEO et l'expérience utilisateur.",
          // },
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
      question: 'FAQ',
      answer: (
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ea
          quam quisquam. Quod excepturi mollitia velit quis eligendi incidunt,
          fuga eaque fugit rerum quos cum corporis enim doloremque, fugiat sunt.
          Similique minima iusto maxime ipsum quibusdam esse odio, in cum
          obcaecati ducimus saepe iure beatae corrupti, at aspernatur molestias
          tempora hic odit ipsa, eius voluptatem vero eveniet corporis. Error,
          aliquam! Dolor necessitatibus et explicabo similique eum sit magnam,
          adipisci alias laboriosam veniam sequi aliquid dolores magni
          asperiores animi incidunt reprehenderit repellat voluptate excepturi
          totam qui, praesentium commodi officia sint. Nihil!
        </span>
      ),
    },
  ],
  services: {
    agentAi: {
      items: [
        {
          id: 1,
          content: <FirstBentoAnimation />,
          title: 'Collaboration avec votre agent en temps réel',
          description:
            'Profitez d’une assistance en temps réel. Demandez à votre agent de coordonner des tâches, répondre à des questions et maintenir l’alignement de l’équipe.',
        },
        {
          id: 2,
          content: <SecondBentoAnimation />,
          title: 'Integrations de multiples outils',
          description:
            "Votre agent peut se connecter à une multitude de services permettant d'élargir le champs des possibles",
        },
      ],
      faqs: [
        {
          question: 'FAQ 1',
          answer: (
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              ea quam quisquam. Quod excepturi mollitia velit quis eligendi
              incidunt, fuga eaque fugit rerum quos cum corporis enim
              doloremque, fugiat sunt. Similique minima iusto maxime ipsum
              quibusdam esse odio, in cum obcaecati ducimus saepe iure beatae
              corrupti, at aspernatur molestias tempora hic odit ipsa, eius
              voluptatem vero eveniet corporis. Error, aliquam! Dolor
              necessitatibus et explicabo similique eum sit magnam, adipisci
              alias laboriosam veniam sequi aliquid dolores magni asperiores
              animi incidunt reprehenderit repellat voluptate excepturi totam
              qui, praesentium commodi officia sint. Nihil!
            </span>
          ),
        },
        {
          question: 'FAQ 2',
          answer: (
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              ea quam quisquam. Quod excepturi mollitia velit quis eligendi
              incidunt, fuga eaque fugit rerum quos cum corporis enim
              doloremque, fugiat sunt. Similique minima iusto maxime ipsum
              quibusdam esse odio, in cum obcaecati ducimus saepe iure beatae
              corrupti, at aspernatur molestias tempora hic odit ipsa, eius
              voluptatem vero eveniet corporis. Error, aliquam! Dolor
              necessitatibus et explicabo similique eum sit magnam, adipisci
              alias laboriosam veniam sequi aliquid dolores magni asperiores
              animi incidunt reprehenderit repellat voluptate excepturi totam
              qui, praesentium commodi officia sint. Nihil!
            </span>
          ),
        },
        {
          question: 'FAQ 3',
          answer: (
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              ea quam quisquam. Quod excepturi mollitia velit quis eligendi
              incidunt, fuga eaque fugit rerum quos cum corporis enim
              doloremque, fugiat sunt. Similique minima iusto maxime ipsum
              quibusdam esse odio, in cum obcaecati ducimus saepe iure beatae
              corrupti, at aspernatur molestias tempora hic odit ipsa, eius
              voluptatem vero eveniet corporis. Error, aliquam! Dolor
              necessitatibus et explicabo similique eum sit magnam, adipisci
              alias laboriosam veniam sequi aliquid dolores magni asperiores
              animi incidunt reprehenderit repellat voluptate excepturi totam
              qui, praesentium commodi officia sint. Nihil!
            </span>
          ),
        },
      ],
    },
    automatisation: {
      faqs: [
        {
          question: 'FAQ 1',
          answer: (
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              ea quam quisquam. Quod excepturi mollitia velit quis eligendi
              incidunt, fuga eaque fugit rerum quos cum corporis enim
              doloremque, fugiat sunt. Similique minima iusto maxime ipsum
              quibusdam esse odio, in cum obcaecati ducimus saepe iure beatae
              corrupti, at aspernatur molestias tempora hic odit ipsa, eius
              voluptatem vero eveniet corporis. Error, aliquam! Dolor
              necessitatibus et explicabo similique eum sit magnam, adipisci
              alias laboriosam veniam sequi aliquid dolores magni asperiores
              animi incidunt reprehenderit repellat voluptate excepturi totam
              qui, praesentium commodi officia sint. Nihil!
            </span>
          ),
        },
        {
          question: 'FAQ 2',
          answer: (
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              ea quam quisquam. Quod excepturi mollitia velit quis eligendi
              incidunt, fuga eaque fugit rerum quos cum corporis enim
              doloremque, fugiat sunt. Similique minima iusto maxime ipsum
              quibusdam esse odio, in cum obcaecati ducimus saepe iure beatae
              corrupti, at aspernatur molestias tempora hic odit ipsa, eius
              voluptatem vero eveniet corporis. Error, aliquam! Dolor
              necessitatibus et explicabo similique eum sit magnam, adipisci
              alias laboriosam veniam sequi aliquid dolores magni asperiores
              animi incidunt reprehenderit repellat voluptate excepturi totam
              qui, praesentium commodi officia sint. Nihil!
            </span>
          ),
        },
        {
          question: 'FAQ 3',
          answer: (
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              ea quam quisquam. Quod excepturi mollitia velit quis eligendi
              incidunt, fuga eaque fugit rerum quos cum corporis enim
              doloremque, fugiat sunt. Similique minima iusto maxime ipsum
              quibusdam esse odio, in cum obcaecati ducimus saepe iure beatae
              corrupti, at aspernatur molestias tempora hic odit ipsa, eius
              voluptatem vero eveniet corporis. Error, aliquam! Dolor
              necessitatibus et explicabo similique eum sit magnam, adipisci
              alias laboriosam veniam sequi aliquid dolores magni asperiores
              animi incidunt reprehenderit repellat voluptate excepturi totam
              qui, praesentium commodi officia sint. Nihil!
            </span>
          ),
        },
      ],
    },
    eCommerce: {
      faqs: [
        {
          question: 'FAQ 1',
          answer: (
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              ea quam quisquam. Quod excepturi mollitia velit quis eligendi
              incidunt, fuga eaque fugit rerum quos cum corporis enim
              doloremque, fugiat sunt. Similique minima iusto maxime ipsum
              quibusdam esse odio, in cum obcaecati ducimus saepe iure beatae
              corrupti, at aspernatur molestias tempora hic odit ipsa, eius
              voluptatem vero eveniet corporis. Error, aliquam! Dolor
              necessitatibus et explicabo similique eum sit magnam, adipisci
              alias laboriosam veniam sequi aliquid dolores magni asperiores
              animi incidunt reprehenderit repellat voluptate excepturi totam
              qui, praesentium commodi officia sint. Nihil!
            </span>
          ),
        },
        {
          question: 'FAQ 2',
          answer: (
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              ea quam quisquam. Quod excepturi mollitia velit quis eligendi
              incidunt, fuga eaque fugit rerum quos cum corporis enim
              doloremque, fugiat sunt. Similique minima iusto maxime ipsum
              quibusdam esse odio, in cum obcaecati ducimus saepe iure beatae
              corrupti, at aspernatur molestias tempora hic odit ipsa, eius
              voluptatem vero eveniet corporis. Error, aliquam! Dolor
              necessitatibus et explicabo similique eum sit magnam, adipisci
              alias laboriosam veniam sequi aliquid dolores magni asperiores
              animi incidunt reprehenderit repellat voluptate excepturi totam
              qui, praesentium commodi officia sint. Nihil!
            </span>
          ),
        },
        {
          question: 'FAQ 3',
          answer: (
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              ea quam quisquam. Quod excepturi mollitia velit quis eligendi
              incidunt, fuga eaque fugit rerum quos cum corporis enim
              doloremque, fugiat sunt. Similique minima iusto maxime ipsum
              quibusdam esse odio, in cum obcaecati ducimus saepe iure beatae
              corrupti, at aspernatur molestias tempora hic odit ipsa, eius
              voluptatem vero eveniet corporis. Error, aliquam! Dolor
              necessitatibus et explicabo similique eum sit magnam, adipisci
              alias laboriosam veniam sequi aliquid dolores magni asperiores
              animi incidunt reprehenderit repellat voluptate excepturi totam
              qui, praesentium commodi officia sint. Nihil!
            </span>
          ),
        },
      ],
    },
    vitrine: {
      faqs: [
        {
          question: 'FAQ 1',
          answer: (
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              ea quam quisquam. Quod excepturi mollitia velit quis eligendi
              incidunt, fuga eaque fugit rerum quos cum corporis enim
              doloremque, fugiat sunt. Similique minima iusto maxime ipsum
              quibusdam esse odio, in cum obcaecati ducimus saepe iure beatae
              corrupti, at aspernatur molestias tempora hic odit ipsa, eius
              voluptatem vero eveniet corporis. Error, aliquam! Dolor
              necessitatibus et explicabo similique eum sit magnam, adipisci
              alias laboriosam veniam sequi aliquid dolores magni asperiores
              animi incidunt reprehenderit repellat voluptate excepturi totam
              qui, praesentium commodi officia sint. Nihil!
            </span>
          ),
        },
        {
          question: 'FAQ 2',
          answer: (
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              ea quam quisquam. Quod excepturi mollitia velit quis eligendi
              incidunt, fuga eaque fugit rerum quos cum corporis enim
              doloremque, fugiat sunt. Similique minima iusto maxime ipsum
              quibusdam esse odio, in cum obcaecati ducimus saepe iure beatae
              corrupti, at aspernatur molestias tempora hic odit ipsa, eius
              voluptatem vero eveniet corporis. Error, aliquam! Dolor
              necessitatibus et explicabo similique eum sit magnam, adipisci
              alias laboriosam veniam sequi aliquid dolores magni asperiores
              animi incidunt reprehenderit repellat voluptate excepturi totam
              qui, praesentium commodi officia sint. Nihil!
            </span>
          ),
        },
        {
          question: 'FAQ 3',
          answer: (
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              ea quam quisquam. Quod excepturi mollitia velit quis eligendi
              incidunt, fuga eaque fugit rerum quos cum corporis enim
              doloremque, fugiat sunt. Similique minima iusto maxime ipsum
              quibusdam esse odio, in cum obcaecati ducimus saepe iure beatae
              corrupti, at aspernatur molestias tempora hic odit ipsa, eius
              voluptatem vero eveniet corporis. Error, aliquam! Dolor
              necessitatibus et explicabo similique eum sit magnam, adipisci
              alias laboriosam veniam sequi aliquid dolores magni asperiores
              animi incidunt reprehenderit repellat voluptate excepturi totam
              qui, praesentium commodi officia sint. Nihil!
            </span>
          ),
        },
      ],
    },
  },
};

export type SiteConfig = typeof siteConfig;
