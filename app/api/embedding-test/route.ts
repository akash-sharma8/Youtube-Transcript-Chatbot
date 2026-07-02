import { NextResponse} from 'next/server';
import {embeddings} from '@/lib/embeddings/huggingface';

export async function GET(){
    const vector = await embeddings.embedQuery(
        "What is Langchain?"
    );
    return NextResponse.json({ 
        dimension: vector.length,
        firstFiveValues: vector.slice(0, 5),
     });
}