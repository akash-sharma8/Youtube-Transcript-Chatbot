import { Document } from "@langchain/core/documents";
import type { TranscriptMetadata } from "@/types/document";
import type { TranscriptSegment } from "@/types/transcript";

export function createDocuments(
  segments: TranscriptSegment[],
  videoUrl: string
): Document<TranscriptMetadata>[] {
  return segments.map((segment) => {
    return new Document<TranscriptMetadata>({
      pageContent: segment.text,

      metadata: {
        start: segment.start,
        duration: segment.duration,
        language: segment.language,
        videoUrl,
      },
    });
  });
}