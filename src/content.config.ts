import { defineCollection, z } from "astro:content";
// 💡 glob を追加でインポート
import { glob } from 'astro/loaders'; 

// blogコレクションの定義
const blogCollection = defineCollection({
  // 💡 type: "content" を loader に書き換え
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    images: z.array(z.string()).optional(),
  }),
});

// pageコレクションの定義
const pageCollection = defineCollection({
  // 💡 こちらも loader に書き換え
  loader: glob({ base: './src/content/page', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(), // スキーマ内の slug はそのままでOK
  }),
});

export const collections = {
  blog: blogCollection,
  page: pageCollection,
};