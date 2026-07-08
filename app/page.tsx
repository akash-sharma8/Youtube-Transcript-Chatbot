"use client";

import { useState } from "react";

import Chat from "@/components/chat/Chat";
import VideoInput from "@/components/index/VideoInput";

export default function Home() {
  const [ready, setReady] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-950">

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)]" />

      {!ready ? (
        <div className="mx-auto w-full max-w-md px-4">

          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold">
              TubeMind AI
            </h1>

            <p className="mt-2 text-slate-500">
              Paste a YouTube URL to chat with its transcript.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow dark:border-slate-800 dark:bg-slate-900">
            <VideoInput
              onIndexed={(url) => {
                setVideoUrl(url);
                setReady(true);
              }}
            />
          </div>

        </div>
      ) : (
        <Chat videoUrl={videoUrl} />
      )}
    </main>
  );
}