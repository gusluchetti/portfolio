import type { MetaFunction } from "@remix-run/node";
import CV from 'components/cv.mdx'

export const meta: MetaFunction = () => {
  return [
    { title: "my resume" },
    { name: "description", content: "print this if you'd like!" },
  ];
};

export default function Component() {
  return (
    <div className="cv">
      <CV />
    </div>
  )
}
