import { fileURLToPath } from 'url';

import { buildConfig } from 'payload';
import { payloadCloudPlugin } from '@payloadcms/payload-cloud';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

import sharp from 'sharp';
import path from 'path';

sharp.cache(false);
sharp.concurrency(1);

import { Users } from '@/collections/Users';
import { Media } from '@/collections/Media';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  cors: [process.env.APP_URL!],
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [payloadCloudPlugin()],
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
