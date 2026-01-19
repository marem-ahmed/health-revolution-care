import { Outlet } from "react-router-dom";
import ProfileCard from "../app/profile/Components/ProfileCard";
import SettingsSidebar from "../app/profile/Components/SettingSidebar";

export default function ProfileLayout() {
  return (
    <div className="mx-auto px-6 py-8 space-y-6">
      <ProfileCard />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <SettingsSidebar />

        {/* Profile content */}
        <div className="lg:col-span-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
