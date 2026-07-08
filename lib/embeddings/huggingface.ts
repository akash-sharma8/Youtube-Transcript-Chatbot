import { InferenceClient } from "@huggingface/inference";
import { env } from "@/lib/config/env";

const client = new InferenceClient(env.HF_TOKEN);

const MODEL = "sentence-transformers/all-MiniLM-L6-v2";

export async function generateEmbedding(
  text: string
): Promise<number[]> {
  const embedding = await client.featureExtraction({
    model: MODEL,
    inputs: text,
  });

  return Array.from(embedding as Iterable<number>);
}