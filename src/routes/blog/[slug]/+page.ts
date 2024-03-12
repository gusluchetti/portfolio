import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const post = await import(`../${params.slug}.md`)
  const { title, date } = post.metadata;

  return {
    title,
    date,
    Content: post.default,
  }
};
