import { fetchTranscript } from "@/lib/transcript/fetch";
import { mergeTranscriptSegments } from "@/lib/transcript/merger";
import { createDocuments } from "@/lib/transcript/document";
import { splitDocuments } from "@/lib/transcript/splitter";
import { ChromaIndexer } from "@/lib/indexing";

export async function indexVideo(videoUrl: string) {
  // console.log("Fetching transcript...");

  const transcript = await fetchTranscript(videoUrl);

  // console.log("Merging transcript...");

  const merged = mergeTranscriptSegments(transcript);

  // console.log("Creating documents...");

  const docs = createDocuments(merged, videoUrl);

  // console.log("Splitting documents...");

  const chunks = await splitDocuments(docs);

  // console.log("Indexing...");

  const indexer = new ChromaIndexer();

  const result = await indexer.index(videoUrl, chunks);

  return {
    ...result,
    chunks: chunks.length,
  };
}