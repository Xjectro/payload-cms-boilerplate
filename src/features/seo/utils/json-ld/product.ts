import type { WithContext, AggregateRatingJsonLd } from './types';

type OfferAvailability =
  | 'https://schema.org/InStock'
  | 'https://schema.org/OutOfStock'
  | 'https://schema.org/PreOrder'
  | 'https://schema.org/Discontinued';

export type OfferJsonLd = {
  '@type': 'Offer';
  price: number | string;
  priceCurrency: string;
  availability?: OfferAvailability;
  url?: string;
  priceValidUntil?: string;
  seller?: { '@type': 'Organization'; name: string };
};

export type ProductJsonLd = WithContext<{
  '@type': 'Product';
  name: string;
  description?: string;
  sku?: string;
  gtin?: string;
  image?: string | string[];
  brand?: { '@type': 'Brand'; name: string };
  offers?: OfferJsonLd | OfferJsonLd[];
  aggregateRating?: AggregateRatingJsonLd;
  review?: ReviewJsonLd[];
}>;

type ReviewJsonLd = {
  '@type': 'Review';
  reviewRating: { '@type': 'Rating'; ratingValue: number | string; bestRating?: number | string };
  author: { '@type': 'Person'; name: string };
  reviewBody?: string;
};

type BuildProductOptions = {
  name: string;
  description?: string;
  sku?: string;
  gtin?: string;
  images?: string[];
  brandName?: string;
  offers?: Omit<OfferJsonLd, '@type'> | Omit<OfferJsonLd, '@type'>[];
  aggregateRating?: Omit<AggregateRatingJsonLd, '@type'>;
};

export function buildProductJsonLd(options: BuildProductOptions): ProductJsonLd {
  const { name, description, sku, gtin, images, brandName, offers, aggregateRating } = options;

  const normalizeOffers = (o: NonNullable<typeof offers>): OfferJsonLd | OfferJsonLd[] => {
    if (Array.isArray(o)) {
      return o.map((item) => ({ '@type': 'Offer' as const, ...item }));
    }
    return { '@type': 'Offer' as const, ...o };
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    ...(description && { description }),
    ...(sku && { sku }),
    ...(gtin && { gtin }),
    ...(images && { image: images.length === 1 ? images[0] : images }),
    ...(brandName && { brand: { '@type': 'Brand', name: brandName } }),
    ...(offers && { offers: normalizeOffers(offers) }),
    ...(aggregateRating && { aggregateRating: { '@type': 'AggregateRating', ...aggregateRating } }),
  };
}
