import type { Metadata } from 'next';

const SITE_NAME = process.env.NEXT_PUBLIC_TITLE ?? 'Ryvora';
const SITE_URL = process.env.NEXT_PUBLIC_URL ?? '';
const DEFAULT_OG_IMAGE = `${SITE_URL}/opengraph-image.webp`;

type BuildMetadataOptions = {
  title: string;
  description: string;
  slug?: string;
  image?: string;
  noIndex?: boolean;
  type?: 'website' | 'article';
};

export function buildMetadata({
  title,
  description,
  slug,
  image = DEFAULT_OG_IMAGE,
  noIndex = false,
  type = 'website',
}: BuildMetadataOptions): Metadata {
  const fullTitle = `${title} — ${SITE_NAME}`;
  const canonical = slug ? `${SITE_URL}/${slug}` : SITE_URL;

  return {
    title: fullTitle,
    description,
    ...(noIndex && { robots: { index: false, follow: false } }),
    alternates: { canonical },
    openGraph: {
      type,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      url: canonical,
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
