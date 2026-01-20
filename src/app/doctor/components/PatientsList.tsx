const patients = [
  { name: "David Lee", age: 38, gender: "Male" },
  { name: "Sarah Lewis", age: 45, gender: "Female" },
  { name: "Michael Tan", age: 50, gender: "Male" },
  { name: "Emma Brown", age: 29, gender: "Female" },
];

export default function PatientsList() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex justify-between mb-4">
        <h3 className="font-bold text-secondary">Patients</h3>
        <button className="text-primary text-sm">View All</button>
      </div>

      <div className="space-y-3">
        {patients.map((p) => (
          <div key={p.name} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
            <div>
              <p className="font-medium">{p.name}</p>
              <p className="text-xs text-gray-500">
                {p.gender}, Age {p.age}
              </p>
            </div>
            <span className="text-primary">›</span>
          </div>
        ))}
      </div>
    </div>
  );
}
