import { YoutubeTranscript } from "youtube-transcript";
import type { TranscriptSegment} from "@/types/transcript";


export async function fetchTranscript(videoUrl:string):Promise<TranscriptSegment[]>{
    const transcript = await YoutubeTranscript.fetchTranscript(videoUrl);

    return transcript.map((segment) => ({
        text: segment.text,
        start: segment.offset/1000,
        duration: segment.duration/1000,
        language: segment.lang || "",
    }));
}