import { NavLink } from "react-router-dom";

const links = [
  { label: "Dashboard", to: "/doctor" },
  { label: "Appointments", to: "/doctor/appointments" },
  { label: "Patients", to: "/doctor/patients" },
  { label: "Messages", to: "/doctor/messages" },
  { label: "Prescriptions", to: "/doctor/prescriptions" },
];

export default function DoctorSidebar() {
  return (
    <aside
      className="
        bg-white dark:bg-slate-800
        rounded-xl shadow-sm
        p-4 space-y-2
        transition-colors
      "
    >
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end
          className={({ isActive }) =>
            `
              block px-4 py-3 rounded-lg transition
              ${
                isActive
                  ? "bg-primary-50 dark:bg-slate-700 text-primary dark:text-blue-400 font-medium"
                  : "text-secondary dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-700"
              }
            `
          }
        >
          {link.label}
        </NavLink>
      ))}
    </aside>
  );
}
