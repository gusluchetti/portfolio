import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    subtitle: z.string(),
    tags: z.array(z.string()),
  })
})

export const collections = {
  blog: blogCollection
};
