import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "luchetti.dev" },
    {
      name: "description",
      content: "trying cloudflare workers",
    },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome!</h1>
      <p>once again...</p>
      <p>a new beginning</p>
    </div>
  );
}
