const patients = [
  {
    id: 1,
    name: "maraim Ahmed",
    age: 45,
    condition: "Hypertension",
  },
  {
    id: 2,
    name: "Mahmoud Mohamed",
    age: 38,
    condition: "Diabetes",
  },
  {
    id: 3,
    name: "Clara Ihab",
    age: 29,
    condition: "Asthma",
  },
  {
    id: 4,
    name: "laila Ihab",
    age: 29,
    condition: "Asthma",
  },
  {
    id: 5,
    name: "yahia ahmed",
    age: 12,
    condition: "Asthma",
  },
  {
    id: 6,
    name: "karim ahmed",
    age: 12,
    condition: "Asthma",
  },
  {
    id: 7,
    name: "maria ahmed",
    age: 12,
    condition: "Asthma",
  },
  {
    id: 8,
    name: "malak ahmed",
    age: 12,
    condition: "Asthma",
  },
  {
    id: 9,
    name: "yasin mohamed",
    age: 12,
    condition: "Asthma",
  },
  {
    id: 10,
    name: "hamza ahmed",
    age: 12,
    condition: "Asthma",
  },
  {
    id: 11,
    name: "menna ahmed",
    age: 12,
    condition: "Asthma",
  },
];

export default function DoctorPatients() {
  return (
    <div className="bg-white rounded-2xl shadow p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-secondary">Patients</h2>

        <input
          type="text"
          placeholder="Search patients..."
          className="border rounded-lg px-4 py-2 text-sm outline-none
                       focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Patients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {patients.map((p) => (
          <div
            key={p.id}
            className="border rounded-xl p-4 flex items-center justify-between
                         hover:shadow-md transition group"
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div
                className="w-12 h-12 rounded-full bg-primary text-white
                                flex items-center justify-center font-bold"
              >
                {p.name.charAt(0)}
              </div>

              {/* Info */}
              <div>
                <p className="font-semibold text-secondary">{p.name}</p>
                <p className="text-sm text-gray-500">
                  Age {p.age} • {p.condition}
                </p>
              </div>
            </div>

            {/* Action */}
            <button
              className="text-primary text-sm font-medium opacity-0
                           group-hover:opacity-100 transition"
            >
              View Records →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
