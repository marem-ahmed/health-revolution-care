export default function FiltersBar() {
  return (
    <div className="flex flex-wrap gap-4">
      <select
        className="
          px-4 py-2 rounded-xl border transition
          bg-white dark:bg-slate-800
          border-slate-200 dark:border-slate-700
          text-secondary dark:text-slate-100
          focus:outline-none focus:ring-2 focus:ring-primary/40
        "
      >
        <option>All Specialists</option>
      </select>

      <select
        className="
          px-4 py-2 rounded-xl border transition
          bg-white dark:bg-slate-800
          border-slate-200 dark:border-slate-700
          text-secondary dark:text-slate-100
          focus:outline-none focus:ring-2 focus:ring-primary/40
        "
      >
        <option>All Ratings</option>
      </select>

      <select
        className="
          px-4 py-2 rounded-xl border transition
          bg-white dark:bg-slate-800
          border-slate-200 dark:border-slate-700
          text-secondary dark:text-slate-100
          focus:outline-none focus:ring-2 focus:ring-primary/40
        "
      >
        <option>Available Today</option>
      </select>

      <input
        placeholder="Search for doctors..."
        className="
          flex-1 px-4 py-2 rounded-xl border transition
          bg-white dark:bg-slate-800
          border-slate-200 dark:border-slate-700
          text-secondary dark:text-slate-100
          placeholder:text-accent dark:placeholder:text-slate-400
          focus:outline-none focus:ring-2 focus:ring-primary/40
        "
      />
    </div>
  );
}
