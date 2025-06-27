'use client';

import React from 'react';
import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

import type { Props as MediaProps } from '../types';

type Props = MediaProps;

function VideoMedia({ onClick, resource, videoClassName }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showFallback, setShowFallback] = useState<boolean>();

  useEffect(() => {
    const { current: video } = videoRef;
    if (video) {
      video.addEventListener('suspend', () => {
        setShowFallback(true);
        console.warn('Video was suspended, rendering fallback image.');
      });
    }
  }, []);

  if (resource && typeof resource === 'object') {
    // const { filename } = resource

    return (
      <video
        autoPlay
        className={cn(videoClassName)}
        controls={false}
        loop
        muted
        onClick={onClick}
        playsInline
        ref={videoRef}
      >
        <source src={`${process.env.NEXT_PUBLIC_SITE_URL}${resource.url}`} />
      </video>
    );
  }

  return null;
}

export { VideoMedia };
export type { Props as VideoMediaProps };
