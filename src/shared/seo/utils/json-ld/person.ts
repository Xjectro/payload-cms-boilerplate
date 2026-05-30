import type { WithContext, ImageObjectJsonLd, PostalAddressJsonLd } from './types';

export type PersonJsonLd = WithContext<{
  '@type': 'Person';
  name: string;
  url?: string;
  email?: string;
  telephone?: string;
  jobTitle?: string;
  description?: string;
  image?: ImageObjectJsonLd | string;
  sameAs?: string[];
  address?: PostalAddressJsonLd;
  worksFor?: { '@type': 'Organization'; name: string; url?: string };
  knowsAbout?: string[];
}>;

type BuildPersonOptions = {
  name: string;
  url?: string;
  email?: string;
  telephone?: string;
  jobTitle?: string;
  description?: string;
  imageUrl?: string;
  sameAs?: string[];
  address?: Omit<PostalAddressJsonLd, '@type'>;
  worksFor?: { name: string; url?: string };
  knowsAbout?: string[];
};

export function buildPersonJsonLd(options: BuildPersonOptions): PersonJsonLd {
  const {
    name,
    url,
    email,
    telephone,
    jobTitle,
    description,
    imageUrl,
    sameAs,
    address,
    worksFor,
    knowsAbout,
  } = options;

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    ...(url && { url }),
    ...(email && { email }),
    ...(telephone && { telephone }),
    ...(jobTitle && { jobTitle }),
    ...(description && { description }),
    ...(imageUrl && { image: { '@type': 'ImageObject', url: imageUrl } }),
    ...(sameAs && { sameAs }),
    ...(address && { address: { '@type': 'PostalAddress', ...address } }),
    ...(worksFor && { worksFor: { '@type': 'Organization', ...worksFor } }),
    ...(knowsAbout && { knowsAbout }),
  };
}
