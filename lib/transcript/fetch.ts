import { YoutubeTranscript } from "youtube-transcript";
import type { TranscriptSegment } from "@/types/transcript";

export async function fetchTranscript(
  videoUrl: string
): Promise<TranscriptSegment[]> {
  try {
    const transcript =
      await YoutubeTranscript.fetchTranscript(videoUrl);

    return transcript.map((segment) => ({
      text: segment.text,
      start: segment.offset / 1000,
      duration: segment.duration / 1000,
      language: segment.lang || "",
    }));
  } catch (err) {
    throw new Error(
      "Transcript is not available for this video. Please choose another video with public captions."
    );
  }
}