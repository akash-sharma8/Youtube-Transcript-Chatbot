import { Document } from "@langchain/core/documents";

export function buildPrompt(
  question: string,
  docs: Document[]
) {
  const context = docs
    .map((doc) => doc.pageContent)
    .join("\n\n");

  return `
You are a helpful AI assistant.

Answer ONLY using the transcript below.

If the answer can be inferred from the transcript,
explain it naturally.

If the transcript truly does not contain enough
information, reply only:
- Always answer in English.
"I don't know."

Transcript:

${context}

Question:

${question}

Answer:
`;
}