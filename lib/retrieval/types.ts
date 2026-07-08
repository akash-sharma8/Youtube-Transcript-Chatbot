import { Document } from "@langchain/core/documents";

export interface RetrieveOptions {
  videoId: string;
  query: string;
  topK?: number;
}

export interface Retriever {
  retrieve(
    options: RetrieveOptions
  ): Promise<Document[]>;
}