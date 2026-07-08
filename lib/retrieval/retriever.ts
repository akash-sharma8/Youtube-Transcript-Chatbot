import { Document } from "@langchain/core/documents";

import { HuggingFaceEmbedding } from "@/lib/embeddings/huggingface";
import { getCollection } from "@/lib/chroma/collections";

import {
  Retriever,
  RetrieveOptions,
} from "./types";

export class ChromaRetriever implements Retriever {
  private readonly embeddings =
    new HuggingFaceEmbedding();

  async retrieve({
    videoId,
    query,
    topK = 4,
  }: RetrieveOptions): Promise<Document[]> {

    const collection =
      await getCollection(videoId);

    const queryEmbedding =
      await this.embeddings.embedQuery(query);

    const results =
      await collection.query({
        queryEmbeddings: [queryEmbedding],
        nResults: topK,
      });

//       console.log("========== RETRIEVAL ==========");
// console.log(results.documents);
// console.log(results.metadatas);
// console.log(results.distances);
// console.log("===============================");

    const documents =
      results.documents?.[0] ?? [];

    const metadatas =
      results.metadatas?.[0] ?? [];

    const retrieved: Document[] = [];

    for (let i = 0; i < documents.length; i++) {
      if (!documents[i]) continue;

      retrieved.push(
        new Document({
          pageContent: documents[i]!,
          metadata: metadatas[i] ?? {},
        })
      );
    }

    return retrieved;
  }
}