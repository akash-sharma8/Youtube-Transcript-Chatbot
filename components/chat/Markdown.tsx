"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  content: string;
};

export default function Markdown({ content }: Props) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="text-xl font-bold mb-3 mt-4 text-slate-900 dark:text-slate-50 tracking-tight first:mt-0">
            {children}
          </h1>
        ),

        h2: ({ children }) => (
          <h2 className="text-lg font-semibold mb-2 mt-4 text-slate-900 dark:text-slate-100 tracking-tight first:mt-0">
            {children}
          </h2>
        ),

        h3: ({ children }) => (
          <h3 className="text-base font-semibold mb-2 mt-3 text-slate-800 dark:text-slate-200 first:mt-0">
            {children}
          </h3>
        ),

        p: ({ children }) => (
          <p className="mb-2.5 leading-relaxed text-sm text-slate-700 dark:text-slate-300 last:mb-0">
            {children}
          </p>
        ),

        ul: ({ children }) => (
          <ul className="list-disc pl-5 mb-3 text-sm text-slate-700 dark:text-slate-300 space-y-1">
            {children}
          </ul>
        ),

        ol: ({ children }) => (
          <ol className="list-decimal pl-5 mb-3 text-sm text-slate-700 dark:text-slate-300 space-y-1">
            {children}
          </ol>
        ),

        li: ({ children }) => (
          <li className="marker:text-slate-400 dark:marker:text-slate-600">
            {children}
          </li>
        ),

        // Native check to handle inline code vs full blocks inside react-markdown
        code({ className, children, ...props }) {
          const isInline = !className;
          
          if (isInline) {
            return (
              <code className="rounded-md bg-slate-200/60 px-1.5 py-0.5 font-mono text-xs font-semibold text-red-600 dark:bg-slate-800/80 dark:text-red-400">
                {children}
              </code>
            );
          }
          
          return (
            <code className="block text-xs font-mono text-slate-100" {...props}>
              {children}
            </code>
          );
        },

        pre({ children }) {
          return (
            <pre className="my-3 overflow-x-auto rounded-xl bg-slate-950 p-4 font-mono shadow-inner border border-slate-800/50">
              {children}
            </pre>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}