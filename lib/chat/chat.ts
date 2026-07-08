import { ChatGroq } from "@langchain/groq";
import { HumanMessage } from "@langchain/core/messages";

import { env } from "@/lib/config/env";
import { buildPrompt } from "./prompt";
import { ChromaRetriever } from "@/lib/retrieval/retriever";

export class ChatService {
  private retriever = new ChromaRetriever();

  private model = new ChatGroq({
    apiKey: env.GROQ_API_KEY,
    model: "llama-3.1-8b-instant",
    temperature: 0,
  });

  async ask(question: string, videoId: string) {
    const docs = await this.retriever.retrieve({ query: question, videoId });

    const prompt = buildPrompt(question, docs);

    const response = await this.model.invoke([
      new HumanMessage(prompt),
    ]);

    return {
      answer: response.content.toString(),
      sources: docs.map((doc) => ({
        start: Number(doc.metadata.start),
        duration: Number(doc.metadata.duration),
      })),
    };
  }
}