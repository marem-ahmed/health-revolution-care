import React from "react";
import { Outlet } from "react-router-dom";
export default function AuthLayout() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-100">
      {/* Left: Form */}
      <div className="flex items-center justify-center">
        <div className="w-full h-screen bg-white p-10 rounded-xl shadow">
          <Outlet />
        </div>
      </div>

      {/* Right: Illustration */}
      <div className="hidden md:flex items-center justify-center bg-blue-50">
        <div className=" text-center px-6">
          <img
            src="../../../public/assets/amico.png"
            alt="Health Connect"
            className="mx-auto mb-6"
          />
          <h2 className="text-4xl font-bold mb-4 text-primary">
            Health connect
          </h2>
          <p className="text-accent font-medium text-xl mb-4 px-32">
            A smart healthcare platform that connects patients with trusted
            doctors, enabling appointment booking, secure medical records, and
            seamless online consultations.
          </p>
        </div>
      </div>
    </div>
  );
}
