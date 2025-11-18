import type { Metadata } from 'next';

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  siteName: process.env.NEXT_PUBLIC_APP_TITLE,
  title: process.env.NEXT_PUBLIC_APP_TITLE,
  images: [`${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.webp`],
};

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  };
};
