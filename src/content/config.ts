import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pub_date: z.date(),
    subtitle: z.string(),
    draft: z.boolean(),
  })
})

export const collections = {
  blog: blogCollection
};
