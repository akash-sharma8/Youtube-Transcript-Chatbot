import {TranscriptSegment} from "@/types/transcript";


interface Props{
    transcript: TranscriptSegment[];
}

export default function TranscriptViewer({transcript}:Props){
    return(
        <div className="space-y-3">
      {transcript.map((segment, index) => (
        <div
          key={index}
          className="rounded border p-3"
        >
          <p>{segment.text}</p>

          <span className="text-xs text-gray-500">
            {segment.start.toFixed(2)} sec
          </span>
        </div>
      ))}
    </div>
    )
}