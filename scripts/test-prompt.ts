import { ragPrompt } from "@/lib/prompts/rag";

async function main() {
  const prompt = await ragPrompt.invoke({
    context: "React is a JavaScript library for building user interfaces.",
    question: "What is React?",
  });

  console.log(prompt.toString());
}

main().catch(console.error);