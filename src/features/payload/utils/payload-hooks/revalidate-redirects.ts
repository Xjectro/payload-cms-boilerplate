import { updateTag } from 'next/cache';

import type { CollectionAfterChangeHook } from 'payload';

export const revalidateRedirects: CollectionAfterChangeHook = ({ doc, req: { payload } }) => {
  payload.logger.info(`Revalidating redirects`);
  updateTag('redirects');
  return doc;
};
