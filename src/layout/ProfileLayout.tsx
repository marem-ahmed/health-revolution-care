import { Outlet, useNavigate } from "react-router-dom";
import SettingsSidebar from "../app/profile/Components/SettingSidebar";
import ProfileSummaryCard from "../components/profileSummaryCard";
import { ArrowLeft } from "lucide-react";

export default function ProfileLayout() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto px-6 py-8 space-y-6">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="
          flex items-center gap-2
          text-sm font-medium
          text-secondary dark:text-slate-300
          hover:underline
        "
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </button>

      {/* Profile Summary */}
      <ProfileSummaryCard name="Mariam Ahmed" email="mariam@example.com" avatarText="M" />

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
