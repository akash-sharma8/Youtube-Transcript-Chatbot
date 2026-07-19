import type { TranscriptSegment } from "@/types/transcript";
import { extractVideoId } from "@/lib/utils/youtube";

export async function fetchTranscript(
  videoUrl: string
): Promise<TranscriptSegment[]> {
  const videoId = extractVideoId(videoUrl);

  const res = await fetch(
    `https://www.searchapi.io/api/v1/search?engine=youtube_transcripts&video_id=${videoId}&api_key=${process.env.SEARCHAPI_KEY}`
  );

  if (!res.ok) {
    throw new Error(`Transcript API failed with status ${res.status}`);
  }

  const data = await res.json();

  if (!data.transcripts || data.transcripts.length === 0) {
    throw new Error("No transcript available for this video");
  }

  console.log("Transcript fetched:", data.transcripts.length);

  return data.transcripts.map((segment: any) => ({
    text: segment.text,
    start: segment.start,
    duration: segment.duration,
    language: segment.lang || "en",
  }));
}