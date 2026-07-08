import "dotenv/config";

import { getCollection } from "@/lib/chroma/collections";

async function main() {
  const videoId = "dQw4w9WgXcQ"; // Replace with any valid video ID

  console.log("Connecting...");

  const collection = await getCollection(videoId);

  console.log("✅ Connected!");

  console.log("Collection Name:", collection.name);

  const count = await collection.count();

  console.log("Documents:", count);
}

main().catch((err) => {
  console.error(err);
});