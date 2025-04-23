type Page = {
  title: string,
  path: string,
}

export const pages: Map<string, Page> = new Map(
  [
    ["home", { title: "luchetti.dev", path: "/" }],
    ["help", { title: "man page", path: "/help" }],
    ["blog", { title: "blog posts", path: "/blog" }],
    ["now", { title: "now page", path: "/now" }],
    ["cv", { title: "curriculum vitae", path: "/cv" }],
  ]
) 
