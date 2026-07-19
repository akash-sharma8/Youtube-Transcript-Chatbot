import { z } from "zod";

const envSchema = z.object({
  HF_TOKEN: z.string().min(1, "HF_TOKEN environment variable is not set."),
  GROQ_API_KEY: z.string().min(1, "GROQ_API_KEY environment variable is not set."),

  CHROMA_HOST: z.string().min(1, "CHROMA_HOST environment variable is not set."),
  CHROMA_API_KEY: z
    .string()
    .min(1, "CHROMA_API_KEY environment variable is not set."),
  CHROMA_TENANT: z
    .string()
    .min(1, "CHROMA_TENANT environment variable is not set."),
  CHROMA_DATABASE: z
    .string()
    .min(1, "CHROMA_DATABASE environment variable is not set."),
});

export const env = envSchema.parse({
  HF_TOKEN: process.env.HF_TOKEN,
  GROQ_API_KEY: process.env.GROQ_API_KEY,

  CHROMA_HOST: process.env.CHROMA_HOST,
  CHROMA_API_KEY: process.env.CHROMA_API_KEY,
  CHROMA_TENANT: process.env.CHROMA_TENANT,
  CHROMA_DATABASE: process.env.CHROMA_DATABASE,
});
