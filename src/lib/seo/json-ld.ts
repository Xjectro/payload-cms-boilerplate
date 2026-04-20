import type { Page, Media } from '@/payload-types';

// --- Base Types ---

type JsonLdBase = {
  '@context': 'https://schema.org';
  '@type': string;
  [key: string]: unknown;
};

type WithContext<T extends Record<string, unknown>> = T & {
  '@context': 'https://schema.org';
};

// --- Helpers ---

const getImageUrl = (image?: Media | number | null): string | undefined => {
  if (!image || typeof image === 'number') return undefined;
  return image.url ?? undefined;
};

const getSiteUrl = (path = '/'): string => {
  const base = process.env.NEXT_PUBLIC_URL ?? '';
  return `${base}${path}`;
};

// --- Builders ---

export function buildWebSiteJsonLd(): WithContext<JsonLdBase> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: process.env.NEXT_PUBLIC_TITLE,
    url: getSiteUrl(),
  };
}

export function buildWebPageJsonLd(doc: Partial<Page>): WithContext<JsonLdBase> {
  const title = doc.meta?.title ?? doc.title;
  const slug = typeof doc.slug === 'string' ? doc.slug : '';

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: doc.meta?.description ?? undefined,
    url: getSiteUrl(slug === 'home' ? '/' : `/${slug}`),
    ...(doc.meta?.image && {
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: getImageUrl(doc.meta.image as Media),
      },
    }),
  };
}

export function buildOrganizationJsonLd(
  overrides: Record<string, unknown> = {},
): WithContext<JsonLdBase> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: process.env.NEXT_PUBLIC_TITLE,
    url: getSiteUrl(),
    ...overrides,
  };
}

export function buildBreadcrumbJsonLd(
  items: { name: string; url: string }[],
): WithContext<JsonLdBase> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getSiteUrl(item.url),
    })),
  };
}

// --- Component Helper ---

export function jsonLdScriptProps(data: Record<string, unknown>) {
  return {
    type: 'application/ld+json' as const,
    dangerouslySetInnerHTML: { __html: JSON.stringify(data) },
  };
}
