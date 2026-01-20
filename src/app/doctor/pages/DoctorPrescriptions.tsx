export default function DoctorPrescriptions() {
  return (
    <div className="bg-white rounded-2xl shadow p-6 max-w-xl">
      <h2 className="text-xl font-bold text-secondary mb-6">Create Prescription</h2>

      <form className="flex flex-col gap-5">
        {/* Patient Name */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-secondary">Patient Name</label>
          <input
            type="text"
            placeholder="Enter patient name"
            className="w-full px-4 py-3 border rounded-lg outline-none
                       focus:ring-2 focus:ring-primary transition"
          />
        </div>

        {/* Medication */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-secondary">Medication</label>
          <input
            type="text"
            placeholder="e.g. Atorvastatin"
            className="w-full px-4 py-3 border rounded-lg outline-none
                       focus:ring-2 focus:ring-primary transition"
          />
        </div>

        {/* Dosage */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-secondary">Dosage</label>
          <input
            type="text"
            placeholder="e.g. 20mg once daily"
            className="w-full px-4 py-3 border rounded-lg outline-none
                       focus:ring-2 focus:ring-primary transition"
          />
        </div>

        {/* Instructions */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-secondary">Instructions</label>
          <textarea
            placeholder="Additional instructions"
            className="w-full px-4 py-3 border rounded-lg outline-none
                       focus:ring-2 focus:ring-primary transition
                       resize-none min-h-[120px]"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-2 w-full bg-primary text-white py-3 rounded-lg
                     font-medium hover:opacity-90 transition"
        >
          Save Prescription
        </button>
      </form>
    </div>
  );
}
