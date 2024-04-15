import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "blog posts" },
    {
      name: "description",
      content: "all of my blog posts, sorted nicely",
    },
  ];
};

// TODO: BLOG POSTS!
export default function Index() {
  return (
    <div>
      <h1>blog posts</h1>
      <ul>
        <li>post 1</li>
        <li>post 2</li>
      </ul>
    </div>
  );
}
