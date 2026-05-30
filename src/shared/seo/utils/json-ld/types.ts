export type JsonLdContext = 'https://schema.org';

export type WithContext<T extends Record<string, unknown>> = T & {
  '@context': JsonLdContext;
};

export type ImageObjectJsonLd = {
  '@type': 'ImageObject';
  url: string;
  width?: number;
  height?: number;
  caption?: string;
};

export type PostalAddressJsonLd = {
  '@type': 'PostalAddress';
  streetAddress?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry?: string;
};

export type ContactPointJsonLd = {
  '@type': 'ContactPoint';
  telephone?: string;
  contactType?: string;
  email?: string;
  areaServed?: string | string[];
  availableLanguage?: string | string[];
};

export type GeoJsonLd = {
  '@type': 'GeoCoordinates';
  latitude: number;
  longitude: number;
};

export type RatingJsonLd = {
  '@type': 'Rating';
  ratingValue: number | string;
  bestRating?: number | string;
  worstRating?: number | string;
};

export type AggregateRatingJsonLd = {
  '@type': 'AggregateRating';
  ratingValue: number | string;
  reviewCount?: number | string;
  ratingCount?: number | string;
  bestRating?: number | string;
  worstRating?: number | string;
};

export type MonetaryAmountJsonLd = {
  '@type': 'MonetaryAmount';
  currency: string;
  value: number | string;
};
