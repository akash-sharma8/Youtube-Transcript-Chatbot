import { YoutubeTranscript } from "youtube-transcript";
import type { TranscriptResult,TranscriptSegment} from "@/types/transcript";

export function extractVideoId(url: string): string {
  const parsedUrl = new URL(url);

  if (parsedUrl.hostname === "youtu.be") {
    return parsedUrl.pathname.slice(1);
  }

  if (parsedUrl.pathname === "/watch") {
    const id = parsedUrl.searchParams.get("v");

    if (!id) {
      throw new Error("Missing video id");
    }

    return id;
  }

  if (
    parsedUrl.pathname.startsWith("/shorts/") ||
    parsedUrl.pathname.startsWith("/live/")
  ) {
    return parsedUrl.pathname.split("/")[2];
  }

  throw new Error("Unsupported YouTube URL");
}


export async function fetchTranscript(
  url: string
): Promise<TranscriptResult> {
    try{

        const videoId = extractVideoId(url);
      
        const transcript =
          await YoutubeTranscript.fetchTranscript(videoId);
      
      
        return {
          videoId,
          transcript: transcript.map((segment) => ({
              text: segment.text,
              start: segment.offset,
              duration: segment.duration,
            })),
        };
    }catch(error){
        throw new Error("Failed to fetch transcript. The video may not have captions or the URL may be invalid." );
    }
}