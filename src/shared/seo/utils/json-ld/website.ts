import { getSiteUrl } from './helpers';
import type { WithContext } from './types';

export type WebSiteJsonLd = WithContext<{
  '@type': 'WebSite';
  name?: string;
  url: string;
  description?: string;
  inLanguage?: string;
  potentialAction?: {
    '@type': 'SearchAction';
    target: {
      '@type': 'EntryPoint';
      urlTemplate: string;
    };
    'query-input': string;
  };
}>;

type BuildWebSiteOptions = {
  description?: string;
  inLanguage?: string;
  searchUrlTemplate?: string;
};

export function buildWebSiteJsonLd(options: BuildWebSiteOptions = {}): WebSiteJsonLd {
  const { description, inLanguage, searchUrlTemplate } = options;

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: process.env.NEXT_PUBLIC_TITLE,
    url: getSiteUrl(),
    ...(description && { description }),
    ...(inLanguage && { inLanguage }),
    ...(searchUrlTemplate && {
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: searchUrlTemplate,
        },
        'query-input': 'required name=search_term_string',
      },
    }),
  };
}
