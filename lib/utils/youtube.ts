export function extractVideoId(url: string): string {
  let parsed: URL;

  try {
    parsed = new URL(url);
  } catch {
    throw new Error("Invalid YouTube URL");
  }

  if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
    throw new Error("Invalid YouTube URL");
  }

  const hostname = parsed.hostname.toLowerCase();
  const youtubeHosts = new Set([
    "youtube.com",
    "www.youtube.com",
    "m.youtube.com",
    "music.youtube.com",
    "youtube-nocookie.com",
    "www.youtube-nocookie.com",
  ]);

  let videoId = "";
  if (hostname === "youtu.be" || hostname === "www.youtu.be") {
    videoId = parsed.pathname.split("/")[1] ?? "";
  } else if (youtubeHosts.has(hostname)) {
    const pathSegments = parsed.pathname.split("/").filter(Boolean);
    if (parsed.pathname === "/watch") {
      videoId = parsed.searchParams.get("v") ?? "";
    } else if (["shorts", "embed", "live"].includes(pathSegments[0] ?? "")) {
      videoId = pathSegments[1] ?? "";
    }
  }

  if (!/^[A-Za-z0-9_-]{11}$/.test(videoId)) {
    throw new Error("Invalid YouTube URL");
  }

  return videoId;
}