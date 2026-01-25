import AppointmentCard from "../components/AppointmentCard";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function MyAppointments() {
  const navigate = useNavigate();

  const appointments = [
    {
      doctor: "Dr. mina Johnson",
      specialty: "Cardiologist",
      date: "April 18, 2024",
      time: "09:30 AM",
      status: "Confirmed" as const,
    },
    {
      doctor: "Dr. Ahmed Hassan",
      specialty: "Dermatologist",
      date: "March 02, 2024",
      time: "01:00 PM",
      status: "Completed" as const,
    },
    {
      doctor: "Dr. mohamed Omar",
      specialty: "Neurologist",
      date: "Feb 14, 2024",
      time: "11:00 AM",
      status: "Cancelled" as const,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="
          flex items-center gap-2
          text-sm font-medium
          text-secondary dark:text-slate-300
          hover:underline
        "
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </button>

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-secondary dark:text-slate-100">My Appointments</h1>
        <p className="text-accent dark:text-slate-400 mt-1">
          View and manage all your appointments
        </p>
      </div>

      {/* Filters (UI only) */}
      <div className="flex gap-3 text-sm">
        <button className="px-4 py-2 rounded-full bg-primary text-white">All</button>
        <button className="px-4 py-2 rounded-full bg-gray-100 dark:bg-slate-800 dark:text-slate-200">
          Upcoming
        </button>
        <button className="px-4 py-2 rounded-full bg-gray-100 dark:bg-slate-800 dark:text-slate-200">
          Completed
        </button>
        <button className="px-4 py-2 rounded-full bg-gray-100 dark:bg-slate-800 dark:text-slate-200">
          Cancelled
        </button>
      </div>

      {/* Appointments List */}
      <div className="space-y-4">
        {appointments.map((appointment, index) => (
          <AppointmentCard key={index} {...appointment} />
        ))}
      </div>
    </div>
  );
}
