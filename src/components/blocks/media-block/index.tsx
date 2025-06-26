import React from 'react';

import { cn } from '@/lib/utils';

import { Section, Container } from '@/components/ds';
import { Media } from '@/components/plugins/media';

import type { StaticImageData } from 'next/image';
import type { MediaBlock as MediaBlockProps } from '@/payload-types';

interface Props extends MediaBlockProps {
  imgClassName?: string;
  staticImage?: StaticImageData;
}

function MediaBlock({ imgClassName, media, staticImage }: Props) {
  return (
    <Section>
      <Container>
        {(media || staticImage) && (
          <Media imgClassName={cn('border', imgClassName)} resource={media} src={staticImage} />
        )}
      </Container>
    </Section>
  );
}

export { MediaBlock };
export type { Props as MediaBlockProps };
