import "dotenv/config";
import { chat } from "@/lib/rag/chat";

async function main() {
  const result = await chat(
    "What promise does the singer make?"
  );

  console.log("\nANSWER:\n");
  console.log(result.answer);

  console.log("\nSOURCES:\n");
  console.log(result.sources);
}

main();