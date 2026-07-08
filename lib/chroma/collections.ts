import { chroma } from "@/lib/chroma/client";

export const COLLECTION_NAME =
  "youtube-transcripts";

export async function getCollection() {
  return chroma.getOrCreateCollection({
    name: COLLECTION_NAME,
  });
}