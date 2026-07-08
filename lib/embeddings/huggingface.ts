import "dotenv/config";

import { HfInference } from "@huggingface/inference";

import { env } from "@/lib/config/env";
import { EmbeddingProvider } from "./types";

export class HuggingFaceEmbedding implements EmbeddingProvider {
  private readonly client: HfInference;

  private readonly model = "BAAI/bge-large-en-v1.5";

  constructor() {
    this.client = new HfInference(env.HF_TOKEN);
  }

async embedQuery(text: string): Promise<number[]> {
  const embedding = await this.client.featureExtraction({
    model: this.model,
    inputs: text,
  });

  return embedding as number[];
}

 async embedDocuments(texts: string[]): Promise<number[][]> {
  return Promise.all(
    texts.map((text) => this.embedQuery(text))
  );
}
}