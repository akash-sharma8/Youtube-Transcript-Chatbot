import "dotenv/config";

import { chatModel } from "@/lib/llm/groq";

async function main() {
  const response = await chatModel.invoke("Say hello in one sentence.");

  console.log(response.content);
}

main().catch(console.error);