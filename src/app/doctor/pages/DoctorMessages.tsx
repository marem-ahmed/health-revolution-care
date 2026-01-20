const messages = [
  { from: "patient", text: "Hello doctor", time: "10:01 AM" },
  { from: "doctor", text: "Hi, how can I help?", time: "10:02 AM" },
  { from: "patient", text: "I feel chest pain", time: "10:03 AM" },
];

export default function DoctorMessages() {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col h-[500px]">
      <h2 className="text-xl font-bold text-secondary mb-4">Messages</h2>

      {/* Chat */}
      <div className="flex-1 space-y-3 overflow-y-auto">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-xs p-3 rounded-lg text-sm ${
              m.from === "doctor" ? "bg-primary text-white ml-auto" : "bg-gray-100"
            }`}
          >
            {m.text}
            <div className="text-xs opacity-70 mt-1">{m.time}</div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex gap-2 mt-4">
        <input className="flex-1 border rounded-lg px-3 py-2" placeholder="Type message..." />
        <button className="bg-primary text-white px-4 rounded-lg">Send</button>
      </div>
    </div>
  );
}
