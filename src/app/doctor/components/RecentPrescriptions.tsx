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
    <div
      className="
        bg-white dark:bg-slate-800
        rounded-xl shadow-sm
        p-6
        transition-colors
      "
    >
      <h3 className="font-bold text-secondary dark:text-slate-100 mb-4">Recent Prescriptions</h3>

      <div className="space-y-3">
        {prescriptions.map((p) => (
          <div
            key={p.drug}
            className="
              bg-gray-50 dark:bg-slate-700
              rounded-lg p-3
              hover:bg-gray-100 dark:hover:bg-slate-600
              transition
            "
          >
            <p className="font-medium text-secondary dark:text-slate-100">{p.drug}</p>
            <p className="text-sm text-gray-500 dark:text-slate-400">
              {p.patient} • {p.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
