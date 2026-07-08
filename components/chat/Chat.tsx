"use client";

import ChatInput from "./ChatInput";
import ChatWindow from "./ChatWindow";
import { useChat } from "@/hooks/useChat";

type Props = {
  videoUrl: string;
};

export default function Chat({ videoUrl }: Props) {
  const {
    messages,
    loading,
    sendMessage,
  } = useChat(videoUrl);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4 dark:from-slate-900 dark:to-slate-950 md:p-6">
      <div className="flex h-[90vh] w-full max-w-5xl flex-col rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900">

        {/* Header */}
        <header className="flex items-center justify-between border-b border-slate-200 px-6 py-4 dark:border-slate-800">

          <div>
            <h1 className="text-xl font-bold">
              YouTube Transcript Chatbot
            </h1>

            <p className="text-xs text-slate-500">
              Ask questions about the indexed video
            </p>
          </div>

          <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-900 dark:text-green-300">
            Ready
          </div>
        </header>

        {/* Messages */}
        <main className="flex-1 overflow-y-auto px-6 py-5">
          <ChatWindow messages={messages} />
        </main>

        {/* Input */}
        <footer className="border-t border-slate-200 p-4 dark:border-slate-800">
          <ChatInput
            loading={loading}
            onSend={sendMessage}
          />
        </footer>

      </div>
    </div>
  );
}