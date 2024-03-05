import type { MetaFunction } from "@remix-run/node";
import { NavLink } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "blog posts" },
    { name: "description", content: "all my blog posts in one place, enjoy!" },
  ];
};

export default function Blog() {
  return (
    <div>
      <h1>my blog posts:</h1>
      <NavLink to="test-post">test</NavLink>
    </div>
  )
}
