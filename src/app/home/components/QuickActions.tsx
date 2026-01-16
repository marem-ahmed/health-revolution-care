import { motion } from "framer-motion";

const actions = [
  { label: "Book Appointment", icon: "📅" },
  { label: "Symptom Checker", icon: "❤️" },
  { label: "Online Pharmacy", icon: "💊" },
  { label: "Find Hospitals", icon: "🏥" },
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
          className="bg-white rounded-xl shadow p-6 text-center cursor-pointer hover:shadow-md transition"
        >
          <div className="text-3xl mb-3">{action.icon}</div>
          <p className="font-medium text-secondary">{action.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
