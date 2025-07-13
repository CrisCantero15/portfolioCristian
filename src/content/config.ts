import { defineCollection, z } from "astro:content";

const projects = defineCollection ({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        technologies: z.array(
            z.object({
                name: z.string(),
                icon: z.string().optional(),
                iconLight: z.string().optional(),
                iconDark: z.string().optional(),
            })
        ),
        url: z.object({
            github: z.string().url(),
            demo: z.string().url().optional(),
        })
    })
})

export const collections = { projects }


