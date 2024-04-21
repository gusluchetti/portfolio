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
  console.log('server: ', posts);
  return posts;
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  console.log('client: ', data);
  return (
    <div>
      <h1>blog posts</h1>
      <ul>
        <li><NavLink to="/blog/test">test blog post</NavLink></li>
      </ul>
    </div>
  );
}
