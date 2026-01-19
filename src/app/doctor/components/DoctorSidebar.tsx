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
    <aside className="bg-white rounded-xl shadow p-4 space-y-2">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end
          className={({ isActive }) =>
            `block px-4 py-3 rounded-lg transition ${
              isActive
                ? "bg-primary-50 text-primary font-medium"
                : "text-secondary hover:bg-gray-50"
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </aside>
  );
}
