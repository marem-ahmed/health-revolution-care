import { useState } from "react";
import clsx from "clsx";

export default function DateSelector() {
  const days = [17, 18, 19, 20, 21];
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  return (
    <div>
      <h3 className="font-semibold text-lg mb-3 text-secondary dark:text-slate-100">April</h3>

      <div className="flex gap-3">
        {days.map((day) => (
          <div
            key={day}
            onClick={() => setSelectedDay(day)}
            className={clsx(
              "w-16 h-16 flex flex-col items-center justify-center rounded-xl border cursor-pointer transition active:scale-95",
              selectedDay === day
                ? "bg-primary text-white border-primary"
                : [
                    "bg-white dark:bg-slate-800",
                    "border-slate-200 dark:border-slate-700",
                    "text-secondary dark:text-slate-100",
                    "hover:bg-primary-50 dark:hover:bg-slate-700",
                  ],
            )}
          >
            <span className="text-lg font-semibold">{day}</span>
            <span
              className={clsx(
                "text-xs",
                selectedDay === day ? "text-white/90" : "text-accent dark:text-slate-400",
              )}
            >
              Available
            </span>
          </div>
        ))}
      </div>

      {selectedDay && (
        <p className="text-sm text-accent dark:text-slate-400 mt-2">
          Selected date: <b>April {selectedDay}</b>
        </p>
      )}
    </div>
  );
}
