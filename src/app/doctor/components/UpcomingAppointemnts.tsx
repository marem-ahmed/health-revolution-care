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
  Confirmed: "bg-green-100 text-green-700",
  "Checked in": "bg-blue-100 text-blue-700",
  Pending: "bg-orange-100 text-orange-700",
};

export default function UpcomingAppointments() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex justify-between mb-4">
        <h3 className="font-bold text-secondary">Upcoming Appointments</h3>
        <button className="text-primary text-sm">View All</button>
      </div>

      <div className="space-y-3">
        {appointments.map((a) => (
          <div
            key={a.patient}
            className="grid grid-cols-4 items-center text-sm bg-gray-50 rounded-lg p-3"
          >
            <span>{a.patient}</span>
            <span>{a.time}</span>
            <span className="truncate">{a.reason}</span>
            <span
              className={`text-xs px-2 py-1 rounded-full text-center ${
                statusStyle[a.status]
              }`}
            >
              {a.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
