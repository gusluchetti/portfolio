import { json, type LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
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
    const formattedDate = new Date(data.frontmatter.date).toLocaleDateString();
    return (
      <>
        <div className="blog__post">
          <h2>{data.frontmatter.title}</h2>
          <h4 className="blog__subtitle">{data.frontmatter.description}</h4>
          <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            <PostContent />
          </div>
          <p>posted {formattedDate}</p>
        </div>
      </>
    );
  }
}
