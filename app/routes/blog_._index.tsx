import type { MetaFunction } from "@remix-run/node";

import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getPosts } from "~/.server/posts";
import { Post } from "components/post";

export const loader = async () => json(await getPosts());

export const meta: MetaFunction = () => {
  return [
    { title: "blog posts" },
    { name: "description", content: "all my blog posts in one place, enjoy!" },
  ];
};

export default function Blog() {
  const posts = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>my blog posts:</h1>
      {posts.map((post) => (
        <ul key={post.slug}>
          <Post {...post} />
        </ul>
      ))}
    </div>
  )
}
