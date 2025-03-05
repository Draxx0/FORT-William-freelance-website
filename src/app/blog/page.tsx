import BlogCard from '@/components/blog-card';
import { BlogPageHeader } from '@/components/blog-page-header';
import ContactSection from '@/components/sections/common/contact';
import { getBlogPosts } from '@/lib/blog';
import { constructMetadata } from '@/lib/utils';

export const metadata = constructMetadata({
  title:
    'Blog de William FORT - Développement Web & Automatisation pour Optimiser Vos Projets',
  description: `Bienvenue sur mon blog, William FORT, freelance développeur, comment le développement web sur mesure et l'automatisation peuvent transformer vos projets. Apprenez à maximiser l'efficacité, la performance et la rentabilité de vos solutions numériques.`,
});

export default async function Blog() {
  const allPosts = await getBlogPosts();

  const articles = await Promise.all(
    allPosts.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
  );

  return (
    <>
      <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 mt-12">
        <BlogPageHeader />
      </div>
      <div className="min-h-[50vh] bg-neutral-100 dark:bg-neutral-900 ">
        <div className="mx-auto grid w-full max-w-screen-xl grid-cols-1 gap-8 px-2.5 py-10 lg:px-20 lg:grid-cols-3">
          {articles.map((data, idx) => (
            <BlogCard key={data.slug} data={data} priority={idx <= 1} />
          ))}
        </div>
      </div>

      <ContactSection />
    </>
  );
}
