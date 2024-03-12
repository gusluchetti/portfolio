import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const post = await import(`../${params.slug}.md`)
  const { title, date } = post.metadata;
  const Content = post.default;

  return {
    title,
    date,
    Content,
  }
};
