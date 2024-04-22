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
      <>
        <NavLink to='..'>&lt;- back</NavLink>
        <div className="blog__post">
          <h2>{data.frontmatter.title}</h2>
          <h4>{data.frontmatter.description}</h4>
          <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            <PostContent />
          </div>
          <p>posted {data.frontmatter.date}</p>
        </div>
      </>
    );
  }
}
