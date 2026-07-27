import { defineCollection, z } from 'astro:content';

const prompts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    thumbnail: z.string(),
    youtube: z.string(),
    prompt: z.string(),
    category: z.enum(['Bhakti', 'Cartoon', 'News', 'Bollywood', 'Reels', 'Education', 'Horror', 'Technology', 'Motivational', 'Business', 'Nature', 'Animals', 'History']),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    date: z.date().optional()
  })
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    body: z.string(),
    thumbnail: z.string(),
    category: z.enum(['AI News', 'CSC Updates', 'Technology', 'Government Updates', 'Digital Marketing', 'Online Earning', 'AI Tips']),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    date: z.date().optional()
  })
});

export const collections = {
  prompts,
  blog
};
