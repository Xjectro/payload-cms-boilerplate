import React from 'react';

import { cn } from '@/lib/utils';

import { Container, Section } from '@/components/ds';
import RichText from '@/components/plugins/rich-text';
import { CMSLink } from '@/components/plugins/link';

import type { ContentBlock as ContentBlockProps } from '@/payload-types';

type Props = ContentBlockProps;

function ContentBlock({ columns }: Props) {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-4 md:gap-x-8 lg:grid-cols-12 lg:gap-x-16">
          {columns &&
            columns.length > 0 &&
            columns.map((col, index) => {
              const { enableLink, link, richText, size } = col;

              return (
                <div
                  className={cn(`col-span-1`, {
                    'sm:col-span-2 md:col-span-4 lg:col-span-12': size === 'full',
                    'sm:col-span-1 md:col-span-2 lg:col-span-6': size === 'half',
                    'sm:col-span-1 md:col-span-2 lg:col-span-4': size === 'oneThird',
                    'sm:col-span-2 md:col-span-3 lg:col-span-8': size === 'twoThirds',
                  })}
                  key={index}
                >
                  {richText && <RichText data={richText} enableGutter={false} />}

                  {enableLink && <CMSLink {...link} />}
                </div>
              );
            })}
        </div>
      </Container>
    </Section>
  );
}

export { ContentBlock };
export type { Props as ContentBlockProps };
