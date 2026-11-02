import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    githubUrl: z.string().url(),
    language: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = { projects };