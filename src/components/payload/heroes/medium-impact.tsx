import Link from 'next/link';

import { Section, Container } from '@/components/ui/design-system';
import { CMSLink } from '@/components/payload/fields/link';
import { Badge } from '@/components/ui/primitives/badge';
import { Media } from '@/components/payload/fields/media';

import RichText from '@/components/payload/rich-text';

import type { Page } from '@/payload-types';

type Props = Page['hero'];

function MediumImpactHero({ links, media, richText, callToAction }: Props) {
  return (
    <Section className="border-b bg-accent/30">
      <Container className="space-y-6 sm:space-y-8">
        {callToAction && (
          <Badge variant="outline" asChild>
            <Link href={callToAction.url || '#'} target="_blank" rel="noopener noreferrer">
              {callToAction.label}
            </Link>
          </Badge>
        )}

        {richText && <RichText data={richText} enableGutter={false} />}

        {media && typeof media === 'object' && (
          <Media imgClassName="object-cover h-[500px]" priority resource={media} />
        )}

        {Array.isArray(links) && links.length > 0 && (
          <ul className="flex gap-2">
            {links.map(({ link }, i) => {
              return (
                <li key={i}>
                  <CMSLink {...link} />
                </li>
              );
            })}
          </ul>
        )}
      </Container>
    </Section>
  );
}

export { MediumImpactHero };
export type { Props as MediumImpactHeroProps };
