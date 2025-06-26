import { fileURLToPath } from 'url';

import { buildConfig } from 'payload';
import { payloadCloudPlugin } from '@payloadcms/payload-cloud';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

import sharp from 'sharp';
import path from 'path';

import { Users } from '@/collections/Users';
import { Media } from '@/collections/Media';
import { Pages } from '@/collections/Pages';
import { plugins } from '@/utils/plugins';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    //
    importMap: {
      baseDir: path.resolve(dirname),
    },
    //
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  //
  collections: [Users, Media, Pages],
  editor: lexicalEditor(),
  //
  secret: process.env.PAYLOAD_SECRET || '',
  cors: [process.env.SITE_URL!],
  //
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  //
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  //
  sharp,
  //
  plugins: [...plugins, payloadCloudPlugin()],
  //
  jobs: {
    access: {
      run: ({ req: { user, headers } }) => {
        if (Boolean(user)) return true;
        const authHeader = headers.get('authorization');
        return authHeader === `Bearer ${process.env.CRON_SECRET}`;
      },
    },
  },
});
