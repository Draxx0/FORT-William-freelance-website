import { getBlogPosts } from '@/lib/blog';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPosts = await getBlogPosts();

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL!;

  const staticRoutes = [
    '',
    '/blog',
    '/services',
    '/services/site-vitrine',
    '/services/web-application',
    '/services/automatisations',
    '/mentions-legales',
    '/politique-de-confidentialite',
  ];

  const staticUrls = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const blogUrls = allPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticUrls, ...blogUrls];
}
