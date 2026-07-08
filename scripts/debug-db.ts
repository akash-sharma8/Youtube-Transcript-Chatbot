import "dotenv/config";

import { getCollection } from "@/lib/chroma/collections";

async function main() {

  const collection =
    await getCollection("apUuHP4oUs0");

  console.log(await collection.count());

  const result =
    await collection.peek({
      limit: 10,
    });

  console.log(result.documents);

  console.log(result.metadatas);

}

main();