import React from 'react';

import RichText from '@/components/payload/rich-text';
import { CMSLink } from '@/components/payload/fields/link';
import { Container, Section } from '@/components/ui/design-system';

import type { CallToActionBlock as CTABlockProps } from '@/payload-types';

type Props = CTABlockProps;

function CallToActionBlock({ links, richText }: Props) {
  return (
    <Section>
      <Container className="flex flex-col gap-8 rounded border bg-primary p-4 md:flex-row md:items-center md:justify-between">
        <div className="flex max-w-[48rem] items-center">
          {richText && (
            <RichText
              className="mb-0 !text-primary-foreground"
              data={richText}
              enableGutter={false}
            />
          )}
        </div>
        <div className="flex flex-col gap-8">
          {(links || []).map(({ link }, i) => {
            return <CMSLink key={i} size="lg" {...link} />;
          })}
        </div>
      </Container>
    </Section>
  );
}

export { CallToActionBlock };
export type { Props as CallToActionBlockProps };
