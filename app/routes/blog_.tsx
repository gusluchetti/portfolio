import type { MetaFunction } from "@remix-run/react";
import { NavLink } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "blog posts" },
    {
      name: "description",
      content: "all of my blog posts, sorted nicely",
    },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>blog posts</h1>
      <ul>
        <li><NavLink to="/blog/test">test blog post</NavLink></li>
      </ul>
    </div>
  );
}
