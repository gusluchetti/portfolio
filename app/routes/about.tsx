import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "about me" },
    {
      name: "description",
      content: "an 'about' page containing various interesting topics about myself",
    },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>about</h1>
      <p>hi! i'm just a guy</p>
    </div>
  );
}
