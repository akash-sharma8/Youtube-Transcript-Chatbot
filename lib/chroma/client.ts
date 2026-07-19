import { ChromaClient,CloudClient } from "chromadb";
import { env } from "@/lib/config/env";

export const client =
  process.env.CHROMA_API_KEY
    ? new CloudClient({
      apiKey: process.env.CHROMA_API_KEY,
      tenant: process.env.CHROMA_TENANT!,
      database: process.env.CHROMA_DATABASE!,
    })
    : new ChromaClient({
      host: process.env.CHROMA_HOST ?? "localhost",
      port: 8000,
      ssl: false
    });
