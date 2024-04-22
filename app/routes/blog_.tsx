import type { MetaFunction } from "@remix-run/react";
import { Link, json, useLoaderData } from "@remix-run/react";

import { getAllPosts } from "~/.server/post-utils";

export const meta: MetaFunction = () => {
  return [
    { title: "blog posts" },
    {
      name: "description",
      content: "all of my blog posts, sorted nicely",
    },
  ];
};

export async function loader() {
  const posts = getAllPosts();
  return json(posts)
}

export default function Index() {
  const posts = useLoaderData<typeof loader>();

  return (
    <div className="blog__index">
      <h1>blog posts</h1>
      <p>this is where you'll find all my blog posts.</p>
      <ul>
        {posts.map(p => {
          const [path, post]: [path: string, post: any] = p;
          const link: string = path.replace('./posts/', '/blog/').replace('.mdx', '');
          const isDraft = post.frontmatter.draft as boolean;
          return (
            <li key={path} style={{ color: isDraft ? 'var(--w-500)' : "inherit" }}>
              <Link to={link} prefetch="intent">
                {post.frontmatter.title}
              </Link>
            </li>
          );
        })}
      </ul >
    </div>
  );
}
