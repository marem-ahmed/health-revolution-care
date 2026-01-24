import HospitalCard from "../components/HospitalCard";

export default function FindHospitals() {
  return (
    <div className="max-w-6xl mx-auto p-8 space-y-6">
      {/* Header */}
      <h1 className="text-2xl font-semibold text-gray-800">Find Nearby Hospitals</h1>

      {/* Search */}
      <div className="flex items-center gap-4">
        <input
          placeholder="Search for hospitals..."
          className="flex-1 px-4 py-3 rounded-xl border"
        />
        <button className="text-blue-600 font-medium">Filters →</button>
      </div>

      {/* Map Placeholder */}
      <div className="h-48 rounded-2xl bg-blue-50 flex items-center justify-center">
        🗺️ Map View
      </div>

      {/* Hospitals List */}
      <div className="bg-white rounded-2xl shadow-sm divide-y">
        <HospitalCard
          name="City Hospital"
          distance="2.5 km away"
          price="$100 / Consult"
          reviews="241 Reviews"
        />

        <HospitalCard
          name="Green Valley Hospital"
          distance="3.0 km away"
          price="$120 / Consult"
          reviews="195 Reviews"
        />

        <HospitalCard
          name="Lakeside Hospital"
          distance="3.5 km away"
          price="$110 / Consult"
          reviews="134 Reviews"
        />
      </div>

      {/* CTA */}
      <button className="w-full bg-blue-600 text-white py-4 rounded-xl text-lg hover:bg-blue-700 transition">
        View More Hospitals
      </button>
    </div>
  );
}
