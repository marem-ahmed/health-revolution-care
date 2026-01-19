export default function DoctorHeader() {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
          D
        </div>

        <div>
          <h2 className="text-xl font-bold text-secondary">Dr. Malik Ahmed</h2>
          <p className="text-sm text-gray-500">Cardiologist</p>
          <p className="mt-2 text-secondary">Welcome back, Dr. Malik!</p>
        </div>
      </div>

      <button className="bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
        Edit Profile →
      </button>
    </div>
  );
}
