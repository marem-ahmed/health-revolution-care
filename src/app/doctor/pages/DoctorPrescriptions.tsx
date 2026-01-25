export default function DoctorPrescriptions() {
  return (
    <div
      className="
        bg-white dark:bg-slate-800
        rounded-2xl shadow-sm
        p-6 max-w-xl
        transition-colors
      "
    >
      <h2 className="text-xl font-bold text-secondary dark:text-slate-100 mb-6">
        Create Prescription
      </h2>

      <form className="flex flex-col gap-5">
        {/* Patient Name */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-secondary dark:text-slate-200">
            Patient Name
          </label>
          <input
            type="text"
            placeholder="Enter patient name"
            className="
              w-full px-4 py-3 rounded-lg
              border border-gray-300 dark:border-slate-700
              bg-white dark:bg-slate-900
              text-secondary dark:text-slate-100
              placeholder:text-gray-400 dark:placeholder:text-slate-400
              outline-none
              focus:ring-2 focus:ring-primary/40
              transition
            "
          />
        </div>

        {/* Medication */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-secondary dark:text-slate-200">
            Medication
          </label>
          <input
            type="text"
            placeholder="e.g. Atorvastatin"
            className="
              w-full px-4 py-3 rounded-lg
              border border-gray-300 dark:border-slate-700
              bg-white dark:bg-slate-900
              text-secondary dark:text-slate-100
              placeholder:text-gray-400 dark:placeholder:text-slate-400
              outline-none
              focus:ring-2 focus:ring-primary/40
              transition
            "
          />
        </div>

        {/* Dosage */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-secondary dark:text-slate-200">Dosage</label>
          <input
            type="text"
            placeholder="e.g. 20mg once daily"
            className="
              w-full px-4 py-3 rounded-lg
              border border-gray-300 dark:border-slate-700
              bg-white dark:bg-slate-900
              text-secondary dark:text-slate-100
              placeholder:text-gray-400 dark:placeholder:text-slate-400
              outline-none
              focus:ring-2 focus:ring-primary/40
              transition
            "
          />
        </div>

        {/* Instructions */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-secondary dark:text-slate-200">
            Instructions
          </label>
          <textarea
            placeholder="Additional instructions"
            className="
              w-full px-4 py-3 rounded-lg
              border border-gray-300 dark:border-slate-700
              bg-white dark:bg-slate-900
              text-secondary dark:text-slate-100
              placeholder:text-gray-400 dark:placeholder:text-slate-400
              outline-none
              focus:ring-2 focus:ring-primary/40
              transition
              resize-none min-h-[120px]
            "
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="
            mt-2 w-full
            bg-primary text-white
            py-3 rounded-lg
            font-medium
            hover:opacity-90
            active:scale-[0.98]
            transition
          "
        >
          Save Prescription
        </button>
      </form>
    </div>
  );
}
