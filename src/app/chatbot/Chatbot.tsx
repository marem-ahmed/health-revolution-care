import { BotMessage } from "./BotMessage";
import { UserMessage } from "./UserMessage";
import { FiX } from "react-icons/fi";

type ChatBotProps = {
  onClose: () => void;
};

export default function ChatBot({ onClose }: ChatBotProps) {
  return (
    <div className="fixed bottom-6 right-6 w-80 h-[420px] bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden z-[9999]">
      {/* Header */}
      <div className="bg-primary text-white px-4 py-3 flex items-center justify-between">
        <span className="font-medium">Medical Assistant</span>

        {/* Close Icon */}
        <button
          onClick={onClose}
          className="p-1 rounded hover:bg-white/20 transition"
          aria-label="Close chat"
        >
          <FiX size={18} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-gray-50">
        <BotMessage text="Hello 👋 How can I help you today?" />
        <UserMessage text="I want to book an appointment" />
        <BotMessage text="Sure! Which specialty are you looking for?" />
      </div>

      {/* Input */}
      <div className="p-3 border-t flex gap-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="
            flex-1
            border
            rounded-full
            px-4 py-2
            text-sm
            focus:outline-none
            focus:ring-2 focus:ring-primary
          "
        />
        <button className="bg-primary text-white px-4 rounded-full">Send</button>
      </div>
    </div>
  );
}
