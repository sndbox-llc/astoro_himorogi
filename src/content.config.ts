import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders'; 

// blogコレクションの定義
const blogCollection = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(), 
    image: image().optional(),
  }),
});

// pageコレクションの定義
const pageCollection = defineCollection({
  loader: glob({ base: './src/content/page', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  page: pageCollection,
};