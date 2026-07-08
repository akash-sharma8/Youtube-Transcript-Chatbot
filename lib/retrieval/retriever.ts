import { Document } from "@langchain/core/documents";

import { HuggingFaceEmbedding } from "@/lib/embeddings/huggingface";
import { getCollection } from "@/lib/chroma/collections";

import {
  Retriever,
  RetrieveOptions,
} from "./types";

export class ChromaRetriever implements Retriever {
  private readonly embeddings = new HuggingFaceEmbedding();

  async retrieve({
    query,
    topK = 4,
  }: RetrieveOptions): Promise<Document[]> {
    const collection = await getCollection();

    const queryEmbedding =
      await this.embeddings.embedQuery(query);

      console.log("Embedding length:", queryEmbedding.length);
console.log(queryEmbedding.slice(0, 5));

    const results = await collection.query({
      queryEmbeddings: [queryEmbedding],
      nResults: topK,
    });

    const documents =
      results.documents?.[0] ?? [];

    const metadatas =
      results.metadatas?.[0] ?? [];

    const retrievedDocuments: Document[] = [];

for (let i = 0; i < documents.length; i++) {
  const pageContent = documents[i];

  if (pageContent === null) {
    continue;
  }

  retrievedDocuments.push(
    new Document({
      pageContent,
      metadata: metadatas[i] ?? {},
    })
  );
}

return retrievedDocuments;
  }
}