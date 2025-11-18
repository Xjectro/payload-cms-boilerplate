import { withPayload } from '@payloadcms/next/withPayload';
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.join(__dirname),
};

export default withPayload(nextConfig);
