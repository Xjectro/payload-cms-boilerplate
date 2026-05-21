import type { WithContext, ImageObjectJsonLd } from './types';

export type VideoObjectJsonLd = WithContext<{
  '@type': 'VideoObject';
  name: string;
  headline?: string;
  description: string;
  thumbnailUrl: string | string[];
  uploadDate: string;
  duration?: string;
  contentUrl?: string;
  embedUrl?: string;
  expires?: string;
  interactionStatistic?: {
    '@type': 'InteractionCounter';
    interactionType: { '@type': 'WatchAction' };
    userInteractionCount: number;
  };
  regionsAllowed?: string;
  publisher?: { '@type': 'Organization'; name: string; logo?: ImageObjectJsonLd };
}>;

type BuildVideoObjectOptions = {
  name: string;
  headline?: string;
  description: string;
  thumbnailUrls: string[];
  uploadDate: string;
  duration?: string;
  contentUrl?: string;
  embedUrl?: string;
  expires?: string;
  watchCount?: number;
  regionsAllowed?: string;
  publisherName?: string;
  publisherLogoUrl?: string;
};

export function buildVideoObjectJsonLd(options: BuildVideoObjectOptions): VideoObjectJsonLd {
  const {
    name,
    headline,
    description,
    thumbnailUrls,
    uploadDate,
    duration,
    contentUrl,
    embedUrl,
    expires,
    watchCount,
    regionsAllowed,
    publisherName,
    publisherLogoUrl,
  } = options;

  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    ...(headline && { headline }),
    description,
    thumbnailUrl: thumbnailUrls.length === 1 ? thumbnailUrls[0] : thumbnailUrls,
    uploadDate,
    ...(duration && { duration }),
    ...(contentUrl && { contentUrl }),
    ...(embedUrl && { embedUrl }),
    ...(expires && { expires }),
    ...(watchCount !== undefined && {
      interactionStatistic: {
        '@type': 'InteractionCounter',
        interactionType: { '@type': 'WatchAction' },
        userInteractionCount: watchCount,
      },
    }),
    ...(regionsAllowed && { regionsAllowed }),
    ...(publisherName && {
      publisher: {
        '@type': 'Organization',
        name: publisherName,
        ...(publisherLogoUrl && { logo: { '@type': 'ImageObject', url: publisherLogoUrl } }),
      },
    }),
  };
}
