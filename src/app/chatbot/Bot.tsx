import { useState } from "react";
import ChatBot from "./Chatbot";

export default function ConnectHealthBot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Chat Window */}
      {open && <ChatBot onClose={() => setOpen(false)} />}

      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="
            fixed
            bottom-6
            right-6
            flex
            flex-col
            items-center
            gap-2
            group
          "
        >
          <img
            src="/assets/bot.png"
            alt="Connect Health Bot"
            className="
              w-44
              h-44
              object-contain
              drop-shadow-lg
              group-hover:scale-105
              transition
            "
          />
        </button>
      )}
    </>
  );
}
