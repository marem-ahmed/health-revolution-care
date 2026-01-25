const patients = [
  { id: 1, name: "maraim Ahmed", age: 45, condition: "Hypertension" },
  { id: 2, name: "Mahmoud Mohamed", age: 38, condition: "Diabetes" },
  { id: 3, name: "Clara Ihab", age: 29, condition: "Asthma" },
  { id: 4, name: "laila Ihab", age: 29, condition: "Asthma" },
  { id: 5, name: "yahia ahmed", age: 12, condition: "Asthma" },
  { id: 6, name: "karim ahmed", age: 12, condition: "Asthma" },
  { id: 7, name: "maria ahmed", age: 12, condition: "Asthma" },
  { id: 8, name: "malak ahmed", age: 12, condition: "Asthma" },
  { id: 9, name: "yasin mohamed", age: 12, condition: "Asthma" },
  { id: 10, name: "hamza ahmed", age: 12, condition: "Asthma" },
  { id: 11, name: "menna ahmed", age: 12, condition: "Asthma" },
];

export default function DoctorPatients() {
  return (
    <div
      className="
        bg-white dark:bg-slate-800
        rounded-2xl shadow-sm
        p-6 space-y-6
        transition-colors
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-secondary dark:text-slate-100">Patients</h2>

        <input
          type="text"
          placeholder="Search patients..."
          className="
            border border-gray-300 dark:border-slate-700
            bg-white dark:bg-slate-900
            text-secondary dark:text-slate-100
            placeholder:text-gray-400 dark:placeholder:text-slate-400
            rounded-lg px-4 py-2 text-sm
            outline-none
            focus:ring-2 focus:ring-primary/40
            transition
          "
        />
      </div>

      {/* Patients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {patients.map((p) => (
          <div
            key={p.id}
            className="
              border border-gray-200 dark:border-slate-700
              rounded-xl p-4
              flex items-center justify-between
              bg-white dark:bg-slate-800
              hover:shadow-md
              hover:bg-gray-50 dark:hover:bg-slate-700/50
              transition
              group
            "
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div
                className="
                  w-12 h-12 rounded-full
                  bg-primary text-white
                  flex items-center justify-center
                  font-bold
                "
              >
                {p.name.charAt(0).toUpperCase()}
              </div>

              {/* Info */}
              <div>
                <p className="font-semibold text-secondary dark:text-slate-100">{p.name}</p>
                <p className="text-sm text-gray-500 dark:text-slate-400">
                  Age {p.age} • {p.condition}
                </p>
              </div>
            </div>

            {/* Action */}
            <button
              className="
                text-primary dark:text-blue-400
                text-sm font-medium
                opacity-0 group-hover:opacity-100
                transition
              "
            >
              View Records →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
