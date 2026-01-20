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
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h3 className="font-bold text-secondary">Medical Analytics</h3>

      {/* Chart */}
      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="day" />
            <YAxis hide />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="patients"
              stroke="#73B6D3"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-500">Blood Pressure</p>
          <p className="font-bold text-secondary">120 / 80 mmHg</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-500">Cholesterol</p>
          <p className="font-bold text-secondary">110 mg/dL</p>
        </div>
      </div>

      <button className="w-full bg-primary text-white py-3 rounded-lg">View Details</button>
    </div>
  );
}
