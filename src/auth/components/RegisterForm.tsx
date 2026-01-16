import React, { useState } from "react";

export default function RegisterForm() {
  const [role, setRole] = useState<"user" | "doctor">("user");

  return (
    <form className="space-y-3 ">
      <div className="h-[400px] overflow-y-auto no-scrollbar">
        {/* FirstName */}
        <div>
          <label className="text-secondary font-semibold">First name</label>
          <input
            type="text"
            placeholder="Enter your First name"
            className="w-full mt-2 px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        {/*LastName */}
        <div>
          <label className="text-secondary font-semibold">Last name</label>
          <input
            type="text"
            placeholder="Enter your Last name"
            className="w-full mt-2 px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="text-secondary font-semibold">Phone number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full mt-2 px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Age */}
        <div>
          <label className="text-secondary font-semibold">Age</label>
          <input
            type="number"
            placeholder="Enter your age"
            className="w-full mt-2 px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        {/* Gender */}
        <div>
          <label className="text-secondary font-semibold">Register as</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as "user" | "doctor")}
            className="w-full mt-2 px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="user">Male</option>
            <option value="doctor">Female</option>
          </select>
        </div>

        {/* Role */}
        <div>
          <label className="text-secondary font-semibold">Register as</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as "user" | "doctor")}
            className="w-full mt-2 px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="user">User</option>
            <option value="doctor">Doctor</option>
          </select>
        </div>

        {/* Doctor extra fields */}
        {role === "doctor" && (
          <>
            <div>
              <label className="text-secondary font-semibold">
                Specialization
              </label>
              <input
                type="text"
                placeholder="e.g. Cardiologist"
                className="w-full mt-2 px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="text-secondary font-semibold">
                Medical license number
              </label>
              <input
                type="text"
                placeholder="Enter your license number"
                className="w-full mt-2 px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="text-secondary font-semibold ">
                Years of experience
              </label>
              <input
                type="number"
                placeholder="e.g. 5"
                className="w-full mt-2 px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-600 transition"
      >
        Create account
      </button>
    </form>
  );
}
