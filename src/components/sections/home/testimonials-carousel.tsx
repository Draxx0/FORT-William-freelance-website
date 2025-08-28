import BlurFade from '@/components/magicui/blur-fade';
import Section from '@/components/section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { MdOutlineFormatQuote } from 'react-icons/md';

const companies = [
  'Google',
  'Microsoft',
  'Amazon',
  'Netflix',
  'YouTube',
  'Instagram',
  'Uber',
  'Spotify',
];

const TESTIMONIALS = [
  {
    name: 'Romain BOUVIER',
    company: "Fondateur de l'agence VeryBerry",
    quote:
      'J’ai eu la chance de travailler avec William sur un projet important pour mon entreprise, et je ne peux que recommander ses services. Dès le début, il a été à l’écoute, proactif et force de proposition. Il a parfaitement compris nos besoins et a su les traduire en résultats concrets, dans les délais impartis. Ce que j’ai particulièrement apprécié, c’est son professionnalisme, sa réactivité et son souci du détail. Il a toujours su trouver des solutions aux imprévus, tout en gardant une communication fluide et agréable tout au long du projet. Un vrai partenaire de confiance, avec qui je retravaillerai sans hésiter !',
    service: 'Automatisation de la gestion des leads',
  },
  {
    name: 'Sophie LEBRUN',
    company: 'Responsable Marketing chez Bloom Natura',
    quote:
      'Nous avons confié à William la création de notre site vitrine, et le résultat a dépassé toutes nos attentes. Il a su parfaitement capter l’essence de notre marque et la retranscrire dans une interface à la fois élégante, moderne et fonctionnelle. Tout a été fluide, de la phase de conception jusqu’à la mise en ligne. William a été très réactif, à l’écoute et toujours force de proposition. Une collaboration hyper agréable et un site qui reflète enfin notre image !',
    service: 'Création de site vitrine',
  },
  {
    name: 'Julien MARTIN',
    company: 'CTO chez Lokimo',
    quote:
      'Travailler avec William sur le développement de notre agent IA a été une véritable valeur ajoutée pour notre équipe. Il a rapidement compris nos enjeux métiers et proposé une solution performante, capable d’interagir avec nos utilisateurs de manière fluide et contextuelle. Son approche allie rigueur technique, compréhension fine des usages et sens du détail. Une vraie expertise, et une exécution sans accroc. On est déjà en train de prévoir la suite avec lui.',
    service: 'Développement d’un agent conversationnel IA',
  },
];

export default function Component() {
  return (
    <Section
      id="avis"
      title="Avis"
      subtitle="Témoignages de clients satisfaits."
    >
      <Carousel>
        <div className="max-w-4xl mx-auto relative">
          <CarouselContent>
            {TESTIMONIALS.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-2 pb-5">
                  <div className="text-center">
                    <MdOutlineFormatQuote className="text-4xl text-themeDarkGray my-4 mx-auto" />
                    <BlurFade delay={0.25} inView>
                      <h4 className="text-1xl text-justify font-semibold max-w-3xl mx-auto px-10">
                        {testimonial.quote}
                      </h4>
                    </BlurFade>
                    <BlurFade delay={0.25 * 2} inView>
                      <div className="mt-8">
                        <Image
                          width={0}
                          height={40}
                          key={index}
                          src={`https://cdn.magicui.design/companies/${
                            companies[index % companies.length]
                          }.svg`}
                          alt={`${companies[index % companies.length]} Logo`}
                          className="mx-auto w-auto h-[40px] grayscale opacity-30"
                        />
                      </div>
                    </BlurFade>
                    <div className="">
                      <BlurFade delay={0.25 * 3} inView>
                        <h4 className="text-1xl font-semibold my-2">
                          {testimonial.name}
                        </h4>
                      </BlurFade>
                    </div>
                    <BlurFade delay={0.25 * 4} inView>
                      <div className="mb-3">
                        <span className="text-sm text-themeDarkGray">
                          {testimonial.company}
                        </span>
                      </div>
                    </BlurFade>
                    <BlurFade delay={0.25 * 5} inView>
                      <div className="mb-3">
                        <span className="text-sm text-primary font-bold">
                          {testimonial.service}
                        </span>
                      </div>
                    </BlurFade>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-2/12 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full  w-2/12 bg-gradient-to-l from-background"></div>
        </div>
        <div className="md:block hidden">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </Section>
  );
}
