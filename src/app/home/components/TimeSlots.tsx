import { useState } from "react";
import clsx from "clsx";

export default function TimeSlots() {
  const slots = ["09:00 AM", "09:30 AM", "12:00 PM", "02:30 PM", "03:30 PM"];
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  return (
    <div>
      <h4 className="font-medium mb-3 text-secondary dark:text-slate-100">Available Time</h4>

      <div className="flex flex-wrap gap-3">
        {slots.map((time) => (
          <button
            key={time}
            onClick={() => setSelectedTime(time)}
            className={clsx(
              "px-5 py-2 rounded-xl border transition active:scale-95",
              selectedTime === time
                ? "bg-primary text-white border-primary"
                : [
                    "bg-white dark:bg-slate-800",
                    "border-slate-200 dark:border-slate-700",
                    "text-secondary dark:text-slate-100",
                    "hover:bg-blue-50 dark:hover:bg-slate-700",
                  ],
            )}
          >
            {time}
          </button>
        ))}
      </div>

      {selectedTime && (
        <p className="text-sm text-accent dark:text-slate-400 mt-2">
          Selected time: <b>{selectedTime}</b>
        </p>
      )}
    </div>
  );
}
