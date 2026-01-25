import React from "react";
import { Outlet } from "react-router-dom";
import DarkModeToggle from "../../components/DarkmodeToggle";

export default function AuthLayout() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-blue-50 dark:bg-slate-900 transition-colors">
      {/* Left: Form */}
      <div className="relative flex items-center justify-center">
        {/* Dark mode toggle */}
        <div className="absolute top-6 right-6">
          <DarkModeToggle />
        </div>

        <div
          className="
            w-full h-screen
            bg-white dark:bg-slate-900
            px-10
            shadow
            transition-colors
          "
        >
          <Outlet />
        </div>
      </div>

      {/* Right: Illustration */}
      <div className="hidden md:flex items-center justify-center bg-blue-50 dark:bg-slate-800 transition-colors">
        <div className="text-center px-6">
          <img src="/assets/amico.png" alt="Health Connect" className="mx-auto mb-6" />

          <h2 className="text-3xl font-bold mb-3 text-primary">Health Connect</h2>

          <p className="text-accent dark:text-slate-400 font-medium">
            A smart healthcare platform that connects patients with trusted doctors, enabling
            appointment booking, secure medical records, and seamless online consultations.
          </p>
        </div>
      </div>
    </div>
  );
}
