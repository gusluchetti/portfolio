import { bundleMDX } from 'mdx-bundler'

export const getAllPosts = () => {
  const posts = import.meta.glob(
    "../posts/*.mdx",
    { eager: true }
  );
  return posts;
}

export const getPost = async () => {
  const mdxSource = `
---
title: Example Post
published: 2021-02-13
description: This is some description
---

# Wahoo

import Demo from './demo'

Here's a **neat** demo:

<Demo />
`.trim()

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
