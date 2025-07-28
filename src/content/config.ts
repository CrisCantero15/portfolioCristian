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
                color: z.string(),
            })
        ),
        url: z.object({
            github: z.string().url().optional(),
            githubbackend: z.string().url().optional(),
            githubfrontend: z.string().url().optional(),
            demo: z.string().url().optional(),
        })
    })
})

const experiences = defineCollection({
    schema: z.object({
        title: z.string(),                      
        company: z.string(),                   
        location: z.string(),                  
        date: z.object({
            start: z.string(),                   
            end: z.string().optional(),          
        }),
        description: z.string().optional(),    
        technologies: z.array(
            z.object({
                name: z.string(),
                icon: z.string().optional(),
                color: z.string(),
            })
        ),  
        link: z.string().url().optional(),
    })
})

const studies = defineCollection({
  schema: z.object({
        title: z.string(),
        school: z.string(),
        location: z.string(),
        date: z.object({
            start: z.string(),                   
            end: z.string().optional(),          
        }),
        description: z.string().optional(),
        link: z.string().url().optional(),
  }),
});

export const collections = { projects, experiences, studies }