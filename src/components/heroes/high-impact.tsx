import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Section, Container } from '@/components/ds';
import { CMSLink } from '@/components/plugins/link';
import { Media } from '@/components/plugins/media';
import RichText from '@/components/plugins/rich-text';

import type { Page } from '@/payload-types';

type Props = Page['hero'];

function HighImpactHero({ links, media, richText, callToAction }: Props) {
  return (
    <Section className="border-b bg-accent/30">
      <Container className="space-y-6 !text-center sm:space-y-12">
        {callToAction && (
          <Badge variant={callToAction.appearance || 'secondary'} asChild>
            <Link href={callToAction.url || '#'} target="_blank" rel="noopener noreferrer">
              {callToAction.label}
            </Link>
          </Badge>
        )}

        {richText && <RichText data={richText} />}

        {Array.isArray(links) && links.length > 0 && (
          <div className="flex justify-center gap-2">
            {links.map(({ link }, i) => (
              <CMSLink key={i} {...link} />
            ))}
          </div>
        )}

        {media && typeof media === 'object' && (
          <Media
            className="-mx-4 md:-mx-8 2xl:-mx-16"
            imgClassName="object-cover h-[600px]"
            priority
            resource={media}
          />
        )}
      </Container>
    </Section>
  );
}

export { HighImpactHero };
export type { Props as HighImpactHeroProps };
