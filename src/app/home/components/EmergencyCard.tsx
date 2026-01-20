export default function EmergencyCard() {
  return (
    <div className="bg-primary text-white rounded-xl p-6 flex items-center justify-between">
      <div>
        <h3 className="text-xl font-semibold">Emergency Call</h3>
        <p className="text-primary-50">Immediate medical assistance</p>
      </div>

      <button className="bg-white text-primary font-bold px-6 py-3 rounded-lg">911</button>
    </div>
  );
}
