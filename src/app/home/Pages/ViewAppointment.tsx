import { Calendar, Clock, MapPin, Stethoscope } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ViewAppointment() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-6">
      {/* Back */}
      <button
        onClick={() => navigate("/home")}
        className="text-sm text-secondary dark:text-slate-300 hover:underline"
      >
        ← Back to Home
      </button>

      {/* Card */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm p-8 space-y-6">
        <h1 className="text-2xl font-bold dark:text-slate-100">Upcoming Appointment</h1>

        {/* Doctor */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
            D
          </div>

          <div>
            <h3 className="font-semibold dark:text-slate-100">Dr. Sarah Johnson</h3>
            <p className="text-sm text-accent dark:text-slate-400">Cardiologist</p>
          </div>
        </div>

        {/* Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Info icon={Calendar} label="Date" value="April 18, 2024" />
          <Info icon={Clock} label="Time" value="09:30 AM" />
          <Info icon={MapPin} label="Location" value="City Hospital" />
        </div>

        {/* Actions */}
        <div className="flex gap-4 pt-4">
          <button className="flex-1 bg-primary text-white py-3 rounded-xl hover:opacity-90 transition">
            Reschedule
          </button>
          <button className="flex-1 border border-slate-300 dark:border-slate-600 py-3 rounded-xl dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-700 transition">
            Cancel Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

function Info({ icon: Icon, label, value }: any) {
  return (
    <div className="bg-primary-50 dark:bg-slate-700 p-4 rounded-xl space-y-1">
      <Icon className="w-5 h-5 text-primary" />
      <p className="text-xs text-accent dark:text-slate-400">{label}</p>
      <p className="font-medium dark:text-slate-100">{value}</p>
    </div>
  );
}
