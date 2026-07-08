import "dotenv/config";

import { fetchTranscript } from "../lib/transcript/loader";
import { buildTranscriptDocuments } from "../lib/documents/buildDocuments";
import { splitDocuments } from "@/lib/chunking/splitter";
import { mergeTranscriptSegments } from "@/lib/transcript/merger";
async function main(): Promise<void> {
  const videoUrl =
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

  const segments = await fetchTranscript(videoUrl);

  const merged = mergeTranscriptSegments(
  segments,
 1000
);

console.log(
  "Original Segments:",
  segments.length
);

console.log(
  "Merged Segments:",
  merged.length
);

const docs =
  buildTranscriptDocuments(
      merged,
      videoUrl
  );

const chunks =
  await splitDocuments(docs);

console.log(
    "Chunks:",
    chunks.length
);
}

main().catch(console.error);