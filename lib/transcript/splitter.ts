import {RecursiveCharacterTextSplitter} from "@langchain/textsplitters";
import {Document} from "@langchain/core/documents";

import type {TranscriptMetadata} from "@/types/document";

const textSplitter = new RecursiveCharacterTextSplitter({
  chunkSize: 800,
  chunkOverlap: 150,
});


export async function splitDocuments(
    documents:Document<TranscriptMetadata>[]
):Promise<Document<TranscriptMetadata>[]>{
    const split = await textSplitter.splitDocuments(documents);
    return split as Document<TranscriptMetadata>[];
}