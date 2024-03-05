import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import cat from '~/assets/vani.jpg'

export const meta: MetaFunction = () => {
  return [
    { title: "now" },
    { name: "description", content: "what i've been doing lately!" },
  ];
};

export default function Now() {
  return (
    <div>
      <h1 className="text-lg font-bold">nowadays</h1>
      <p className="max-w-prose py-3">
        got a cat! look how cute she is...
        <img className="w-72" src={cat} aria-label="a white cat with a brown-ish face" />
        other than that, working, getting ready for some cool things at work.
        some bigger news in a couple months...
      </p>
      <aside className="flex flex-col">
        <span>last updated <b>2024-03-05</b></span>
        <Link to="https://sive.rs/nowff"> what's a 'now' page? </Link>
      </aside>
    </div>
  )
}
