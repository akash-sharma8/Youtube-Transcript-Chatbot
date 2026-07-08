import "dotenv/config";

import { ChatService } from "@/lib/chat/chat";
import { getVideoId } from "@/lib/youtube/video-id";

async function main() {

  const url =
    process.argv[2];

  const question =
    process.argv.slice(3).join(" ");

  if (!url || !question) {
    console.log(
      "Usage:"
    );

    console.log(
      'npx tsx scripts/test-video.ts "<youtube-url>" "<question>"'
    );

    return;
  }

  const videoId = getVideoId(url);

  if (!videoId) {
    throw new Error("Invalid URL");
  }

  const chat = new ChatService();

  const answer = await chat.ask(
    question,
    videoId
  );

  console.log("\nAnswer:\n");
  console.log(answer.answer);

  console.log("\nSources:");
  console.log(answer.sources);
}

main();