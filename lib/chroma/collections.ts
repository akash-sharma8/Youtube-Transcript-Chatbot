import { client } from "@/lib/chroma/client";


export async function getCollection(
  videoId: string
) {
  return client.getOrCreateCollection({
    name: `youtube-${videoId}`,
    embeddingFunction: null,
  });
}