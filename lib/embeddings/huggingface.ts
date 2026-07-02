import { InferenceClient } from "@huggingface/inference";
import { Embeddings } from "@langchain/core/embeddings";

const token = process.env.HF_TOKEN;

if (!token) {
    throw new Error("HF_TOKEN environment variable is not set.");
}

const client = new InferenceClient(token);

const MODEL = "BAAI/bge-large-en-v1.5";


export class HuggingFaceEmbeddings extends Embeddings {
    constructor() {
        super({});
    }

    async embedQuery(text: string): Promise<number[]> {
        const embedding = await client.featureExtraction({
            model: MODEL,
            inputs: text,
        });
        return embedding as number[]

    }
    async embedDocuments(texts: string[]): Promise<number[][]> {
        return Promise.all(
            texts.map((text) => this.embedQuery(text))
        )
    }
}

export const embeddings = new HuggingFaceEmbeddings();