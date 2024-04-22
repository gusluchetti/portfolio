import { installGlobals } from "@remix-run/node";

import { defineConfig } from "vite";
import { vitePlugin as remix } from "@remix-run/dev";
import tsconfigPaths from "vite-tsconfig-paths";

import mdx from '@mdx-js/rollup';
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

installGlobals();

export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [
        remarkFrontmatter,
        remarkMdxFrontmatter,
      ]
    }),
    remix(),
    tsconfigPaths(),
  ],
});
