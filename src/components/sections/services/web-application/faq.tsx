import Section from '@/components/section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { siteConfig } from '@/lib/config';

export default function WebApplicationFAQ() {
  const { faqs } = siteConfig.services.webApplication;
  return (
    <Section
      id="faq"
      title="FAQ application web"
      subtitle="Questions fréquentes"
    >
      <div className="mx-auto my-12 md:max-w-[800px]">
        <Accordion
          type="single"
          collapsible
          className="flex w-full flex-col items-center justify-center space-y-2"
        >
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={faq.question}
              className="w-full border rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <h4 className="mb-12 text-center text-sm font-medium tracking-tight text-foreground/80">
        Vous avez des questions ? Contactez-moi à{' '}
        <a
          href={`mailto:${siteConfig.links.email}`}
          className="underline hover:text-primary transition-colors duration-300 ease-in-out"
        >
          {siteConfig.links.email}
        </a>
      </h4>
    </Section>
  );
}
