import BlurFade from '@/components/magicui/blur-fade';
import Section from '@/components/section';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Shield, Zap } from 'lucide-react';

const defaultProblems = [
  {
    title: '1. Partagez vos besoins',
    description:
      'Décrivez vos objectifs et vos attentes. Que ce soit pour la création d’un site ou l’automatisation de processus, je m’assure de comprendre vos priorités.',
    icon: Brain,
  },
  {
    title: '2. Lancement du projet',
    description:
      'Je développe et mets en place les solutions adaptées : conception du site, design moderne et intuitif, ou automatisation des processus via Make.com. Tout est personnalisé pour vous offrir des résultats concrets.',
    icon: Zap,
  },
  {
    title: '3. Suivi et optimisations',
    description:
      'Je vous accompagne dans le suivi de votre projet. Grâce à des améliorations continues, je m’assure que vos outils restent performants et que votre digitalisation soit toujours à la pointe.',
    icon: Shield,
  },
];

type Props = {
  problems?: typeof defaultProblems;
};

export default function ProjectsKeySteps({
  problems = defaultProblems,
}: Props) {
  return (
    <Section id="projets" title="Votre projet" subtitle="En trois étapes clés.">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {problems.map((problem, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.2} inView>
            <Card className="bg-background border-none shadow-none">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
