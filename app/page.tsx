"use client";

import { useState } from "react";
import TranscriptForm from "@/components/TranscriptForm";
import TranscriptViewer from "@/components/TranscriptViewer";
import { TranscriptSegment } from "@/types/transcript";

export default function HomePage(){
  const [loading, setLoading] = useState(false);
  const [transcript, setTranscript] = useState<TranscriptSegment[]>([]);

  async function loadTranscript(url: string) {
    setLoading(true);

    try {
      const response = await fetch("/api/transcript",{
        method: "POST",
        body: JSON.stringify({ 
          url,
        }),
      })
      const data = await response.json();
      setTranscript(data.transcript);
    } catch (error) {
      console.error("Error loading transcript:", error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <main className="mx-auto max-w-4xl space-y-6 p-10">
      <h1 className="text-4xl font-bold">
        YouTube Transcript Chatbot
      </h1>

      <TranscriptForm
        loading={loading}
        onSubmit={loadTranscript}
      />

      <TranscriptViewer transcript={transcript} />
    </main>
  );
}