import { chatModel } from "@/lib/llm/groq";
import { qaPrompt } from "@/lib/prompt/qa";

export async function askQuestion(
  context: string,
  question: string
) {
  const prompt = await qaPrompt.format({
    context,
    question,
  });

  const response = await chatModel.invoke(prompt);

  return response.content;
}