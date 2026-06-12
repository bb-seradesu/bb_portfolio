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
    role: z.string().default(""),
    period: z.string().default(""),
    stack: z.array(z.string()).default([]),
    scope: z.string().default(""),
    outcome: z.string().default(""),
    team: z.string().optional(),
    deliverable: z.string().optional(),
    audience: z.string().optional(),
    focus: z.string().optional(),
    collaboration: z.string().optional(),
    constraints: z.array(z.string()).default([]),
    evidence: z.array(z.string()).default([]),
    highlights: z.array(z.string()).default([])
  })
});

export const collections = { posts };
