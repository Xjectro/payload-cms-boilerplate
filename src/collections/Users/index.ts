import { authenticated, anyone } from '@/features/payload/utils/payload-hooks/access';

import type { CollectionConfig } from 'payload';

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  access: {
    read: authenticated,
    create: anyone,
  },
  fields: [],
};
