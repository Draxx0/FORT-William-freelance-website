import BlogCard from '@/components/blog-card';
import Section from '@/components/section';
import { Button } from '@/components/ui/button';
import { getBlogPosts } from '@/lib/blog';
import Link from 'next/link';

export default async function BlogSection() {
  const allPosts = await getBlogPosts();

  const articles = allPosts
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 3);

  return (
    <Section title="Blog" subtitle="Derniers articles">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((data, idx) => (
          <BlogCard key={data.slug} data={data} priority={idx <= 1} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button asChild size="lg">
          <Link href="/blog">Voir plus d&apos;articles</Link>
        </Button>
      </div>
    </Section>
  );
}
