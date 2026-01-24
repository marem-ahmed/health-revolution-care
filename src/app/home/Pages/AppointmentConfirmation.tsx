import { useNavigate } from "react-router-dom";

export default function AppointmentConfirmation() {
  const navigate = useNavigate();

  return (
    <div className="max-w-xl mx-auto p-8 text-center space-y-6">
      <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center text-3xl">
        ✅
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Appointment Confirmed!</h2>

      <p className="text-gray-500">
        Your appointment with <b>Dr. Sarah Johnson</b> has been confirmed. Please proceed to payment
        to complete the booking.
      </p>

      <div className="bg-white rounded-2xl p-6 shadow-sm space-y-3 text-left">
        <p>
          <b>Date:</b> April 18, 2024
        </p>
        <p>
          <b>Time:</b> 09:30 AM
        </p>
        <p>
          <b>Location:</b> City Hospital
        </p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => navigate("/")}
          className="flex-1 border rounded-xl py-3 hover:bg-gray-50 transition"
        >
          Back to Home
        </button>

        <button
          onClick={() => navigate("/home/online-payment")}
          className="flex-1 bg-blue-600 text-white rounded-xl py-3
    hover:bg-blue-700 transition"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}
