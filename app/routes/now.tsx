import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "now" },
    {
      name: "description",
      content: "what i've been doing these days!",
    },
  ];
};

// TODO: BLOG POSTS!
export default function Index() {
  return (
    <div>
      <h1>now</h1>
      <p>these are the fun things i've been doing!</p>
    </div>
  );
}
