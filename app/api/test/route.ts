import { NextResponse } from "next/server";
import { YoutubeTranscript } from "youtube-transcript";

export async function GET() {
  try {
    const transcript =
      await YoutubeTranscript.fetchTranscript(
          "https://www.youtube.com/watch?v=bJRbu8cMnJ8&list=RDbJRbu8cMnJ8&start_radio=1"
      );

    return NextResponse.json({
      success: true,
      length: transcript.length,
    });
  } catch (e) {
    console.error(e);

    return NextResponse.json(
      {
        success: false,
        error:
          e instanceof Error ? e.message : String(e),
      },
      {
        status: 500,
      }
    );
  }
}