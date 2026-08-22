import { ChatGroq } from "@langchain/groq";
import { env } from "@/lib/config/env";


const MODEL_NAME = "openai/gpt-oss-20b";

export const chatModel = new ChatGroq({
    apiKey: env.GROQ_API_KEY,
    model: MODEL_NAME,
    temperature:0,
})
