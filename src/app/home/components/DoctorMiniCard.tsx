export default function DoctorMiniCard() {
  return (
    <div
      className="
        bg-white dark:bg-slate-800
        p-4 rounded-xl shadow-sm
        text-center cursor-pointer
        transition
        hover:shadow-md
        hover:bg-primary-50 dark:hover:bg-slate-700
      "
    >
      <img
        src="/assets/avatar5.png"
        className="w-16 h-16 rounded-full mx-auto object-cover"
        alt="Doctor Avatar"
      />

      <h4 className="mt-2 font-medium text-secondary dark:text-slate-100">Dr. Sarah Johnson</h4>

      <p className="text-xs text-accent dark:text-slate-400">Cardiologist</p>

      <p className="text-xs text-yellow-500 mt-1">★★★★★</p>
    </div>
  );
}
