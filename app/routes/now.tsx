import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "now" },
    {
      name: "description",
      content: "what i've been doing these days!",
    },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>now</h1>
      <p>
        so, i spent quite a bit of time reworking the website. i don't think the time spent was worth it, but i'm just glad
        that i managed to finally finish it.
      </p>
      <div className="now__grid">
        <section>
          <h3>books</h3>
        </section>
        <section>
          <h3>media</h3>
        </section>
        <section>
          <h3>others?</h3>
        </section>
      </div>
    </div>
  );
}
