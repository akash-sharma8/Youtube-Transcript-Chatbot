export function extractVideoId(url: string): string {
  const parsed = new URL(url);

  if (parsed.hostname.includes("youtu.be")) {
    return parsed.pathname.slice(1);
  }

  return parsed.searchParams.get("v") ?? "";
}