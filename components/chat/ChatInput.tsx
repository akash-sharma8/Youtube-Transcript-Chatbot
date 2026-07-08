"use client";

import { useState } from "react";

type Props = {
  onSend: (message: string) => void;
  loading?: boolean;
};

export default function ChatInput({ onSend, loading }: Props) {
  const [value, setValue] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!value.trim() || loading) return;

    onSend(value);
    setValue("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-1.5 shadow-sm transition-all focus-within:border-red-500/50 focus-within:ring-4 focus-within:ring-red-500/10 dark:border-slate-800 dark:bg-slate-950 dark:focus-within:border-red-500/30 dark:focus-within:ring-red-500/5"
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={loading}
        placeholder="Ask something about this video..."
        className="w-full flex-1 bg-transparent px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none disabled:cursor-not-allowed dark:text-slate-100 dark:placeholder-slate-500"
      />

      <button
        type="submit"
        disabled={loading || !value.trim()}
        className="inline-flex h-9 items-center justify-center gap-2 rounded-lg bg-red-600 px-4 text-sm font-medium text-white transition-all hover:bg-red-700 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40 shadow-sm shadow-red-600/10 dark:bg-red-600 dark:hover:bg-red-700"
      >
        {loading ? (
          <>
            {/* Elegant loading spinner */}
            <svg className="h-4 w-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>Thinking...</span>
          </>
        ) : (
          <>
            <span>Send</span>
            {/* Minimal send arrow icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-3.5 w-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}