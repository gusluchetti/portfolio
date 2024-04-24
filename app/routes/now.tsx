import { type MetaFunction } from "@remix-run/react";

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
      <div className="now__title">
        <h1>nowadays</h1>
        <h4 className="blog__subtitle">last_update: 2024-04-22 | <a style={{ opacity: '40%' }} href="https://sive.rs/nowff">what's a now page?</a>
        </h4>
      </div>
      <p>
        so, the keen-eyed among you might notice the website's looking a bit different.
        no surprise that i managed to go down the web dev rabbit hole, and pretty much remade the website.
      </p>
      <p>
        although i'm not super happy with having spent 20+ hours on this project (again), i'm very happy with the initial results,
        and i'm glad that i got acquainted with the 'latest' ways of developing and hosting a website.
        there's more info on the technical details of the overhaul on the <a href="https://github.com/gusluchetti/portfolio">repo's</a> README.
        might even write something up later. for now, i'd rather close this chapter and work on something new.
      </p>
      <br />
      <p>
        besides that, all is well! i've recently updated my workflow to finally include <a href="https://github.com/tmux/tmux/wiki">tmux</a>,
        and that couldn't have gone better. everything feels seamless and the only thing stopping my progress is how fast i can type/write commands down.
      </p>
      <p>other than that, no big news! i want to ride this wave of productivity i've been feeling the last couple of days to get cool stuff done.</p>
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
