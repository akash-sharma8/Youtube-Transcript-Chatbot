import "dotenv/config";

import { ChromaRetriever } from "@/lib/retrieval/retriever";
import { askQuestion } from "@/lib/chain/qa";

async function main() {
  const retriever = new ChromaRetriever();

  const docs = await retriever.retrieve({
    query: "What is this song about?",
  });

  const context = docs
    .map((doc) => doc.pageContent)
    .join("\n\n");

  const answer = await askQuestion(
    context,
    "What is this song about?"
  );

  console.log(answer);
}

main();