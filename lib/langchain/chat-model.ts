import { ChatGroq } from "@langchain/groq";

const MODEL_NAME = "llama-3.3-70b-versatile";

export const chatModel = new ChatGroq({
    apiKey: process.env.GROQ_API_KEY,
    model: MODEL_NAME,
    temperature:0,
})