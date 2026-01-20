import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const actions = [
  {
    label: "Book Appointment",
    icon: "➕",
    path: "/home/book-appointment",
  },
  {
    label: "Doctors",
    icon: "🩺",
    path: "/home/doctors",
  },
  {
    label: "My Appointments",
    icon: "⏰",
    path: "/home/my-appointments",
  },
  {
    label: "Medical Records",
    icon: "🧾",
    path: "/profile/medical-records",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
} as const;

export default function QuickActions() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {actions.map((action) => (
        <motion.div
          key={action.label}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => action.path && navigate(action.path)}
          className={`
            bg-white dark:bg-slate-800
            rounded-2xl shadow-sm
            p-6 text-center cursor-pointer
            transition
            hover:shadow-md
            hover:bg-blue-50 dark:hover:bg-slate-700
            focus:outline-none
            active:ring-2 active:ring-primary
          `}
        >
          <div className="text-3xl mb-3">{action.icon}</div>

          <p className="font-medium text-secondary dark:text-slate-100">{action.label}</p>

          <p className="text-xs text-accent dark:text-slate-400 mt-1">Quick access</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
