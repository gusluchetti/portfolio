import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
  const response = await fetch('/api/posts');
  const posts = await response.json();
  return { posts };
};
