import { json, type LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import * as React from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { getPost } from "~/.server/post-utils";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "single blog post" },
    {
      name: "description",
      content: "just testing things out",
    },
  ];
};

export async function loader({
  request,
}: LoaderFunctionArgs) {
  const post = await getPost();
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
  const loaded = useLoaderData<typeof loader>();
  const post = loaded.data;
  return (
    <div>
      <Post code={post.code} frontmatter={post.frontmatter} />
    </div>
  );
}
