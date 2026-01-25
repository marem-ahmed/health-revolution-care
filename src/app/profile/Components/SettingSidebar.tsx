import { NavLink } from "react-router-dom";
import { FiUser, FiEdit2, FiLock, FiBell, FiShield, FiLogOut } from "react-icons/fi";
import { MdMedicalInformation } from "react-icons/md";
import { LiaBookMedicalSolid } from "react-icons/lia";

const links = [
  { label: "Personal Info", to: "/profile", icon: FiUser },
  { label: "Medical Info", to: "/profile/medical", icon: MdMedicalInformation },
  {
    label: "Medical Record",
    to: "/profile/medical-records",
    icon: LiaBookMedicalSolid,
  },
  { label: "Change Password", to: "/profile/password", icon: FiLock },
  { label: "Notifications", to: "/profile/notifications", icon: FiBell },
  { label: "Edit Profile", to: "/profile/edit", icon: FiEdit2 },
  { label: "Privacy & Security", to: "/profile/security", icon: FiShield },
];

export default function SettingsSidebar() {
  return (
    <aside className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-4 space-y-2">
      {links.map((link) => {
        const Icon = link.icon;

        return (
          <NavLink
            key={link.to}
            to={link.to}
            end
            className={({ isActive }) =>
              `
              flex items-center gap-3 px-4 py-3 rounded-lg transition
              ${
                isActive
                  ? "bg-primary-50 dark:bg-slate-700 text-primary dark:text-blue-400 font-medium"
                  : "text-secondary dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-700"
              }
              `
            }
          >
            <Icon className="text-lg shrink-0" />
            <span>{link.label}</span>
          </NavLink>
        );
      })}

      {/* Logout */}
      <button
        className="
          flex items-center gap-3 w-full
          px-4 py-3 rounded-lg
          text-red-500 dark:text-red-400
          hover:bg-red-50 dark:hover:bg-red-900/20
          transition
        "
      >
        <FiLogOut className="text-lg shrink-0" />
        <span>Logout</span>
      </button>
    </aside>
  );
}
