import { ChromaClient,CloudClient } from "chromadb";
import { env } from "@/lib/config/env";



export const client = new CloudClient({
  apiKey: process.env.CHROMA_API_KEY!,
  tenant: process.env.CHROMA_TENANT!,
  database: process.env.CHROMA_DATABASE!,
});