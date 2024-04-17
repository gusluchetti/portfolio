import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "luchetti.dev" },
    {
      name: "description",
      content: "landing page for the best website ever! luchetti.dev",
    },
  ];
};

export default function Index() {
  return (
    <div className="landing">
      <h1>hi!</h1>
      <p>glad to have you! this is my blog/portfolio.</p>
      <p>i like to share things i've learned about over the years, not only as a developer,
        but as someone that has always wanted to get to the bottom of things.</p>
      {/*
      <p>if you'd like to keep up with updates/new blog posts, do signup for the newsletter below:</p>
      */}
    </div>
  );
}
