import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Apr 1", patients: 120 },
  { day: "Apr 5", patients: 135 },
  { day: "Apr 10", patients: 150 },
  { day: "Apr 15", patients: 145 },
  { day: "Apr 20", patients: 160 },
  { day: "Apr 22", patients: 186 },
];

export default function MedicalAnalytics() {
  return (
    <div
      className="
        bg-white dark:bg-slate-800
        rounded-xl shadow-sm
        p-6 space-y-4
        transition-colors
      "
    >
      <h3 className="font-bold text-secondary dark:text-slate-100">Medical Analytics</h3>

      {/* Chart */}
      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="day" stroke="#94a3b8" tick={{ fill: "#94a3b8", fontSize: 12 }} />
            <YAxis hide />
            <Tooltip
              contentStyle={{
                backgroundColor: "#020617",
                border: "1px solid #334155",
                borderRadius: "8px",
                color: "#e5e7eb",
              }}
              labelStyle={{ color: "#e5e7eb" }}
            />
            <Line
              type="monotone"
              dataKey="patients"
              stroke="#38bdf8"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4">
          <p className="text-sm text-gray-500 dark:text-slate-400">Blood Pressure</p>
          <p className="font-bold text-secondary dark:text-slate-100">120 / 80 mmHg</p>
        </div>

        <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4">
          <p className="text-sm text-gray-500 dark:text-slate-400">Cholesterol</p>
          <p className="font-bold text-secondary dark:text-slate-100">110 mg/dL</p>
        </div>
      </div>

      <button
        className="
          w-full
          bg-primary text-white
          py-3 rounded-lg
          hover:opacity-90
          active:scale-[0.98]
          transition
        "
      >
        View Details
      </button>
    </div>
  );
}
