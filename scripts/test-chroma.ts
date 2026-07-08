import "dotenv/config";
import { getCollection } from "@/lib/chroma/collections";

async function main() {
  console.log("Connecting...");

  const collection = await getCollection();

  console.log("Connected!");

  console.log(collection.name);
}

main().catch((err) => {
  console.error(err);
});