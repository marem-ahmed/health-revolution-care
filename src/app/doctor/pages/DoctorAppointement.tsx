const appointments = [
  {
    id: 1,
    patient: "Mariam Ahmed",
    date: "Apr 25, 2024",
    time: "10:30 AM",
    reason: "Routine Checkup",
    status: "Confirmed",
  },
  {
    id: 2,
    patient: "clara Lewis",
    date: "Apr 25, 2024",
    time: "10:30 AM",
    reason: "Routine Checkup",
    status: "Confirmed",
  },
  {
    id: 3,
    patient: "Peter atef",
    date: "Apr 25, 2024",
    time: "10:30 AM",
    reason: "Routine Checkup",
    status: "Pending",
  },
  {
    id: 4,
    patient: "john Akram",
    date: "Apr 25, 2024",
    time: "10:30 AM",
    reason: "Routine Checkup",
    status: "Confirmed",
  },
  {
    id: 5,
    patient: "kerollos Lewis",
    date: "Apr 25, 2024",
    time: "10:30 AM",
    reason: "Routine Checkup",
    status: "Pending",
  },
  {
    id: 6,
    patient: "Mariam hany",
    date: "Apr 25, 2024",
    time: "10:30 AM",
    reason: "Routine Checkup",
    status: "Confirmed",
  },
  {
    id: 7,
    patient: "clara Lewis",
    date: "Apr 25, 2024",
    time: "10:30 AM",
    reason: "Routine Checkup",
    status: "Confirmed",
  },
  {
    id: 8,
    patient: "samuel Lewis",
    date: "Apr 25, 2024",
    time: "10:30 AM",
    reason: "Routine Checkup",
    status: "Pending",
  },
  {
    id: 9,
    patient: "Sarah Lewis",
    date: "Apr 25, 2024",
    time: "10:30 AM",
    reason: "Routine Checkup",
    status: "Confirmed",
  },
  {
    id: 10,
    patient: "David Lee",
    date: "Apr 25, 2024",
    time: "12:00 PM",
    reason: "Chest Pain",
    status: "Pending",
  },
];

const statusClasses: Record<string, string> = {
  Confirmed: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  Pending: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
};

export default function DoctorAppointments() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 transition-colors">
      <h2 className="text-xl font-bold text-secondary dark:text-slate-100 mb-4">Appointments</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-gray-500 dark:text-slate-400 border-b border-gray-200 dark:border-slate-700">
            <tr>
              <th className="text-left py-2">Patient</th>
              <th className="text-left">Date</th>
              <th className="text-left">Time</th>
              <th className="text-left">Reason</th>
              <th className="text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((a) => (
              <tr
                key={a.id}
                className="border-b last:border-0
                  border-gray-100 dark:border-slate-700
                  hover:bg-gray-50 dark:hover:bg-slate-700/50
                  transition"
              >
                <td className="py-3 font-medium text-secondary dark:text-slate-100">{a.patient}</td>
                <td className="text-gray-600 dark:text-slate-300">{a.date}</td>
                <td className="text-gray-600 dark:text-slate-300">{a.time}</td>
                <td className="text-gray-600 dark:text-slate-300">{a.reason}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${statusClasses[a.status]}`}
                  >
                    {a.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
