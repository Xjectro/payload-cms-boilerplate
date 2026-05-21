import { getSiteUrl } from './helpers';
import type { WithContext, PostalAddressJsonLd, GeoJsonLd, AggregateRatingJsonLd } from './types';

type DayOfWeek =
  | 'https://schema.org/Monday'
  | 'https://schema.org/Tuesday'
  | 'https://schema.org/Wednesday'
  | 'https://schema.org/Thursday'
  | 'https://schema.org/Friday'
  | 'https://schema.org/Saturday'
  | 'https://schema.org/Sunday';

export type OpeningHoursSpecificationJsonLd = {
  '@type': 'OpeningHoursSpecification';
  dayOfWeek: DayOfWeek | DayOfWeek[];
  opens: string;
  closes: string;
};

export type LocalBusinessJsonLd = WithContext<{
  '@type': 'LocalBusiness' | string;
  name: string;
  url?: string;
  telephone?: string;
  email?: string;
  description?: string;
  image?: string | string[];
  priceRange?: string;
  address?: PostalAddressJsonLd;
  geo?: GeoJsonLd;
  openingHoursSpecification?: OpeningHoursSpecificationJsonLd[];
  aggregateRating?: AggregateRatingJsonLd;
  sameAs?: string[];
  currenciesAccepted?: string;
  paymentAccepted?: string;
}>;

type BuildLocalBusinessOptions = {
  type?: string;
  name?: string;
  telephone?: string;
  email?: string;
  description?: string;
  images?: string[];
  priceRange?: string;
  address?: Omit<PostalAddressJsonLd, '@type'>;
  geo?: Omit<GeoJsonLd, '@type'>;
  openingHours?: { days: DayOfWeek | DayOfWeek[]; opens: string; closes: string }[];
  aggregateRating?: Omit<AggregateRatingJsonLd, '@type'>;
  sameAs?: string[];
  currenciesAccepted?: string;
  paymentAccepted?: string;
};

export function buildLocalBusinessJsonLd(
  options: BuildLocalBusinessOptions = {},
): LocalBusinessJsonLd {
  const {
    type = 'LocalBusiness',
    name,
    telephone,
    email,
    description,
    images,
    priceRange,
    address,
    geo,
    openingHours,
    aggregateRating,
    sameAs,
    currenciesAccepted,
    paymentAccepted,
  } = options;

  return {
    '@context': 'https://schema.org',
    '@type': type,
    name: name ?? process.env.NEXT_PUBLIC_TITLE!,
    url: getSiteUrl(),
    ...(telephone && { telephone }),
    ...(email && { email }),
    ...(description && { description }),
    ...(images && { image: images.length === 1 ? images[0] : images }),
    ...(priceRange && { priceRange }),
    ...(address && { address: { '@type': 'PostalAddress', ...address } }),
    ...(geo && { geo: { '@type': 'GeoCoordinates', ...geo } }),
    ...(openingHours && {
      openingHoursSpecification: openingHours.map((h) => ({
        '@type': 'OpeningHoursSpecification' as const,
        dayOfWeek: h.days,
        opens: h.opens,
        closes: h.closes,
      })),
    }),
    ...(aggregateRating && { aggregateRating: { '@type': 'AggregateRating', ...aggregateRating } }),
    ...(sameAs && { sameAs }),
    ...(currenciesAccepted && { currenciesAccepted }),
    ...(paymentAccepted && { paymentAccepted }),
  };
}
