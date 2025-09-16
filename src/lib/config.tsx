import { FirstBentoAnimation } from '@/components/first-bento-animation';
import { SecondBentoAnimation } from '@/components/second-bento-animation';
import { Clock, LayoutPanelTop, Workflow } from 'lucide-react';
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
          {
            href: '/services/automatisations',
            icon: <Workflow className="size-4" />,
            title: 'Automatisation',
            description:
              "L'automatisation optimise les tâches répétitives via des systèmes intelligents, augmentant efficacité, précision et productivité avec moins d'intervention humaine.",
          },
          {
            href: '/services',
            icon: <Clock className="size-4" />,
            title: 'À venir',
            description:
              'Je me forme continuellement sur de nombreux sujets technologiques. De nouveaux services innovants pourraient bientôt rejoindre mon offre pour répondre à vos besoins évolutifs.',
          },
          // {
          //   href: '/services/site-e-commerce',
          //   icon: <ShoppingBag className="size-4" />,
          //   title: 'Site e-commerce',
          //   description:
          //     "Création de sites web sur mesure, modernes et performants, adaptés à vos besoins, optimisés pour le SEO et l'expérience utilisateur.",
          // },
          // {
          //   href: '/services/agent-ia',
          //   icon: <Bot className="size-4" />,
          //   title: 'Agent IA',
          //   description:
          //     'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quae voluptas, nobis quas ipsum alias enim, saepe minima porro doloremque corporis? Nulla tenetur placeat, odio quaerat consectetur aut quibusdam ipsa. Ea veniam soluta ratione quam, natus corrupti fugiat voluptate culpa ad explicabo dolore praesentium eligendi libero! Perferendis odit dicta eaque deserunt, vel illum nostrum aspernatur sapiente, inventore sed exercitationem delectus!',
          // },
        ],
      },
    },
    // {
    //   href: '/#realisations',
    //   label: 'Réalisations',
    // },
    // {
    //   href: '/#avis',
    //   label: 'Avis',
    // },
    {
      href: '/blog',
      label: 'Blog',
    },
  ],
  footer: [
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
            href: '/services/automatisations',
            icon: <Workflow className="size-4" />,
            title: 'Automatisation',
            description:
              "L'automatisation optimise les tâches répétitives via des systèmes intelligents, augmentant efficacité, précision et productivité avec moins d'intervention humaine.",
          },
          {
            href: '/services',
            icon: <Clock className="size-4" />,
            title: 'À venir',
            description:
              'Je me forme continuellement sur de nombreux sujets technologiques. De nouveaux services innovants pourraient bientôt rejoindre mon offre pour répondre à vos besoins évolutifs.',
          },
        ],
      },
    },
    {
      href: '/blog',
      label: 'Blog',
    },
    {
      href: '/mentions-legales',
      label: 'Mentions légales',
    },
    {
      href: '/politique-de-confidentialite',
      label: 'Politique de confidentialité',
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
          question:
            "Qu'est-ce que l'automatisation et comment peut-elle m'aider ?",
          answer: (
            <span>
              L&apos;automatisation consiste à créer des workflows qui exécutent
              automatiquement des tâches répétitives entre vos différents
              outils. Par exemple, synchroniser vos contacts entre votre CRM et
              votre outil email, ou automatiser l&apos;envoi de factures. Cela
              vous fait gagner du temps, réduit les erreurs et vous permet de
              vous concentrer sur votre cœur de métier.
            </span>
          ),
        },
        {
          question: 'Quels outils puis-je connecter avec vos automatisations ?',
          answer: (
            <span>
              Je peux connecter une grande variété d&apos;outils : CRM (HubSpot,
              Salesforce), outils de communication (Slack, Teams, Gmail),
              plateformes e-commerce (Shopify, WooCommerce), outils de marketing
              (Mailchimp, ActiveCampaign), gestion de projet (Trello, Asana), et
              bien d&apos;autres. Si votre outil n&apos;est pas dans la liste,
              je peux souvent créer une intégration personnalisée.
            </span>
          ),
        },

        {
          question:
            'Mes données sont-elles sécurisées avec vos automatisations ?',
          answer: (
            <span>
              Absolument ! J&apos;utilise des plateformes reconnues comme N8N et
              Make.com qui respectent les standards de sécurité les plus élevés
              (RGPD, SOC 2). Vos données sont chiffrées en transit et au repos.
              Je ne stocke jamais vos informations sensibles et vous gardez le
              contrôle total sur vos données.
            </span>
          ),
        },
        {
          question:
            'Puis-je modifier mes automatisations après leur mise en place ?',
          answer: (
            <span>
              Je reste toujours disponible pour vous accompagner dans
              l&apos;évolution de vos automatisations ! Je vous fournis une
              documentation claire pour comprendre vos workflows. Pour les
              modifications, vous pouvez opter pour un contrat de maintenance
              mensuel qui inclut les petits ajustements, ou me solliciter
              ponctuellement pour des évolutions plus importantes.
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
          question: 'Combien de temps faut-il pour créer mon site vitrine ?',
          answer: (
            <span>
              Le délai de création dépend de la complexité de votre projet. En
              général, un site vitrine standard prend entre 2 à 4 semaines. Cela
              inclut la phase de développement, les tests et les ajustements.
              Pour des projets plus complexes avec des fonctionnalités
              spécifiques, le délai peut s&apos;étendre à 6-8 semaines. Je vous
              fournis toujours un planning détaillé dès le début du projet.
            </span>
          ),
        },
        {
          question: 'Mon site sera-t-il optimisé pour les mobiles ?',
          answer: (
            <span>
              Absolument ! Tous les sites que je développe sont entièrement
              responsives et optimisés pour tous les appareils (ordinateur,
              tablette, smartphone). Votre site s&apos;adaptera automatiquement
              à la taille de l&apos;écran pour offrir une expérience utilisateur
              optimale sur tous les supports.
            </span>
          ),
        },

        {
          question: 'Mon site sera-t-il visible sur Google ?',
          answer: (
            <span>
              Oui, j&apos;optimise tous les sites pour le référencement naturel
              (SEO). Cela inclut l&apos;optimisation technique, la structure des
              pages, les balises meta, et les bonnes pratiques pour améliorer
              votre visibilité sur les moteurs de recherche.
            </span>
          ),
        },

        {
          question: 'Que se passe-t-il après la mise en ligne ?',
          answer: (
            <span>
              Je vous accompagne même après la livraison ! Pendant 5 jours après
              la mise en ligne, je traite tous vos retours et ajustements sans
              frais supplémentaires. Ensuite, vous pouvez opter pour un contrat
              de maintenance mensuel pour continuer à bénéficier de mon support
              et des mises à jour de votre site.
            </span>
          ),
        },
      ],
    },
  },
};

export type SiteConfig = typeof siteConfig;
