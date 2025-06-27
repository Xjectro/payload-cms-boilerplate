import React from 'react';
import { Fragment } from 'react';

import { ImageMedia } from './image-media';
import { VideoMedia } from './video-media';

import type { Props } from './types';

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
