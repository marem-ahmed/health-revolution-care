export default function ProfileCard() {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold">
          M
        </div>

        <div>
          <h3 className="font-semibold text-secondary">Mariam Ahmed</h3>
          <p className="text-sm text-accent">mariam@example.com</p>
        </div>
      </div>

      <button className="bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
        Edit Profile →
      </button>
    </div>
  );
}
