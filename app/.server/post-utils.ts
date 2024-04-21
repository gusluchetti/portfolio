import { bundleMDX } from 'mdx-bundler'
import fs from 'node:fs/promises';
import path from 'path';

export const getAllPosts = () => {
  const fileData = import.meta.glob(
    "./posts/*.mdx",
    { eager: true }
  );
  let posts: [string, unknown][] = Object.entries(fileData);
  posts = posts.filter((p) => {
    const [path, data]: [path: string, data: any] = p;
    return data.frontmatter.draft === false
  })
  return posts;
}

export const getPostContent = async (filename: string) => {
  console.log(`at server get post, path: ${filename}`)

  const relativePath = path.join(process.cwd(), `app/.server/posts/${filename}.mdx`);
  try {
    const fileContent = await fs.readFile(relativePath, { encoding: 'utf8' });
    const bundleResult = await bundleMDX({
      source: fileContent
    })
    return bundleResult;
  } catch (err) {
    console.error(err);
  }
}
