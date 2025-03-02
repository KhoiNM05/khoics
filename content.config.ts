// @ts-check
import { defineCollection, z } from "astro:content";

// Define the "articles" collection schema
const articles = defineCollection({
  schema: z.object({
    slug: z.string(),  // 🚨 Required: Must be unique for each article
    title: z.string(),  // 🚨 Required: Article title
    description: z.string().optional(),  // Optional description
    date: z.string(),  // 🚨 Required: Date in "YYYY-MM-DD" format
    readTime: z.string().optional(),  // Optional: Estimated read time
    toc: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
      })
    ).optional(),  // Optional: Table of contents
  }),
});

const stories = defineCollection({
  schema: z.object({
    slug: z.string(),  // 🚨 Required: Must be unique for each story
    title: z.string(),  // 🚨 Required: Story title
    description: z.string().optional(),  // Optional description
    date: z.string(),  // 🚨 Required: Date in "YYYY-MM-DD" format
    readTime: z.string().optional(),  // Optional: Estimated read time
    toc: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
      })
    ).optional(),  // Optional: Table of contents
  }),
});

// Export the collections
export const collections = { articles, stories };
