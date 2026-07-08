import "dotenv/config";

import { ChatService } from "@/lib/chat/chat";
import { getVideoId } from "@/lib/youtube/video-id";

async function main() {
  const chat = new ChatService();

  const videoUrl =
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

  const videoId = getVideoId(videoUrl)!;

  const response = await chat.ask(
    "What does the singer promise?",
    videoId
  );

  console.log("\nAnswer:\n");
  console.log(response.answer);

  console.log("\nSources:\n");
  console.log(response.sources);
}

main();