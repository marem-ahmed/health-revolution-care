import { useNavigate } from "react-router-dom";

export default function OnlinePayment() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* LEFT SIDE */}
      <div className="space-y-6">
        {/* Doctor Card */}
        <div className="bg-white p-5 rounded-2xl shadow-sm flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gray-200" />
          <div>
            <h4 className="font-semibold">Dr. Jonathan Roman</h4>
            <p className="text-sm text-gray-500">Jan 20, 2026 at 11:00 AM</p>
          </div>
        </div>

        {/* Billing Info */}
        <div className="bg-white p-6 rounded-2xl shadow-sm space-y-3">
          <h4 className="font-semibold">Billing Information</h4>

          <div className="flex justify-between text-sm">
            <span>Appointment Fee</span>
            <span>500 EGP</span>
          </div>

          <div className="flex justify-between text-sm">
            <span>Service Fee</span>
            <span>50 EGP</span>
          </div>

          <hr />

          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>550 EGP</span>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white p-6 rounded-2xl shadow-sm space-y-4">
          <h4 className="font-semibold">Select Payment Method</h4>

          <label className="flex items-center gap-3 p-3 rounded-xl border cursor-pointer hover:bg-gray-50">
            <input type="radio" name="payment" defaultChecked />
            <span className="font-medium">VISA</span>
            <span className="ml-auto text-sm text-gray-500">**** **** **** 1234</span>
          </label>

          <label className="flex items-center gap-3 p-3 rounded-xl border cursor-pointer hover:bg-gray-50">
            <input type="radio" name="payment" />
            <span className="font-medium">Mastercard</span>
            <span className="ml-auto text-sm text-gray-500">**** **** **** 1234</span>
          </label>

          <label className="flex items-center gap-3 p-3 rounded-xl border cursor-pointer hover:bg-gray-50">
            <input type="radio" name="payment" />
            <span className="font-medium">Cash</span>
          </label>
        </div>

        {/* Cancel */}
        <button
          onClick={() => navigate("/home")}
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Cancel booking
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="bg-gray-50 p-8 rounded-2xl space-y-6">
        <h3 className="text-xl font-semibold text-center">Please enter your card info</h3>

        <div className="space-y-4">
          <div>
            <label className="text-sm">Name on card</label>
            <input className="w-full mt-1 px-4 py-2 rounded-xl border" placeholder="Sara Lewis" />
          </div>

          <div>
            <label className="text-sm">Card number</label>
            <input
              className="w-full mt-1 px-4 py-2 rounded-xl border"
              placeholder="0000 0000 0000 0000"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm">Card expiration</label>
              <select className="w-full mt-1 px-4 py-2 rounded-xl border">
                <option>Month</option>
              </select>
            </div>

            <div>
              <label className="text-sm invisible">Year</label>
              <select className="w-full mt-1 px-4 py-2 rounded-xl border">
                <option>Year</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm">Card Security Code</label>
            <input className="w-full mt-1 px-4 py-2 rounded-xl border" placeholder="CVV" />
          </div>
        </div>

        <button
          onClick={() => navigate("/home/payment-success")}
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
