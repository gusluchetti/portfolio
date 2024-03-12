import type { Post } from '$lib/utils';
import type { PageLoad } from './$types';
import { dev } from '$app/environment';

export const load: PageLoad = async ({ fetch }) => {
  const response = await fetch('/api/posts');
  let posts: Post[] = await response.json();
  posts = posts.filter((p) => {
    if (!dev) {
      return !p.meta.draft;
    } else {
      return true;
    }
  })

  return { posts };
};
