import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    githubUrl: z.string().url().optional(),
    language: z.string(),
    order: z.number().optional(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    license: z.enum(['FPL', 'FCL']).default('FPL'),
    downloads: z.array(z.object({
      os: z.enum(['linux', 'windows', 'macos']),
      label: z.string(),
      url: z.string().regex(
        /^(https?:\/\/.+|\/.+)$/,
        'Must be an http(s) URL or a path starting with /'
      ),
    })).optional(),
  }),
});

export const collections = { projects };