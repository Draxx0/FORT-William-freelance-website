import Section from '@/components/section';
import { AirVent, Brain, Droplet, Trees } from 'lucide-react';

const data = [
  {
    id: 1,
    title: 'Institut Spa - Nocibé Mantes & Buchelay',
    content: 'Visualize trends and gain insights at a glance.',
    image: '/dashboard.png',
    icon: <Droplet className="h-6 w-6 text-primary" />,
  },
  {
    id: 2,
    title: 'Eden Health',
    content: 'Analyze text and extract sentiment effortlessly.',
    image: '/dashboard.png',
    icon: <Brain className="h-6 w-6 text-primary" />,
  },
  {
    id: 3,
    title: 'MHCS',
    content: 'Forecast trends and make data-driven decisions.',
    image: '/dashboard.png',
    icon: <AirVent className="h-6 w-6 text-primary" />,
  },
  {
    id: 4,
    title: "La forêt d'acacias",
    content: 'Generate comprehensive reports with one click.',
    image: '/dashboard.png',
    icon: <Trees className="h-6 w-6 text-primary" />,
  },
];

export default function Realisations() {
  return (
    <Section
      id="realisations"
      title="Réalisations"
      subtitle="Des idées transformées en succès."
    >
      {/* <Features collapseDelay={5000} linePosition="bottom" data={data} /> */}
    </Section>
  );
}
