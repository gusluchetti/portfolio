import type { MetaFunction } from "@remix-run/cloudflare";
import { NavLink } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "luchetti.dev" },
    {
      name: "description",
      content: "landing page for the best website ever!",
    },
  ];
};

export default function Index() {
  return (
    <div className="landing">
      <div className="hero">
        <h1>luchetti.dev</h1>
        <p>hi, glad to have you! this is my blog/portfolio.</p>
        <p>i like to share things i've learned about over the years, not only as a developer,
          but as someone that has always wanted to get to the bottom of things.</p>
        <p>
          here you'll find my <NavLink to="/blog">ramblings</NavLink>,
          what i'm up to <NavLink to="/now">nowadays</NavLink> and
          a (hopefully) up-to-date <NavLink to="/resume">copy of my CV</NavLink>.
        </p>
      </div>
      <section>
        23, terminal fiend, cat owner
      </section>
    </div>
  );
}
