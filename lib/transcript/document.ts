import { Document } from "@langchain/core/documents";

import type {
  TranscriptMetadata,
} from "@/types/document";

import type {
  TranscriptSegment,
} from "@/types/transcript";

import { extractVideoId } from "@/lib/utils/youtube";

export function createDocuments(
  segments: TranscriptSegment[],
  videoUrl: string
): Document<TranscriptMetadata>[] {

  const videoId = extractVideoId(videoUrl);

  return segments.map(
    (segment) =>
      new Document<TranscriptMetadata>({
        pageContent: segment.text,

        metadata: {
          videoId,
          videoUrl,

          start: segment.start,
          duration: segment.duration,
          language: segment.language,
        },
      })
  );
}