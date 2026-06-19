import 'server-only';
import { getCacheId } from '../auth/cache.service';

export const getCacheTag = async (tag: string): Promise<string> => {
  try {
    const cacheId = await getCacheId();

    if (!cacheId) {
      return '';
    }

    return `${tag}-${cacheId}`;
  } catch (error) {
    return '';
  }
};

export const getCacheOptions = async (tag: string): Promise<{ tags: string[] } | {}> => {
  const cacheTag = await getCacheTag(tag);

  if (!cacheTag) {
    return {};
  }

  return { tags: [`${cacheTag}`] };
};
