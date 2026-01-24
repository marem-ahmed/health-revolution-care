import DoctorCard from "../components/DoctorCard";
import DoctorFilters from "../components/DoctorFilters";

export default function Doctors() {
  return (
    <div className="max-w-7xl mx-auto p-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-secondary">Doctors</h1>
        <p className="text-accent mt-1">Find and book the best doctors for you</p>
      </div>

      {/* Search */}
      <input
        placeholder="Search doctors by name or specialty..."
        className="w-full px-4 py-3 rounded-xl border"
      />

      {/* Filters */}
      <DoctorFilters />

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
