import type { MetaFunction } from "@remix-run/react";
import { NavLink, json, useLoaderData } from "@remix-run/react";

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
  const data = useLoaderData<typeof loader>();
  const posts: [string, unknown][] = Object.entries(data);
  console.dir(posts);

  return (
    <div>
      <h1>blog posts</h1>
      <ul>
        {posts.map(p => {
          const [path, post]: [path: string, post: any] = p;
          const link = path.replace('./posts/', '/blog/').replace('.mdx', '');
          return (
            <li key={path}><NavLink to={link}>
              {post.frontmatter.title}
            </NavLink></li>
          );
        })}
      </ul >
    </div>
  );
}
