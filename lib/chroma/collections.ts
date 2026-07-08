import { chroma } from "@/lib/chroma/client";


export async function getCollection(
  videoId: string
) {
  return chroma.getOrCreateCollection({
    name: `youtube-${videoId}`,
    embeddingFunction: null,
  });
}