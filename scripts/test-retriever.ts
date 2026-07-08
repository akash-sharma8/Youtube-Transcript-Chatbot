import "dotenv/config";

import { ChromaRetriever } from "@/lib/retrieval/retriever";

async function main() {
  const retriever = new ChromaRetriever();

  const docs = await retriever.retrieve({
    query: "What is the song about?",
    topK: 3,
  });

  console.log(docs);
}

main().catch(console.error);