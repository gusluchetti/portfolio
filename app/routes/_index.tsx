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
    <div>
      <h1>Welcome!</h1>
      <p>i might know what i'm doing!</p>
    </div>
  );
}
