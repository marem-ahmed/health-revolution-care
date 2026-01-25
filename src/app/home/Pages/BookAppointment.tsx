import FiltersBar from "../components/FiltersBar";
import DateSelector from "../components/DateSelector";
import TimeSlots from "../components/TimeSlots";
import { useNavigate } from "react-router-dom";
import DoctorMiniCard from "../components/DoctorMiniCard";

export default function BookAppointment() {
  const navigate = useNavigate();

  return (
    <div
      className="max-w-6xl mx-auto p-8 space-y-8 
      text-secondary dark:text-slate-100"
    >
      {/* Navigation / Breadcrumb */}
      <div className="flex items-center gap-3 text-sm text-accent dark:text-slate-400">
        <button onClick={() => navigate(-1)} className="hover:underline">
          ← Back
        </button>
        <span>/</span>
        <span className="font-medium">Book Appointment</span>
      </div>

      {/* Header */}
      <h1 className="text-2xl font-semibold">Book Appointment</h1>

      {/* Filters */}
      <section className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm">
        <FiltersBar />
      </section>

      {/* Doctors */}
      <section className="space-y-4">
        <h2 className="text-lg font-medium">Choose a Doctor</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DoctorMiniCard />
          <DoctorMiniCard />
          <DoctorMiniCard />
        </div>
      </section>

      {/* Date & Time */}
      <section className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm space-y-6">
        <h2 className="text-lg font-medium">Select Date & Time</h2>

        <DateSelector />
        <TimeSlots />
      </section>

      {/* Confirm */}
      <button
        onClick={() => navigate("/home/appointment-confirmation")}
        className="
          w-full bg-primary text-white 
          py-4 rounded-xl text-lg 
          hover:bg-primary-dark transition
        "
      >
        Confirm Appointment
      </button>
    </div>
  );
}
