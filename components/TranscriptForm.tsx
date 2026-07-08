"use client";

import React, { useState } from "react";

interface TranscriptFormProps {
    onSubmit: (url: string) => Promise<void>;
    loading:boolean;
}

export default function TranscriptForm({ onSubmit, loading }: TranscriptFormProps) {
    const [url, setUrl] = useState("");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!url.trim()) return;


        await onSubmit(url);
    }
    return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 w-full"
    >
      <input
        type="url"
        placeholder="Paste YouTube URL..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="flex-1 rounded-lg border px-4 py-2"
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-black px-5 py-2 text-white disabled:opacity-50"
      >
        {loading ? "Loading..." : "Load"}
      </button>
    </form>
  );
}