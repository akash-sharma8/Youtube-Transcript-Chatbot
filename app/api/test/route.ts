import {NextRequest, NextResponse} from "next/server";

import {HumanMessage} from "@langchain/core/messages";
import {chatModel} from "@/lib/langchain/chat-model";


export async function GET(){
    const response = await chatModel.invoke([
        new HumanMessage("Explain Langchain in 50 words.")
    ]);
    return NextResponse.json({
        response: response.content
    });
}