import type { TranscriptSegment } from "@/types/transcript";



export function mergeTranscriptSegments(
    segments: TranscriptSegment[],
    maxCharacters=1000
): TranscriptSegment[] {

     if (segments.length === 0) {
    return [];
  }

  const merged : TranscriptSegment[] = [];

  let current : TranscriptSegment = {
    text:"",
    start: segments[0].start,
    duration: 0,
    language: segments[0].language,
  }
   for (const segment of segments) {
    const candidateText =
      current.text.length === 0
        ? segment.text
        : `${current.text} ${segment.text}`;

    if (candidateText.length > maxCharacters) {
      merged.push(current);

      current = {
        text: segment.text,
        start: segment.start,
        duration: segment.duration,
        language: segment.language,
      };
      continue;
    }

    current.text = candidateText;

    current.duration =
      segment.start +
      segment.duration -
      current.start;
  }

  if (current.text.length > 0) {
    merged.push(current);
  }
  return merged;
}