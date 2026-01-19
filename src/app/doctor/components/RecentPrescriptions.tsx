const prescriptions = [
  {
    patient: "David Lee",
    drug: "Atorvastatin 20mg",
    date: "Apr 22, 2024",
  },
  {
    patient: "Sarah Lewis",
    drug: "Lisinopril 10mg",
    date: "Apr 20, 2024",
  },
];

export default function RecentPrescriptions() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="font-bold text-secondary mb-4">Recent Prescriptions</h3>

      <div className="space-y-3">
        {prescriptions.map((p) => (
          <div key={p.drug} className="bg-gray-50 rounded-lg p-3">
            <p className="font-medium">{p.drug}</p>
            <p className="text-sm text-gray-500">
              {p.patient} • {p.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
