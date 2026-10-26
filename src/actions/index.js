import { defineAction } from 'astro:actions';
import { z } from 'astro/zod';

export const server = {
   sendEmail: defineAction({
    input: z.object({
      name: z.string(),
      email: z.email(),
      message: z.string()
    }),
    handler: async (input) => {
      return `Hello, ${input.name}. Email: ${input.email}, Message: ${input.message}`
    }
  })
}