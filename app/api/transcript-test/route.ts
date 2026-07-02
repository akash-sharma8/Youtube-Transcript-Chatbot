import { NextResponse } from "next/server";
import { fetchTranscript } from "@/lib/youtube/transcript";

export async function GET() {
  const transcript = await fetchTranscript(
    "https://www.youtube.com/watch?v=cVl4YYxKJjs&list=RD7WKsp50HTcI&index=9"
  );

  return NextResponse.json({
    videoId: transcript.videoId,
    totalSegments: transcript.transcript.length,
    firstSegment: transcript.transcript[0],
  });
}