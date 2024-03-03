import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "my resume" },
    { name: "description", content: "print this if you'd like!" },
  ];
};

export default function CV() {
  return (
    <>
      <h1>CV</h1>
    </>
  )
}
