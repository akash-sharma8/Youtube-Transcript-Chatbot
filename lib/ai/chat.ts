import { ChatGroq } from "@langchain/groq";
import { env } from "@/lib/config/env";


const MODEL_NAME = "llama-3.1-8b-instant";

export const chatModel = new ChatGroq({
    apiKey: env.GROQ_API_KEY,
    model: MODEL_NAME,
    temperature:0,
})