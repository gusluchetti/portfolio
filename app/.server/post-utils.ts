import { bundleMDX } from 'mdx-bundler'

import dotfiles from './posts/dotfiles.mdx'

export const getAllPosts = () => {
  const posts = import.meta.glob(
    "./posts/*.mdx",
    { eager: true }
  );
  return posts;
}

export const getPostContent = async (path: string) => {
  console.log(`at server get post, path: ${path}`)

  const mdxSource = ``.trim()
  const result = await bundleMDX({
    source: mdxSource,
    files: {
      './demo.tsx': `
        import * as React from 'react'

        function Demo() {
          return <div>Neat demo!</div>
        }

        export default Demo
    `,
    },
  })

  return result;
}
