import type { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_URL ?? '';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
