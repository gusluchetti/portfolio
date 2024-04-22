import { json, type LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { NavLink, useLoaderData } from "@remix-run/react";
import { useMemo } from "react";

import { getMDXComponent } from 'mdx-bundler/client'
import { getPostContent } from "~/.server/post-utils";

export async function loader({ params, }: LoaderFunctionArgs) {
  const post = await getPostContent(params.post || '');
  return json(post)
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: data?.frontmatter.title },
  ];
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  if (data) {
    const PostContent = useMemo(() => getMDXComponent(data?.code), [data.code])
    return (
      <div>
        <NavLink to='..'>&lt;- back</NavLink>
        <h2>{data.frontmatter.title}</h2>
        <h4>{data.frontmatter.description}</h4>

        <br />
        <div>
          <PostContent />
        </div>
        <br />

        <p>
          posted <strong>{data.frontmatter.date}</strong>
        </p>
      </div>
    );
  }
}
