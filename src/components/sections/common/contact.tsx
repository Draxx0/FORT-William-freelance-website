import Section from '@/components/section';
import { Tag } from '@/components/ui/Tag';
import ContactForm from '../../contact-form';

export default function ContactSection() {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Prêt à faire décoller votre activité ?"
      className="bg-primary/10 rounded-xl py-16 px-4"
    >
      <div className="flex flex-col md:flex-row justify-between mt-12 gap-12 md:gap-6">
        <div className="w-full md:w-2/5">
          <div className="space-y-4 ">
            <Tag>Contactez-moi 🤝</Tag>
            <h2 className="text-3xl font-medium">Travaillons ensemble</h2>
            <p className="text-muted-foreground text-sm">
              Je suis disponible pour tout type de projets, professionnel ou
              même personnel.
            </p>
            <p className="text-muted-foreground text-sm">
              Pour toute demande ou question supplémentaire, n&apos;hésitez pas
              à me contacter par mail à{' '}
              <a
                href="mailto:contact@williamfort.fr"
                className="text-primary text-sm font-medium mt-4 hover:underline hover:underline-offset-4"
              >
                contact@williamfort.fr
              </a>
            </p>
          </div>
        </div>
        <div className="flex-1">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
