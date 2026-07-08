import { ChromaRetriever } from "@/lib/retrieval/retriever";
import { askQuestion } from "@/lib/chain/qa";

const retriever = new ChromaRetriever();

export async function chat(question: string, videoId: string) {
  const documents = await retriever.retrieve({ query: question, videoId });

  const context = documents
  .map(
    (doc, index) => `
Chunk ${index + 1}

Timestamp: ${doc.metadata.start}s

${doc.pageContent}
`
  )
  .join("\n-----------------\n");

  const answer = await askQuestion(context, question);

  return {
    answer,
    sources: documents.map((doc) => ({
      text: doc.pageContent,
      metadata: doc.metadata,
    })),
  };
}