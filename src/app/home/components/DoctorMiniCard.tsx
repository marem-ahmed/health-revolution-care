export default function DoctorMiniCard() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm text-center hover:shadow-md transition cursor-pointer">
      <img src="/assets/avatar5.png" className="w-16 h-16 rounded-full mx-auto object-cover" />
      <h4 className="mt-2 font-medium">Dr. Sarah Johnson</h4>
      <p className="text-xs text-accent">Cardiologist</p>
      <p className="text-xs text-yellow-500">★★★★★</p>
    </div>
  );
}
