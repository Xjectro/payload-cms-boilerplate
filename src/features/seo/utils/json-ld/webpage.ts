import { getSiteUrl } from './helpers';
import type { WithContext, ImageObjectJsonLd } from './types';

type WebPageType =
  | 'WebPage'
  | 'AboutPage'
  | 'ContactPage'
  | 'CollectionPage'
  | 'SearchResultsPage'
  | 'ItemPage';

export type WebPageJsonLd = WithContext<{
  '@type': WebPageType;
  name?: string;
  headline?: string;
  description?: string;
  url?: string;
  datePublished?: string;
  dateModified?: string;
  inLanguage?: string;
  isPartOf?: { '@type': 'WebSite'; url: string };
  primaryImageOfPage?: ImageObjectJsonLd;
  breadcrumb?: { '@type': 'BreadcrumbList'; itemListElement: unknown[] };
}>;

type BuildWebPageOptions = {
  type?: WebPageType;
  name?: string;
  headline?: string;
  description?: string;
  slug?: string;
  datePublished?: string;
  dateModified?: string;
  inLanguage?: string;
  image?: string;
};

export function buildWebPageJsonLd(options: BuildWebPageOptions = {}): WebPageJsonLd {
  const {
    type = 'WebPage',
    name,
    headline,
    description,
    slug,
    datePublished,
    dateModified,
    inLanguage,
    image,
  } = options;

  const path = slug === 'home' ? '/' : `/${slug ?? ''}`;

  return {
    '@context': 'https://schema.org',
    '@type': type,
    ...(name && { name }),
    ...(headline && { headline }),
    ...(description && { description }),
    url: getSiteUrl(path),
    isPartOf: { '@type': 'WebSite', url: getSiteUrl() },
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    ...(inLanguage && { inLanguage }),
    ...(image && {
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: image,
      },
    }),
  };
}
