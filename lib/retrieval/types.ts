import { Document } from "@langchain/core/documents";

export interface RetrieveOptions {
  query: string;
  topK?: number;
}

export interface Retriever {
  retrieve(
    options: RetrieveOptions
  ): Promise<Document[]>;
}