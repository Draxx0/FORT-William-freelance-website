import Section from '@/components/section';
import { siteConfig } from '@/lib/config';

export const HowItWorks = () => {
  const { items } = siteConfig.services.agentAi;

  return (
    <Section
      id="agents-ia"
      title="Agents-IA"
      subtitle="Comment ça marche ?"
      description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    >
      <div className="border-x mx-5 md:mx-10 relative mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-start justify-end min-h-[600px] md:min-h-[500px] p-0.5 relative before:absolute before:-left-0.5 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-[''] group cursor-pointer max-h-[400px] group"
            >
              <div className="relative flex size-full items-center justify-center h-full overflow-hidden">
                {item.content}
              </div>
              <div className="flex-1 flex-col gap-2 p-6">
                <h3 className="text-lg tracking-tighter font-semibold">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
