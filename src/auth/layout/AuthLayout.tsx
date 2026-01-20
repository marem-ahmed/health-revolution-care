import React from "react";
import { Outlet } from "react-router-dom";
export default function AuthLayout() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2  bg-blue-50">
      {/* Left: Form */}
      <div className="flex items-center justify-center">
        <div className="w-full h-screen bg-white px-10 rounded-xl shadow ">
          <Outlet />
        </div>
      </div>

      {/* Right: Illustration */}
      <div className="hidden md:flex items-center justify-center bg-blue-50">
        <div className=" text-center ">
          <img src="/assets/amico.png" alt="Health Connect" className="mx-auto" />
          <h2 className="text-3xl font-bold mb-3 text-primary">Health connect</h2>
          <p className="text-accent px-5 font-medium mb-4">
            A smart healthcare platform that connects patients with trusted doctors, enabling
            appointment booking, secure medical records, and seamless online consultations.
          </p>
        </div>
      </div>
    </div>
  );
}
