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
    name: 'Léa NUNES',
    company: 'Passionnée de lecture',
    quote:
      "William a donné vie à mon projet Ridmi, une application web pour les passionnés de lecture comme moi. Il a su parfaitement comprendre ma vision et la transformer en une plateforme intuitive et élégante. Son expertise technique et sa créativité ont permis de créer exactement ce dont j'avais besoin : un outil pour découvrir, organiser et partager mes lectures. Sa communication claire et son professionnalisme ont rendu la collaboration très agréable. Je suis ravie du résultat et je le recommande vivement !",
    service: 'Développement de Ridmi - Application web de lecture',
    src: '/web-app/ridmi-logo.png',
  },
];

export default function TestimonialsCarousel() {
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
                          src={testimonial.src}
                          alt={`${testimonial.name} Logo`}
                          sizes="100vw"
                          className="mx-auto w-[40px] grayscale opacity-30"
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
