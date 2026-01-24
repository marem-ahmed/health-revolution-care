interface Props {
  doctor: string;
  specialty: string;
  date: string;
  time: string;
  status: "Confirmed" | "Completed" | "Cancelled";
}

const statusStyles = {
  Confirmed: "bg-blue-100 text-blue-600",
  Completed: "bg-green-100 text-green-600",
  Cancelled: "bg-red-100 text-red-600",
};

export default function AppointmentCard({ doctor, specialty, date, time, status }: Props) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm flex items-center justify-between hover:shadow-md transition">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gray-200" />

        <div>
          <h4 className="font-semibold">{doctor}</h4>
          <p className="text-sm text-gray-500">{specialty}</p>
          <p className="text-sm text-gray-500">
            {date} • {time}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyles[status]}`}>
          {status}
        </span>

        {status === "Confirmed" && (
          <button className="text-sm text-red-500 hover:underline">Cancel</button>
        )}
      </div>
    </div>
  );
}
