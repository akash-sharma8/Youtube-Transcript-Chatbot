import { NextRequest, NextResponse } from "next/server";

import { ChatService } from "@/lib/chat/chat";
import { getVideoId } from "@/lib/youtube/video-id";


const chat = new ChatService();

export async function POST(req: NextRequest) {
  try {
    const { question ,videoUrl } = await req.json();

    if (!question) {
      return NextResponse.json(
        { error: "Question is required" },
        { status: 400 }
      );
    }

     if (!videoUrl) {
      return NextResponse.json(
        { error: "Video URL is required" },
        { status: 400 }
      );
    }

    const videoId = getVideoId(videoUrl);

    const result = await chat.ask( question,
      videoId);

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}