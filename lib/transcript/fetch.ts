import { YoutubeTranscript } from "youtube-transcript";
import type { TranscriptSegment } from "@/types/transcript";

export async function fetchTranscript(
  videoUrl: string
): Promise<TranscriptSegment[]> {
  try {
    
    const transcript =
      await YoutubeTranscript.fetchTranscript(videoUrl);
  console.log("Transcript fetched:", transcript.length);
    return transcript.map((segment) => ({
      text: segment.text,
      start: segment.offset / 1000,
      duration: segment.duration / 1000,
      language: segment.lang || "",
    }));
  } catch (error) {
    console.error("FULL TRANSCRIPT ERROR:", error);

    throw error;
  }
}