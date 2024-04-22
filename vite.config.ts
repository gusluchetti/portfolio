import { installGlobals } from "@remix-run/node";

import { defineConfig } from "vite";
import { vitePlugin as remix } from "@remix-run/dev";
import tsconfigPaths from "vite-tsconfig-paths";

import mdx from '@mdx-js/rollup';
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

import Unfonts from 'unplugin-fonts/vite';

installGlobals();

export default defineConfig({
  plugins: [
    Unfonts({
      custom: {
        families: [{
          name: 'Writer',
          local: 'Writer',
          src: './assets/fonts/*.woff2',
        }],
        display: 'auto',
        preload: true,
        prefetch: false,
        /**
         * define where the font load tags should be inserted
         * default: 'head-prepend'
         *   values: 'head' | 'body' | 'head-prepend' | 'body-prepend'
         */
        injectTo: 'head-prepend',
      },
    }),
    mdx({
      remarkPlugins: [
        remarkFrontmatter,
        remarkMdxFrontmatter,
      ]
    }),
    remix(),
    tsconfigPaths()],
});
