import "dotenv/config";

import { HuggingFaceEmbedding } from "@/lib/embeddings/huggingface";

async function main() {
  const embedding = new HuggingFaceEmbedding();

  const vector = await embedding.embedQuery(
    "What is React?"
  );

  console.log("Length:", vector.length);
  console.log(vector.slice(0, 10));
}

main();