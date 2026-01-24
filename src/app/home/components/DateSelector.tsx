export default function DateSelector() {
  const days = [17, 18, 19, 20, 21];

  return (
    <div>
      <h3 className="font-semibold text-lg mb-3">April 18</h3>

      <div className="flex gap-3">
        {days.map((day) => (
          <div
            key={day}
            className={`w-16 h-16 flex flex-col items-center justify-center rounded-xl border cursor-pointer
                ${day === 18 ? "bg-green-500 text-white" : ""}`}
          >
            <span className="text-lg font-semibold">{day}</span>
            <span className="text-xs">Available</span>
          </div>
        ))}
      </div>
    </div>
  );
}
