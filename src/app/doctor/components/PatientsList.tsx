const patients = [
  { name: "David Lee", age: 38, gender: "Male" },
  { name: "Sarah Lewis", age: 45, gender: "Female" },
  { name: "Michael Tan", age: 50, gender: "Male" },
  { name: "Emma Brown", age: 29, gender: "Female" },
];

export default function PatientsList() {
  return (
    <div
      className="
        bg-white dark:bg-slate-800
        rounded-xl shadow-sm
        p-6
        transition-colors
      "
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-secondary dark:text-slate-100">Patients</h3>
        <button className="text-primary dark:text-blue-400 text-sm hover:underline">
          View All
        </button>
      </div>

      {/* List */}
      <div className="space-y-3">
        {patients.map((p) => (
          <div
            key={p.name}
            className="
              flex items-center justify-between
              bg-gray-50 dark:bg-slate-700
              rounded-lg p-3
              hover:bg-gray-100 dark:hover:bg-slate-600
              transition
              cursor-pointer
            "
          >
            <div>
              <p className="font-medium text-secondary dark:text-slate-100">{p.name}</p>
              <p className="text-xs text-gray-500 dark:text-slate-400">
                {p.gender}, Age {p.age}
              </p>
            </div>

            <span className="text-primary dark:text-blue-400 text-lg">›</span>
          </div>
        ))}
      </div>
    </div>
  );
}
