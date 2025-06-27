import path from 'path';
import { fileURLToPath } from 'url';
import { admin, anyone } from '@/utils/payload-hooks/access';

import type { CollectionConfig } from 'payload';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: anyone,
    create: admin,
    update: admin,
    delete: admin,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    staticDir: path.join(dirname, '../../../public/media'),
    adminThumbnail: 'thumbnail',
    focalPoint: true,
    mimeTypes: ['image/*'],
    imageSizes: [
      {
        name: 'thumbnail',
        width: 300,
      },
      {
        name: 'square',
        width: 500,
        height: 500,
      },
      {
        name: 'small',
        width: 600,
      },
      {
        name: 'medium',
        width: 900,
      },
      {
        name: 'large',
        width: 1400,
        withoutEnlargement: true,
      },
      {
        name: 'xlarge',
        width: 1920,
        withoutEnlargement: true,
      },
      {
        name: 'og',
        width: 1200,
        height: 630,
        crop: 'center',
      },
    ],
  },
};
