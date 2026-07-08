import "dotenv/config";

import { fetchTranscript } from "@/lib/transcript/loader";
import { mergeTranscriptSegments } from "@/lib/transcript/merger";
import { createDocuments } from "@/lib/transcript/document";
import { splitDocuments } from "@/lib/transcript/splitter";
import { ChromaIndexer } from "@/lib/indexing";

async function main() {
  const url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

  console.log("Fetching transcript...");
  const transcript = await fetchTranscript(url);

  console.log("Merging transcript...");
  const merged = mergeTranscriptSegments(transcript);

  console.log("Creating documents...");
  const documents = createDocuments(merged, url);

  console.log("Splitting documents...");
  const chunks = await splitDocuments(documents);

  console.log("Indexing into Chroma...");
  const indexer = new ChromaIndexer();

  const result = await indexer.index(chunks);

  console.log(result);
}

main().catch(console.error);