import { ChromaClient,CloudClient } from "chromadb";
import { env } from "@/lib/config/env";



export const client = new CloudClient({
  apiKey: env.CHROMA_API_KEY!,
  tenant: env.CHROMA_TENANT!,
  database: env.CHROMA_DATABASE!,
});