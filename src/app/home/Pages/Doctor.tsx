import { useNavigate } from "react-router-dom";
import DoctorCard from "../components/DoctorCard";
import FiltersBar from "../components/FiltersBar";

export default function Doctors() {
  const navigate = useNavigate();

  return (
    <div
      className="
        max-w-7xl mx-auto p-8 space-y-6
        text-secondary dark:text-slate-100
      "
    >
      {/* Navigation / Breadcrumb */}
      <div className="flex items-center gap-3 text-sm text-accent dark:text-slate-400">
        <button onClick={() => navigate( "/home")} className="hover:underline">
          ← Back
        </button>
        <span>/</span>
        <span className="font-medium">Doctors</span>
      </div>

      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold">Doctors</h1>
        <p className="text-accent dark:text-slate-400 mt-1">
          Find and book the best doctors for you
        </p>
      </div>

      {/* Filters */}
      <section className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm">
        <FiltersBar />
      </section>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
      </div>
    </div>
  );
}
