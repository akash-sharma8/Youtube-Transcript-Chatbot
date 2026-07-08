export function getVideoId(
  videoUrl: string
): string {
  const id = new URL(videoUrl)
    .searchParams.get("v");

  if (!id) {
    throw new Error("Invalid YouTube URL");
  }

  return id;
}