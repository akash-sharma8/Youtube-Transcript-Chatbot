export interface TranscriptMetadata {
  videoId: string;
  videoUrl: string;
  videoTitle?: string;

  start: number;
  duration: number;

  language: string;
}