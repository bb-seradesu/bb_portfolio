import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    kind: z.enum(["intern", "lab", "project", "writing"]),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    role: z.string(),
    period: z.string(),
    stack: z.array(z.string()).default([]),
    scope: z.string(),
    outcome: z.string(),
    team: z.string(),
    deliverable: z.string(),
    audience: z.string(),
    focus: z.string(),
    collaboration: z.string(),
    constraints: z.array(z.string()).default([]),
    evidence: z.array(z.string()).default([]),
    highlights: z.array(z.string()).default([])
  })
});

export const collections = { posts };
