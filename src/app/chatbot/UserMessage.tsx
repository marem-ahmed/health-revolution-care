export function UserMessage({ text }) {
  return (
    <div className="flex justify-end">
      <div className="bg-primary text-white rounded-xl px-4 py-2 text-sm max-w-[75%]">{text}</div>
    </div>
  );
}
