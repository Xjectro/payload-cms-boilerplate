import React from 'react';
import { Fragment } from 'react';

import { ImageMedia } from '@/features/payload/components/fields/media/image-media';
import { VideoMedia } from '@/features/payload/components/fields/media/video-media';

import type { Props } from '@/features/payload/components/fields/media/types';

function Media({ className, htmlElement = 'div', resource, ...props }: Props) {
  const isVideo = typeof resource === 'object' && resource?.mimeType?.includes('video');
  const Tag = htmlElement || Fragment;

  return (
    <Tag
      {...(htmlElement !== null
        ? {
            className,
          }
        : {})}
    >
      {isVideo ? (
        <VideoMedia resource={resource} {...props} />
      ) : (
        <ImageMedia resource={resource} {...props} />
      )}
    </Tag>
  );
}

export { Media };
export type { Props as MediaProps };
