import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "luchetti.dev" },
    { name: "description", content: "my blog!" },
  ];
};

export default function Index() {
  return (
    <>
      <h2 className="text-lg font-bold">bio</h2>
      <p>this is a test!</p>
      <h2 className="text-lg font-bold">purpose</h2>
      <p>another test. wow!</p>
    </>
  );
}
