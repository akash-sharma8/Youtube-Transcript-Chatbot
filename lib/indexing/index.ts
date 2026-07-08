import { Document } from "@langchain/core/documents";
import { HuggingFaceEmbedding } from "@/lib/embeddings/huggingface";
import { getCollection } from "@/lib/chroma/collections";
import { Indexer, IndexingResult } from "./types";

export class ChromaIndexer implements Indexer {
  private readonly embeddings = new HuggingFaceEmbedding();

  async index(
    documents: Document[]
  ): Promise<IndexingResult> {
    throw new Error("Not implemented");
  }
}