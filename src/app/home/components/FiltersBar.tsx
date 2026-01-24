export default function FiltersBar() {
  return (
    <div className="flex flex-wrap gap-4">
      <select className="px-4 py-2 rounded-xl border">
        <option>All Specialists</option>
      </select>

      <select className="px-4 py-2 rounded-xl border">
        <option>All Ratings</option>
      </select>

      <select className="px-4 py-2 rounded-xl border">
        <option>Available Today</option>
      </select>

      <input placeholder="Search for doctors..." className="flex-1 px-4 py-2 rounded-xl border" />
    </div>
  );
}
