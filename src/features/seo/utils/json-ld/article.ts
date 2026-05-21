import { getSiteUrl } from './helpers';
import type { WithContext, ImageObjectJsonLd } from './types';

type ArticleType = 'Article' | 'BlogPosting' | 'NewsArticle' | 'TechArticle';

type PersonOrOrganization = {
  '@type': 'Person' | 'Organization';
  name: string;
  url?: string;
};

export type ArticleJsonLd = WithContext<{
  '@type': ArticleType;
  headline: string;
  description?: string;
  url?: string;
  datePublished?: string;
  dateModified?: string;
  author?: PersonOrOrganization | PersonOrOrganization[];
  publisher?: PersonOrOrganization & { logo?: ImageObjectJsonLd };
  image?: ImageObjectJsonLd | string;
  keywords?: string;
  articleSection?: string;
  wordCount?: number;
  inLanguage?: string;
}>;

type BuildArticleOptions = {
  type?: ArticleType;
  headline: string;
  description?: string;
  slug?: string;
  datePublished?: string;
  dateModified?: string;
  author?:
    | { name: string; url?: string; type?: 'Person' | 'Organization' }
    | { name: string; url?: string; type?: 'Person' | 'Organization' }[];
  publisherName?: string;
  publisherLogoUrl?: string;
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
  keywords?: string[];
  articleSection?: string;
  wordCount?: number;
  inLanguage?: string;
};

export function buildArticleJsonLd(options: BuildArticleOptions): ArticleJsonLd {
  const {
    type = 'Article',
    headline,
    description,
    slug,
    datePublished,
    dateModified,
    author,
    publisherName,
    publisherLogoUrl,
    imageUrl,
    imageWidth,
    imageHeight,
    keywords,
    articleSection,
    wordCount,
    inLanguage,
  } = options;

  const normalizeAuthor = (
    a: NonNullable<typeof author>,
  ): PersonOrOrganization | PersonOrOrganization[] => {
    if (Array.isArray(a)) {
      return a.map((item) => ({
        '@type': item.type ?? 'Person',
        name: item.name,
        ...(item.url && { url: item.url }),
      }));
    }
    return { '@type': a.type ?? 'Person', name: a.name, ...(a.url && { url: a.url }) };
  };

  return {
    '@context': 'https://schema.org',
    '@type': type,
    headline,
    ...(description && { description }),
    ...(slug && { url: getSiteUrl(`/${slug}`) }),
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    ...(author && { author: normalizeAuthor(author) }),
    ...(publisherName && {
      publisher: {
        '@type': 'Organization',
        name: publisherName,
        ...(publisherLogoUrl && {
          logo: { '@type': 'ImageObject', url: publisherLogoUrl },
        }),
      },
    }),
    ...(imageUrl && {
      image: {
        '@type': 'ImageObject',
        url: imageUrl,
        ...(imageWidth && { width: imageWidth }),
        ...(imageHeight && { height: imageHeight }),
      },
    }),
    ...(keywords && { keywords: keywords.join(', ') }),
    ...(articleSection && { articleSection }),
    ...(wordCount !== undefined && { wordCount }),
    ...(inLanguage && { inLanguage }),
  };
}
