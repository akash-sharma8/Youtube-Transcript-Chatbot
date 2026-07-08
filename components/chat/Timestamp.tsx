"use client";

type Props = {
  seconds: number;
};

export default function Timestamp({ seconds }: Props) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const label = `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;

  return (
    <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2 py-0.5 font-mono text-xs font-semibold text-slate-700 transition-colors hover:bg-red-50 hover:text-red-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-red-950/50 dark:hover:text-red-400 cursor-pointer">
      {/* Small media clock icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-3 w-3 opacity-70"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
      {label}
    </span>
  );
}