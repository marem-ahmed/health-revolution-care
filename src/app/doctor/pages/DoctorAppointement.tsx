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
  Confirmed: "bg-green-100 text-green-700",
  Pending: "bg-orange-100 text-orange-700",
};

export default function DoctorAppointments() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-bold text-secondary mb-4">Appointments</h2>

      <table className="w-full text-sm">
        <thead className="text-gray-500 border-b">
          <tr>
            <th className="text-left py-2">Patient</th>
            <th>Date</th>
            <th>Time</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map((a) => (
            <tr key={a.id} className="border-b last:border-0">
              <td className="py-3 font-medium">{a.patient}</td>
              <td>{a.date}</td>
              <td>{a.time}</td>
              <td>{a.reason}</td>
              <td>
                <span className={`px-3 py-1 rounded-full text-xs ${statusClasses[a.status]}`}>
                  {a.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
