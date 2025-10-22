import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    role: z.string(),
    period: z.string(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const experienceCollection = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    position: z.string(),
    period: z.string(),
    description: z.string(),
    achievements: z.array(z.string()),
    tech: z.array(z.string()).optional(),
    location: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  experience: experienceCollection,
};
