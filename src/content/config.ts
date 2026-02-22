import { defineCollection, z } from 'astro:content';

const techSchema = z.object({
  name: z.string(),
  category: z.enum(['Frontend', 'Backend', 'Database', 'Infrastructure', 'Tools']),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(techSchema),
    role: z.string(),
    period: z.string(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const experienceCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    position: z.string(),
    period: z.string(),
    description: z.string(),
    achievements: z.array(z.string()),
    tech: z.array(techSchema).optional(),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  experience: experienceCollection,
  blog: blogCollection,
};
