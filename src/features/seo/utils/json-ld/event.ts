import type {
  WithContext,
  ImageObjectJsonLd,
  PostalAddressJsonLd,
  AggregateRatingJsonLd,
} from './types';

type EventStatus =
  | 'https://schema.org/EventScheduled'
  | 'https://schema.org/EventCancelled'
  | 'https://schema.org/EventMovedOnline'
  | 'https://schema.org/EventPostponed'
  | 'https://schema.org/EventRescheduled';

type EventAttendanceMode =
  | 'https://schema.org/OfflineEventAttendanceMode'
  | 'https://schema.org/OnlineEventAttendanceMode'
  | 'https://schema.org/MixedEventAttendanceMode';

export type EventJsonLd = WithContext<{
  '@type': 'Event';
  name: string;
  startDate: string;
  endDate?: string;
  description?: string;
  url?: string;
  image?: ImageObjectJsonLd | string | string[];
  eventStatus?: EventStatus;
  eventAttendanceMode?: EventAttendanceMode;
  location?: {
    '@type': 'Place' | 'VirtualLocation';
    name?: string;
    url?: string;
    address?: PostalAddressJsonLd;
  };
  organizer?: { '@type': 'Organization' | 'Person'; name: string; url?: string };
  performer?: { '@type': 'Person' | 'PerformingGroup'; name: string }[];
  offers?: {
    '@type': 'Offer';
    price?: number | string;
    priceCurrency?: string;
    url?: string;
    availability?: string;
    validFrom?: string;
  };
  aggregateRating?: AggregateRatingJsonLd;
}>;

type BuildEventOptions = {
  name: string;
  startDate: string;
  endDate?: string;
  description?: string;
  url?: string;
  imageUrls?: string[];
  eventStatus?: EventStatus;
  eventAttendanceMode?: EventAttendanceMode;
  location?: {
    type?: 'Place' | 'VirtualLocation';
    name?: string;
    url?: string;
    address?: Omit<PostalAddressJsonLd, '@type'>;
  };
  organizer?: { type?: 'Organization' | 'Person'; name: string; url?: string };
  performers?: { name: string }[];
  offer?: {
    price?: number | string;
    priceCurrency?: string;
    url?: string;
    availability?: string;
    validFrom?: string;
  };
};

export function buildEventJsonLd(options: BuildEventOptions): EventJsonLd {
  const {
    name,
    startDate,
    endDate,
    description,
    url,
    imageUrls,
    eventStatus,
    eventAttendanceMode,
    location,
    organizer,
    performers,
    offer,
  } = options;

  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name,
    startDate,
    ...(endDate && { endDate }),
    ...(description && { description }),
    ...(url && { url }),
    ...(imageUrls && {
      image: imageUrls.length === 1 ? { '@type': 'ImageObject', url: imageUrls[0] } : imageUrls,
    }),
    ...(eventStatus && { eventStatus }),
    ...(eventAttendanceMode && { eventAttendanceMode }),
    ...(location && {
      location: {
        '@type': location.type ?? 'Place',
        ...(location.name && { name: location.name }),
        ...(location.url && { url: location.url }),
        ...(location.address && { address: { '@type': 'PostalAddress', ...location.address } }),
      },
    }),
    ...(organizer && {
      organizer: {
        '@type': organizer.type ?? 'Organization',
        name: organizer.name,
        ...(organizer.url && { url: organizer.url }),
      },
    }),
    ...(performers && {
      performer: performers.map((p) => ({ '@type': 'Person' as const, name: p.name })),
    }),
    ...(offer && { offers: { '@type': 'Offer', ...offer } }),
  };
}
