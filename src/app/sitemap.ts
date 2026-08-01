import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://orangebuilders.co.in';

  const routes = [
    '',
    '/about',
    '/services',
    '/projects',
    '/process',
    '/blog',
    '/blog/rcc-roof-slab-casting-tips-madurai',
    '/blog/red-brick-vs-flyash-brick-madurai-construction',
    '/blog/waterproofing-guide-for-residential-homes',
    '/gallery',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
