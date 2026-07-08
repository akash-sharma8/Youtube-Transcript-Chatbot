import { Document } from "@langchain/core/documents";

export interface IndexingResult {
  inserted: number;
  collection: string;
}

export interface Indexer {
  index(
    videoId: string,
    documents: Document[]
  ): Promise<IndexingResult>;
}