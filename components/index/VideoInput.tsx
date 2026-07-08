"use client";

import { useState } from "react";

type Props = {
    onIndexed: (
        videoUrl: string
    ) => void;
}

export default function VideoInput({
  onIndexed,
}: Props) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleIndex() {
    if (!url.trim()) return;

    setLoading(true);

    try {
      const response = await fetch("/api/index", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          videoUrl: url,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to index");
      }

      const data = await response.json();

      console.log(data);

      // Save the indexed video URL in the parent
      onIndexed(url);

      alert("Video indexed successfully!");
    } catch (error) {
      console.error(error);
      alert("Indexing failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex gap-3">
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Paste YouTube URL..."
        className="flex-1 rounded-lg border px-4 py-3"
      />

      <button
        onClick={handleIndex}
        disabled={loading}
        className="rounded-lg bg-red-600 px-5 py-3 text-white disabled:opacity-50"
      >
        {loading ? "Indexing..." : "Index Video"}
      </button>
    </div>
  );
}