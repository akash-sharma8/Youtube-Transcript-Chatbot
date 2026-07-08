import { Document } from "@langchain/core/documents";

import { HuggingFaceEmbedding } from "@/lib/embeddings/huggingface";
import { getCollection } from "@/lib/chroma/collections";

import {
  Indexer,
  IndexingResult,
} from "./types";

export class ChromaIndexer implements Indexer {
  private readonly embeddings =
    new HuggingFaceEmbedding();

  async index(
    videoId: string,
    documents: Document[]
  ): Promise<IndexingResult> {
    const collection =
      await getCollection(videoId);

    const texts = documents.map(
      (doc) => doc.pageContent
    );

    const embeddings =
      await this.embeddings.embedDocuments(texts);

    const ids = documents.map(() =>
      crypto.randomUUID()
    );

    const metadatas = documents.map((doc) => ({
      start: doc.metadata.start,
      duration: doc.metadata.duration,
      language: doc.metadata.language,
      videoUrl: doc.metadata.videoUrl,
    }));

    await collection.add({
      ids,
      embeddings,
      documents: texts,
      metadatas,
    });

    return {
      inserted: documents.length,
      collection: videoId,
    };
  }
}