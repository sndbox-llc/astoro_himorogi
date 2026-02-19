// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    // slugはAstroが標準で処理してくれますが、型を意識したいなら追加も可
  }),
});

export const collections = { blog };