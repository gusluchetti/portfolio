import { json, type LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { getMDXComponent } from 'mdx-bundler/client'
import { getPostContent } from "~/.server/post-utils";
import { useLoaderData } from "@remix-run/react";
import * as React from 'react';

export const meta: MetaFunction = () => {
  return [
    { title: "single blog post" },
    {
      name: "description",
      content: "just testing things out",
    },
  ];
};

export async function loader({ params, }: LoaderFunctionArgs) {
  const post = await getPostContent(params.post || '');
  return json({ data: post })
}

function Post({ code, frontmatter }: { code: any, frontmatter: any }) {
  // it's generally a good idea to memoize this function call to
  // avoid re-creating the component every render.
  const Component = React.useMemo(() => getMDXComponent(code), [code])
  return (
    <>
      <header>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.description}</p>
      </header>
      <div>
        <Component />
      </div>
    </>
  )
}

export default function Index() {
  const { data } = useLoaderData<typeof loader>();
  return (
    <div>
      <Post code={data.code} frontmatter={data.frontmatter} />
    </div>
  );
}
