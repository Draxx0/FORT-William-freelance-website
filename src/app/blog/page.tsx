import { BlogPageHeader } from '@/components/blog-page-header';
import { BlogPostList } from '@/components/sections/common/blog-post-list';
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

  const sortedPosts = allPosts.sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt)
  );

  const initialPosts = sortedPosts.slice(0, 6);

  return (
    <>
      <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 mt-12">
        <BlogPageHeader />
      </div>
      <div className="min-h-[50vh] bg-neutral-100 dark:bg-neutral-900 ">
        <div className="mx-auto w-full max-w-screen-xl px-2.5 py-10 lg:px-20">
          <BlogPostList initialPosts={initialPosts} allPosts={sortedPosts} />
        </div>
      </div>

      <ContactSection />
    </>
  );
}
