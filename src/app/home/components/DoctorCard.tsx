export default function DoctorCard() {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition text-center">
      <img src="/assets/avatar5.png" className="w-20 h-20 rounded-full mx-auto object-cover" />

      <h3 className="mt-3 font-semibold">Dr. Sarah Johnson</h3>

      <p className="text-sm text-accent">Cardiologist</p>

      <p className="text-yellow-500 text-sm mt-1">★★★★★ (4.9)</p>

      <p className="text-sm text-accent mt-1">8 years experience</p>

      <button className="mt-4 w-full bg-primary text-white py-2 rounded-xl hover:bg-primary-dark transition">
        Book Appointment
      </button>
    </div>
  );
}
