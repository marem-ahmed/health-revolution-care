import SearchBar from "../components/SearchBar";
import QuickActions from "../components/QuickActions";
import { motion } from "framer-motion";
import EmergencyCard from "../components/EmergencyCard";
import NearbyHospitals from "../components/NearbyHospitals";

export default function PatientHome() {
  return (
    <div className="min-h-screen bg-primary-50">
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Greeting */}
        <div>
          <h1 className="text-3xl font-bold text-secondary flex items-center gap-2">
            Hello, Mariam
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 20, -10, 20, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
              className="inline-block origin-bottom-left"
            >
              👋
            </motion.span>
          </h1>
          <p className="text-accent mt-2">How can we assist you today?</p>
        </div>

        <SearchBar />

        <QuickActions />

        <NearbyHospitals />

        <EmergencyCard />
      </main>
    </div>
  );
}
