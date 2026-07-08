import { ChatPromptTemplate } from "@langchain/core/prompts";

export const ragPrompt = ChatPromptTemplate.fromTemplate(`
You are an AI assistant that answers questions about a YouTube video.

Use ONLY the transcript provided below.

If the answer is not present in the transcript, say:

"I couldn't find that information in the transcript."

Transcript:
{context}

Question:
{question}

Answer:
`);