import type { MetaFunction } from "@remix-run/react";
import { Link, NavLink, json, useLoaderData } from "@remix-run/react";

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
      <ul>
        {posts.map(p => {
          const [path, post]: [path: string, post: any] = p;
          const link: string = path.replace('./posts/', '/blog/').replace('.mdx', '');
          return (
            <li key={path}>
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
