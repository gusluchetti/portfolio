import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "luchetti.dev" },
    { name: "description", content: "my blog!" },
  ];
};

export default function Index() {
  return (
    <div className="max-w-prose">
      <h2 className="text-lg font-bold">bio</h2>
      <p>
        Hi! My name is Gustavo Luchetti, a 23 year-old full-stack developer
        currently based in São Paulo, Brazil. Besides full-stack, I've worked with
        data integratiton for a bit, and studied Artificial Intelligence for a year.
        To no one's surprise, I game a lot! I also go bouldering from time to time,
        and I make a pretty good chocolate chip cookie.
      </p>
      <h2 className="text-lg font-bold">purpose</h2>
      <p>
        I see this website as both journal and portfolio. It’s very easy these days
        to consume content (or code) and to never give back, so this is my way of
        remeding that.
      </p>
      <p>
        My current goal is to write a blog post once a month, at the very least. I’ll try my best to stick to that schedule.
      </p>
    </div>
  );
}
