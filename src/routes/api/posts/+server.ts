import { fetchMarkdownPosts } from "$lib/utils";
import { json } from '@sveltejs/kit';

export const GET = async () => {
  const allPosts = await fetchMarkdownPosts();

  const sortedPosts = allPosts.sort((a, b) => {
    let da = new Date(a.meta.date);
    let db = new Date(b.meta.date);
    return db.valueOf() - da.valueOf();
  })

  return json(sortedPosts);
};
