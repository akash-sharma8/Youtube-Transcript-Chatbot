import { NextRequest, NextResponse } from "next/server";

import { fetchTranscript } from "@/lib/transcript/fetch";
import { mergeTranscriptSegments } from "@/lib/transcript/merger";
import { createDocuments } from "@/lib/transcript/document";
import { splitDocuments } from "@/lib/transcript/splitter";

import { ChromaIndexer } from "@/lib/indexing";
import { getVideoId } from "@/lib/youtube/video-id";
import { extractVideoId } from "@/lib/utils/youtube";

export async function POST(
  req: NextRequest
) {
  try {
    const { videoUrl } = await req.json();

    if (!videoUrl) {
      return NextResponse.json(
        {
          error: "Video URL is required",
        },
        {
          status: 400,
        }
      );
    }

    const videoId = getVideoId(videoUrl);

if (!videoId) {
  throw new Error("Invalid YouTube URL");
}

    // console.log(
    //   "Indexing Video:",
    //   videoId
    // );

    const transcript =
      await fetchTranscript(videoUrl);

    const merged =
      mergeTranscriptSegments(
        transcript
      );

    const documents =
      createDocuments(
        merged,
        videoUrl
      );

    const chunks =
      await splitDocuments(
        documents
      );

    const indexer =
      new ChromaIndexer();

    const result =
      await indexer.index(
        videoId,
        chunks
      );

    return NextResponse.json({
      success: true,
      result,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Unknown Error",
      },
      {
        status: 500,
      }
    );
  }
}