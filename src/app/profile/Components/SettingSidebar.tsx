import { NavLink } from "react-router-dom";
import { FiUser, FiLock, FiBell, FiShield, FiLogOut } from "react-icons/fi";
import { MdMedicalInformation } from "react-icons/md";
import { LiaBookMedicalSolid } from "react-icons/lia";

const links = [
  { label: "Personal Info", to: "/profile", icon: FiUser },
  { label: "Medical Info", to: "/profile/medical", icon: MdMedicalInformation },
  {
    label: "Medical Record",
    to: "/profile/medicalrecord",
    icon: LiaBookMedicalSolid,
  },
  { label: "Change Password", to: "/profile/password", icon: FiLock },
  { label: "Notifications", to: "/profile/notifications", icon: FiBell },
  { label: "Privacy & Security", to: "/profile/security", icon: FiShield },
];

export default function SettingsSidebar() {
  return (
    <aside className="bg-white rounded-2xl shadow-sm p-4 space-y-2">
      {links.map((link) => {
        const Icon = link.icon;

        return (
          <NavLink
            key={link.to}
            to={link.to}
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                isActive
                  ? "bg-primary-50 text-primary font-medium"
                  : "text-secondary hover:bg-gray-50"
              }`
            }
          >
            <Icon className="text-lg" />
            <span>{link.label}</span>
          </NavLink>
        );
      })}

      <button
        className="
          flex
          items-center
          gap-3
          w-full
          px-4
          py-3
          rounded-lg
          text-red-500
          hover:bg-red-50
          transition
        "
      >
        <FiLogOut className="text-lg" />
        <span>Logout</span>
      </button>
    </aside>
  );
}
