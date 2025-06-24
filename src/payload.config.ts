import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { fileURLToPath } from 'url'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'

// If you want to use Cloudflare R2 or AWS S3, uncomment the following lines
// import { s3Storage } from '@payloadcms/storage-s3'

import sharp from 'sharp'
import path from 'path'

import { Users } from './collections/Users'
import { Media } from './collections/Media'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

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
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
/**
 *     vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
 */

    // s3Storage({
    //   collections: {
    //     media: true,
    //   },
    //   bucket: process.env.R2_BUCKET || '',
    //   config: {
    //     endpoint: process.env.R2_ENDPOINT || '',
    //     credentials: {
    //       accessKeyId: process.env.R2_ACCESS_KEY_ID || '',
    //       secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || '',
    //     },
    //     region: 'auto',
    //     forcePathStyle: true,
    //   },
    // }),
  ],
})
