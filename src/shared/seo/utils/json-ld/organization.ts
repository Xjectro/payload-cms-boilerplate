import { getSiteUrl } from './helpers';
import type {
  WithContext,
  PostalAddressJsonLd,
  ContactPointJsonLd,
  ImageObjectJsonLd,
} from './types';

type OrganizationType =
  | 'Organization'
  | 'Corporation'
  | 'NGO'
  | 'EducationalOrganization'
  | 'GovernmentOrganization';

export type OrganizationJsonLd = WithContext<{
  '@type': OrganizationType;
  name: string;
  url?: string;
  logo?: ImageObjectJsonLd;
  description?: string;
  email?: string;
  telephone?: string;
  sameAs?: string[];
  address?: PostalAddressJsonLd;
  contactPoint?: ContactPointJsonLd | ContactPointJsonLd[];
  foundingDate?: string;
  numberOfEmployees?: { '@type': 'QuantitativeValue'; value: number };
}>;

type BuildOrganizationOptions = {
  type?: OrganizationType;
  description?: string;
  email?: string;
  telephone?: string;
  logoUrl?: string;
  logoWidth?: number;
  logoHeight?: number;
  sameAs?: string[];
  address?: Omit<PostalAddressJsonLd, '@type'>;
  contactPoint?: Omit<ContactPointJsonLd, '@type'> | Omit<ContactPointJsonLd, '@type'>[];
  foundingDate?: string;
  numberOfEmployees?: number;
};

export function buildOrganizationJsonLd(
  options: BuildOrganizationOptions = {},
): OrganizationJsonLd {
  const {
    type = 'Organization',
    description,
    email,
    telephone,
    logoUrl,
    logoWidth,
    logoHeight,
    sameAs,
    address,
    contactPoint,
    foundingDate,
    numberOfEmployees,
  } = options;

  const normalizeContactPoint = (
    cp: Omit<ContactPointJsonLd, '@type'> | Omit<ContactPointJsonLd, '@type'>[],
  ): ContactPointJsonLd | ContactPointJsonLd[] => {
    if (Array.isArray(cp)) {
      return cp.map((c) => ({ '@type': 'ContactPoint' as const, ...c }));
    }
    return { '@type': 'ContactPoint' as const, ...cp };
  };

  return {
    '@context': 'https://schema.org',
    '@type': type,
    name: process.env.NEXT_PUBLIC_TITLE!,
    url: getSiteUrl(),
    ...(description && { description }),
    ...(email && { email }),
    ...(telephone && { telephone }),
    ...(logoUrl && {
      logo: {
        '@type': 'ImageObject',
        url: logoUrl,
        ...(logoWidth && { width: logoWidth }),
        ...(logoHeight && { height: logoHeight }),
      },
    }),
    ...(sameAs && { sameAs }),
    ...(address && { address: { '@type': 'PostalAddress', ...address } }),
    ...(contactPoint && { contactPoint: normalizeContactPoint(contactPoint) }),
    ...(foundingDate && { foundingDate }),
    ...(numberOfEmployees !== undefined && {
      numberOfEmployees: { '@type': 'QuantitativeValue', value: numberOfEmployees },
    }),
  };
}
