export type Frontmatter = {
  title: string;
  description: string;
  published: string; // YYYY-MM-DD
  featured: boolean;
};

export type PostMeta = {
  slug: string;
  frontmatter: Frontmatter;
};

export const getPosts = async (): Promise<PostMeta[]> => {
  const modules = import.meta.glob<{ frontmatter: Frontmatter }>(
    "../routes/blog.*.mdx",
    { eager: true }
  );
  const build = await import("virtual:remix/server-build");
  const posts = Object.entries(modules).map(([file, post]) => {
    let id = file.replace("../", "").replace(/\.mdx$/, "");
    let slug = build.routes[id].path;
    if (slug === undefined) throw new Error(`No route for ${id}`);

    return {
      slug,
      frontmatter: post.frontmatter,
    };
  });

  return posts;
};
