import { ChromaClient } from "chromadb";
import { env } from "@/lib/config/env";

export const chroma = new ChromaClient({
   host: "localhost",
  port: 8000,
  ssl: false,
});