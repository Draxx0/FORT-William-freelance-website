import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import Section from '@/components/section';

const data = [
  {
    id: 1,
    title: 'Institut Spa - Nocibé Mantes & Buchelay',
    content: 'Visualize trends and gain insights at a glance.',
    video:
      "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
  },
  {
    id: 2,
    title: 'Eden Health',
    content: 'Analyze text and extract sentiment effortlessly.',
    video: "https://cdn.magicui.design/bento-grid.mp4",
  },
  {
    id: 3,
    title: 'MHCS',
    content: 'Forecast trends and make data-driven decisions.',
    video: "https://cdn.llm.report/openai-demo.mp4",
  },
];

export default function Realisations() {
  return (
    <Section
      id="realisations"
      title="Réalisations"
      subtitle="Des idées transformées en succès."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {data.map((project, i) => (
          <BlurFade
            inView
            key={i}
            delay={i * 0.05}
          >
            <ProjectCard
              title={project.title}
              description={project.content}
              dates={''}
              image={''}
              video={project.video}
              link={''}
            />
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
