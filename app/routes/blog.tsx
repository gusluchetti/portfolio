import type { MetaFunction } from "@remix-run/node";
import { Outlet, useNavigate } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "a blog post" },
    { name: "description", content: "no idea which!" },
  ];
};

export default function SingleBlog() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)} className="font-bold">
        &lt;- back
      </button>
      <Outlet />
    </>
  )
}
