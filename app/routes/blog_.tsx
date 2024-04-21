import type { MetaFunction } from "@remix-run/react";
import { NavLink, useLoaderData } from "@remix-run/react";

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


export const loader = async () => {
  const posts = getAllPosts();
  return posts;
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  const posts: [string, unknown][] = Object.entries(data);
  console.log(posts);

  return (
    <div>
      <h1>blog posts</h1>
      <ul>
        {posts.map(p => {
          const [path, data]: [path: string, frontmatter: any] = p;
          const frontmatter = data.frontmatter;
          const link = path.replace('./posts/', '/blog/').replace('.mdx', '');
          return <li><NavLink to={link}>{frontmatter.title}</NavLink></li>;
        })}
      </ul >
    </div>
  );
}
