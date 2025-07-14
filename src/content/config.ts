import { defineCollection, z } from "astro:content";

const projects = defineCollection ({
    schema: z.object({
        title: z.string(),
        featured: z.boolean(),
        description: z.string(),
        image: z.string(),
        date: z.string(),
        status: z.enum(['Terminado', 'En desarrollo']),
        technologies: z.array(
            z.object({
                name: z.string(),
                icon: z.string().optional(),
                iconLight: z.string().optional(),
                iconDark: z.string().optional(),
                color: z.string(),
            })
        ),
        url: z.object({
            github: z.string().url(),
            demo: z.string().url().optional(),
        })
    })
})

export const collections = { projects }


