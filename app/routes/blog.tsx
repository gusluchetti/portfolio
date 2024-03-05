import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "a blog post" },
    { name: "description", content: "no idea which!" },
  ];
};

export default function SingleBlog() {
  return (
    <>
      <Outlet />
    </>
  )
}
