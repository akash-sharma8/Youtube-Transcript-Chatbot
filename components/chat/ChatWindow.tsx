"use client";

import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import type { ChatMessage as Message } from "@/hooks/useChat";

type Props = {
  messages: Message[];
};

export default function ChatWindow({ messages }: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (messages.length === 0) {
    return (
      <div className="flex h-full min-h-[350px] flex-col items-center justify-center rounded-xl bg-slate-50/50 p-8 text-center border border-slate-100 dark:bg-slate-950/20 dark:border-slate-800/50">
        {/* Animated, striking empty state illustration */}
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600 ring-8 ring-red-500/5 dark:bg-red-950/30 dark:text-red-400 dark:ring-red-500/5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501c1.153-.086 2.294-.213 3.423-.379 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
          </svg>
        </div>
        
        <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
          No messages yet
        </h3>
        <p className="mt-1 max-w-sm text-xs leading-relaxed text-slate-400 dark:text-slate-500">
          Ask anything about the indexed YouTube video. Get summaries, look up timestamps, or unpack complex concepts instantly.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 pr-1">
      {messages.map((message, index) => (
        <ChatMessage
          key={index}
          role={message.role}
          content={message.content}
          metadata={message.metadata}
        />
      ))}
      {/* Anchor div for auto-scrolling */}
      <div ref={bottomRef} />
    </div>
  );
}