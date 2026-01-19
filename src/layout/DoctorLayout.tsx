import { Outlet } from "react-router-dom";
import DoctorSidebar from "../app/doctor/components/DoctorSidebar";

export default function DoctorLayout() {
  return (
    <div className="w-full mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Sidebar */}
      <DoctorSidebar />

      {/* Content */}
      <div className="lg:col-span-3 space-y-6">
        <Outlet />
      </div>
    </div>
  );
}
