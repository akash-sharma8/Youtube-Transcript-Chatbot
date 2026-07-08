"use client";

import Markdown from "./Markdown";
import Timestamp from "./Timestamp";

type Props = {
  role: "user" | "assistant";
  content: string;
  metadata?: {
    start?: number;
  };
};

export default function ChatMessage({ role, content, metadata }: Props) {
  const isUser = role === "user";

  return (
    <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm transition-all md:max-w-[75%] ${
          isUser
            ? "rounded-br-none bg-slate-900 font-medium text-white shadow-sm dark:bg-slate-100 dark:text-slate-900"
            : "rounded-bl-none border border-slate-100 bg-slate-50 text-slate-800 shadow-sm dark:border-slate-800/60 dark:bg-slate-950 dark:text-slate-100"
        }`}
      >
        {/* Header Metadata Section */}
        <div className="mb-2 flex items-center justify-between gap-4">
          <span
            className={`text-xs font-bold uppercase tracking-wider ${
              isUser 
                ? "text-slate-300 dark:text-slate-600" 
                : "text-red-600 dark:text-red-400"
            }`}
          >
            {isUser ? "You" : "AI Assistant"}
          </span>

          {/* Inline Timestamp badge for AI responses */}
          {!isUser && metadata?.start !== undefined && (
            <div className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-0.5 text-xs font-medium border border-slate-200/60 shadow-sm dark:bg-slate-900 dark:border-slate-800">
              <span className="text-slate-400 dark:text-slate-500">From:</span>
              <Timestamp seconds={Number(metadata.start)} />
            </div>
          )}
        </div>

        {/* Message Content */}
        <div className={`prose prose-sm max-w-none dark:prose-invert ${
          isUser 
            ? "prose-headings:text-white prose-p:text-slate-100" 
            : "prose-headings:text-slate-900 prose-p:text-slate-800 dark:prose-p:text-slate-200"
        }`}>
          <Markdown content={content} />
        </div>
      </div>
    </div>
  );
}