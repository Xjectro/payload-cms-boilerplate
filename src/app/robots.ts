import type { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_URL ?? '';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
