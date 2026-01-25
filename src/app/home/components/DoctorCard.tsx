export default function DoctorCard() {
  return (
    <div
      className="
        bg-white dark:bg-slate-800
        p-5 rounded-2xl shadow-sm
        hover:shadow-md transition
        text-center
      "
    >
      <img
        src="/assets/avatar5.png"
        className="w-20 h-20 rounded-full mx-auto object-cover"
        alt="Doctor Avatar"
      />

      <h3 className="mt-3 font-semibold text-secondary dark:text-slate-100">Dr. Sarah Johnson</h3>

      <p className="text-sm text-accent dark:text-slate-400">Cardiologist</p>

      <p className="text-yellow-500 text-sm mt-1">★★★★★ (4.9)</p>

      <p className="text-sm text-accent dark:text-slate-400 mt-1">8 years experience</p>

      <button
        className="
          mt-4 w-full
          bg-primary text-white
          py-2 rounded-xl
          hover:bg-primary-dark transition
        "
      >
        Book Appointment
      </button>
    </div>
  );
}
