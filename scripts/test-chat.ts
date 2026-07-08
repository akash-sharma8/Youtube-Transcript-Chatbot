import "dotenv/config";
import { YoutubeTranscript } from "youtube-transcript";

async function main(): Promise<void> {
  const transcript = await YoutubeTranscript.fetchTranscript(
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  );

  console.dir(transcript, { depth: null });
}

main().catch(console.error);