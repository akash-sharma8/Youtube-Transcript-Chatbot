export default function Loader() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-500">
        AI is thinking
      </span>

      <div className="flex gap-1">
        <div className="h-2 w-2 animate-bounce rounded-full bg-gray-500"></div>

        <div
          className="h-2 w-2 animate-bounce rounded-full bg-gray-500"
          style={{
            animationDelay: "0.15s",
          }}
        ></div>

        <div
          className="h-2 w-2 animate-bounce rounded-full bg-gray-500"
          style={{
            animationDelay: "0.3s",
          }}
        ></div>
      </div>
    </div>
  );
}