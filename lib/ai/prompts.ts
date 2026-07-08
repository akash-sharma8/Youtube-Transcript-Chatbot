import { ChatPromptTemplate } from "@langchain/core/prompts";

export const explainConceptPrompt = ChatPromptTemplate.fromMessages([
    [
      "system",
      "You are a senior AI engineer. Explain concepts with simple analogies and step-by-step reasoning."
    ],
    [
      "human",
      "{question}"
    ]
])