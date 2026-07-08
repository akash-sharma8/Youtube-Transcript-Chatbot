import {z} from "zod";

const envSchema = z.object({
    HF_TOKEN: z.string().min(1, "HF_TOKEN environment variable is not set."),
    GROQ_API_KEY: z.string().min(1, "GROQ_API_KEY environment variable is not set."),
    CHROMA_URL: z.string().url()
})

export const env = envSchema.parse({
    GROQ_API_KEY: process.env.GROQ_API_KEY,
    HF_TOKEN: process.env.HF_TOKEN,
    CHROMA_URL: process.env.CHROMA_URL
})