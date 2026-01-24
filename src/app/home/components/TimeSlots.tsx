export default function TimeSlots() {
  const slots = ["09:00 AM", "09:30 AM", "12:00 PM", "02:30 PM", "03:30 PM"];

  return (
    <div>
      <h4 className="font-medium mb-2">Available Time</h4>
      <div className="flex flex-wrap gap-3">
        {slots.map((time) => (
          <button key={time} className="px-5 py-2 rounded-xl border hover:bg-blue-50">
            {time}
          </button>
        ))}
      </div>
    </div>
  );
}
