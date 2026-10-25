import { extractVideoId } from "@/lib/utils/youtube";

export function getVideoId(videoUrl: string): string {
  return extractVideoId(videoUrl);
}