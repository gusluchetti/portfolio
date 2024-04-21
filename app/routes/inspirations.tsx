import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "good content" },
    {
      name: "description",
      content: "any type of media that i've enjoyed or that made me think in a different way about my craft",
    },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>here goes:</h1>
      <ul>
        <li>ThePrimeagen, for inspiring me to really get into vim/neovim</li>
        <li>http://www.michieldb.nl/, made a fantastic mouse cursor pack that i use everyday!</li>
        <li>https://samwho.dev, really nice very visual website</li>
        <li>https://www.jvt.me/, super clean and really resonates with my ideals</li>
        <li>https://phiresky.github.io/blog/, not sure why but is very minimal</li>
        <li>Jamie Brandon (https://www.scattered-thoughts.net), more specifically,
          (https://www.scattered-thoughts.net/writing/reflections-on-a-decade-of-coding/)</li>
      </ul>
    </div>
  );
}
