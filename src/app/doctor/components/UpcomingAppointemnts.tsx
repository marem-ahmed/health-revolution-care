const appointments = [
  {
    patient: "Sarah Lewis",
    time: "9:00 AM",
    reason: "Routine Checkup",
    status: "Confirmed",
  },
  {
    patient: "Michael Tan",
    time: "10:30 AM",
    reason: "Follow-up",
    status: "Confirmed",
  },
  {
    patient: "David Lee",
    time: "11:15 AM",
    reason: "Chest Pain",
    status: "Checked in",
  },
  {
    patient: "Emma Brown",
    time: "2:00 PM",
    reason: "Follow-up",
    status: "Pending",
  },
];

const statusStyle: Record<string, string> = {
  Confirmed: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  "Checked in": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  Pending: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
};

export default function UpcomingAppointments() {
  return (
    <div
      className="
        bg-white dark:bg-slate-800
        rounded-xl shadow-sm
        p-6
        transition-colors
      "
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-secondary dark:text-slate-100">Upcoming Appointments</h3>
        <button className="text-primary dark:text-blue-400 text-sm hover:underline">
          View All
        </button>
      </div>

      {/* List */}
      <div className="space-y-3">
        {appointments.map((a) => (
          <div
            key={a.patient}
            className="
              grid grid-cols-4 items-center text-sm
              bg-gray-50 dark:bg-slate-700
              rounded-lg p-3
              hover:bg-gray-100 dark:hover:bg-slate-600
              transition
            "
          >
            <span className="font-medium text-secondary dark:text-slate-100">{a.patient}</span>

            <span className="text-gray-500 dark:text-slate-400">{a.time}</span>

            <span className="truncate text-gray-500 dark:text-slate-400">{a.reason}</span>

            <span
              className={`
                text-xs px-2 py-1 rounded-full text-center font-medium
                ${statusStyle[a.status]}
              `}
            >
              {a.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
