interface Props {
  doctor: string;
  specialty: string;
  date: string;
  time: string;
  status: "Confirmed" | "Completed" | "Cancelled";
}

const statusStyles = {
  Confirmed: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300",
  Completed: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-300",
  Cancelled: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-300",
};

/* Avatars list */
const avatars = ["/assets/avatar5.png", "/assets/avatar1.png", "/assets/avatar4.png"];

export default function AppointmentCard({ doctor, specialty, date, time, status }: Props) {
  /* Pick avatar based on doctor name */
  const avatar = avatars[doctor.length % avatars.length];

  return (
    <div
      className="
        bg-white dark:bg-slate-800
        p-5 rounded-2xl shadow-sm
        flex items-center justify-between
        hover:shadow-md transition
      "
    >
      {/* Left */}
      <div className="flex items-center gap-4">
        {/* Doctor Image */}
        <img
          src={avatar}
          alt={doctor}
          className="
            w-14 h-14 rounded-full
            object-cover
            border border-gray-200 dark:border-slate-700
          "
        />

        {/* Info */}
        <div>
          <h4 className="font-semibold text-secondary dark:text-slate-100">{doctor}</h4>

          <p className="text-sm text-gray-500 dark:text-slate-400">{specialty}</p>

          <p className="text-sm text-gray-500 dark:text-slate-400">
            {date} • {time}
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <span
          className={`
            px-3 py-1 rounded-full text-sm font-medium
            ${statusStyles[status]}
          `}
        >
          {status}
        </span>

        {status === "Confirmed" && (
          <button
            className="
              text-sm text-red-500 dark:text-red-400
              hover:underline
              transition
            "
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}
