import "dotenv/config";

import {generateEmbedding} from "@/lib/embeddings/huggingface";

async function main():Promise<void>{
   const embedding = await generateEmbedding(
    "LangChain is an amazing framework."
  );

  console.log("Dimensions:", embedding.length);

  console.log(embedding.slice(0, 10));
}

main().catch(console.error);