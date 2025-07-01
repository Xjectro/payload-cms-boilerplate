'use client';

import React from 'react';

import { useRouter } from 'next/navigation';
import { RefreshRouteOnSave as PayloadLivePreview } from '@payloadcms/live-preview-react';

export function LivePreviewListener() {
  const router = useRouter();
  return (
    <PayloadLivePreview refresh={router.refresh} serverURL={process.env.NEXT_PUBLIC_SITE_URL!} />
  );
}
