import { HuggingFaceEmbedding } from "../lib/embeddings/huggingface";

async function main() {
  const embedding = new HuggingFaceEmbedding();

  const vector = await embedding.embed(
    "LangChain makes building AI applications easier."
  );

  console.log("Vector Dimension:", vector.length);
  console.log("First 10 Values:", vector.slice(0, 10));
}

main().catch(console.error);