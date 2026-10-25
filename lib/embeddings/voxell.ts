import { env } from "@/lib/config/env";
import type { EmbeddingProvider } from "./types";

type VoxellEmbedResponse = {
  embeddings: number[][];
};

function isVoxellEmbedResponse(
  value: unknown,
  expectedCount: number,
  dimensions: number
): value is VoxellEmbedResponse {
  return (
    typeof value === "object" &&
    value !== null &&
    "embeddings" in value &&
    Array.isArray(value.embeddings) &&
    value.embeddings.length === expectedCount &&
    value.embeddings.every(
      (embedding) =>
        Array.isArray(embedding) &&
        embedding.length === dimensions &&
        embedding.every(
          (item) => typeof item === "number" && Number.isFinite(item)
        )
    )
  );
}

export class VoxellEmbedding implements EmbeddingProvider {
  private readonly endpoint = "https://api.voxell.ai/v1/embed";
  private readonly model = "turbo";
  private readonly dimensions = 1024;

  private async embed(
    texts: string[],
    inputType: "query" | "document"
  ): Promise<number[][]> {
    const response = await fetch(this.endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.VOXELL_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        texts,
        model: this.model,
        input_type: inputType,
      }),
    });

    if (!response.ok) {
      const details = await response.text();
      throw new Error(
        `Voxell embeddings API failed (${response.status}): ${details}`
      );
    }

    const result: unknown = await response.json();
    if (!isVoxellEmbedResponse(result, texts.length, this.dimensions)) {
      throw new Error("Voxell embeddings API returned an invalid response");
    }

    return result.embeddings;
  }

  async embedQuery(text: string): Promise<number[]> {
    const [embedding] = await this.embed([text], "query");
    return embedding;
  }

  async embedDocuments(texts: string[]): Promise<number[][]> {
    const embeddings: number[][] = [];
    const batchSize = 64;

    for (let offset = 0; offset < texts.length; offset += batchSize) {
      const batch = texts.slice(offset, offset + batchSize);
      embeddings.push(...(await this.embed(batch, "document")));
    }

    return embeddings;
  }
}