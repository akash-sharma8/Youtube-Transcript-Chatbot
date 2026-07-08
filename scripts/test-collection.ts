import "dotenv/config";

import { getCollection } from "@/lib/chroma/collections";

async function main() {
  const videoUrl =
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

const videoId =
  new URL(videoUrl).searchParams.get("v")!;

const collection =
  await getCollection(videoId);
  console.log(collection.name);
}

main();