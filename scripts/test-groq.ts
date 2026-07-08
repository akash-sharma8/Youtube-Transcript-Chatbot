import "dotenv/config";

import { chatModel } from "@/lib/ai/chat";

async function main() {
  const response = await chatModel.invoke("Say hello in one sentence.");

  console.log(response.content);
}

main().catch(console.error);