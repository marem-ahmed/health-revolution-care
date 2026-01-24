export default function DoctorFilters() {
  return (
    <div className="flex flex-wrap gap-4">
      <select className="px-4 py-2 rounded-xl border">
        <option>All Specialties</option>
        <option>Cardiology</option>
        <option>Dermatology</option>
        <option>Neurology</option>
      </select>

      <select className="px-4 py-2 rounded-xl border">
        <option>All Ratings</option>
        <option>4★ & above</option>
        <option>3★ & above</option>
      </select>

      <select className="px-4 py-2 rounded-xl border">
        <option>Availability</option>
        <option>Available Today</option>
      </select>
    </div>
  );
}
