import {Document} from "@langchain/core/documents";

import type { TranscriptSegment } from "@/types/transcript";
import type { TranscriptMetadata } from "@/types/document";


export function buildTranscriptDocuments(segments:TranscriptSegment[], videoUrl:string):Document<TranscriptMetadata>[]{
    return segments.map((segment)=>{
        return new Document<TranscriptMetadata>({
            pageContent: segment.text,
            metadata:{
                start: segment.start,
                duration: segment.duration,
                language: segment.language, 
                videoUrl,
            }
        });
    });
}