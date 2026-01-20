export function BotMessage({ text }) {
  return (
    <div className="flex items-start gap-2">
      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm">
        🤖
      </div>
      <div className="bg-white rounded-xl px-4 py-2 text-sm shadow max-w-[75%]">{text}</div>
    </div>
  );
}
