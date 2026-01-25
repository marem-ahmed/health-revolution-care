import SearchBar from "../components/SearchBar";
import QuickActions from "../components/QuickActions";
import { motion } from "framer-motion";
import EmergencyCard from "../components/EmergencyCard";
import HospitalsMap from "../components/HospitalMap";
import DoctorMiniCard from "../components/DoctorMiniCard";
import { useNavigate } from "react-router-dom";

import { Hand, Calendar, Pill, HeartPulse, Activity, Bell, Stethoscope } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

export default function PatientHome() {
  const navigate = useNavigate();

  const todayStats = [
    { title: "Today", desc: "No appointments scheduled", icon: Calendar },
    { title: "Medications", desc: "2 active medications", icon: Pill },
    { title: "Health Status", desc: "Stable & Good", icon: HeartPulse },
    { title: "Next Visit", desc: "In 2 days", icon: Bell },
  ];

  const weeklyStats = [
    { label: "Appointments", value: "2", icon: Calendar },
    { label: "Doctors Visited", value: "1", icon: Stethoscope },
    { label: "Prescriptions", value: "3", icon: Pill },
    { label: "Medical Reports", value: "2", icon: Activity },
  ];

  return (
    <div className="min-h-screen bg-primary-50 dark:bg-slate-900 transition-colors">
      <main className="mx-auto px-8 py-10 space-y-16">
        {/* HERO */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-blue-50 to-white dark:from-slate-800 dark:to-slate-900 p-10 rounded-3xl space-y-4"
        >
          <h1 className="text-3xl font-bold text-secondary dark:text-slate-100 flex items-center gap-2">
            Hello, Mariam
            <Hand className="w-6 h-6 text-primary" />
          </h1>

          <p className="text-accent dark:text-slate-400 max-w-xl">
            Welcome back to your health dashboard. Here’s a quick overview of your current health
            activities.
          </p>

          <div className="flex gap-4 pt-2">
            <button
              onClick={() => navigate("/home/view-appointment")}
              className="
    bg-primary text-white
    px-6 py-2 rounded-xl
    hover:bg-primary-dark
    active:scale-95
    transition
  "
            >
              View Appointment
            </button>

            <button
              onClick={() => navigate("/profile/edit")}
              className="border px-6 py-2 rounded-xl flex items-center gap-2
                dark:border-slate-700 dark:text-slate-200
                hover:bg-gray-50 dark:hover:bg-slate-800 transition"
            >
              <Activity className="w-4 h-4" />
              Update Profile
            </button>
          </div>
        </motion.section>

        {/* TODAY STATUS */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {todayStats.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm space-y-2"
            >
              <Icon className="w-5 h-5 text-primary" />
              <p className="text-sm text-accent dark:text-slate-400">{title}</p>
              <p className="font-semibold dark:text-slate-100">{desc}</p>
            </div>
          ))}
        </section>

        {/* SEARCH + ACTIONS */}
        <section className="space-y-6">
          <SearchBar />
          <QuickActions />
        </section>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-12">
            {/* WEEKLY SUMMARY */}
            <section className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm space-y-6">
              <h3 className="text-xl font-semibold dark:text-slate-100">Weekly Health Summary</h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {weeklyStats.map(({ label, value, icon: Icon }) => (
                  <div
                    key={label}
                    className="bg-primary-50 dark:bg-slate-700 p-5 rounded-2xl space-y-2"
                  >
                    <Icon className="w-6 h-6 mx-auto text-primary" />
                    <p className="text-sm text-accent dark:text-slate-400">{label}</p>
                    <p className="text-2xl font-bold dark:text-slate-100">{value}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* HOSPITALS */}
            <section className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold dark:text-slate-100">Hospitals Near You</h3>
                <button className="text-primary hover:underline">Explore →</button>
              </div>

              <div className="h-64 rounded-3xl overflow-hidden bg-primary-50 dark:bg-slate-800">
                <HospitalsMap />
              </div>

              <p className="text-sm text-accent dark:text-slate-400 max-w-xl">
                Showing nearby hospitals based on your current location.
              </p>
            </section>

            {/* ACTIVITY */}
            <section className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm space-y-4">
              <h3 className="text-xl font-semibold dark:text-slate-100">Recent Activity</h3>

              <ul className="space-y-3 text-sm text-accent dark:text-slate-400">
                <li>Appointment booked with Dr. Sarah Johnson</li>
                <li>Prescription updated by Dr. Ahmed</li>
                <li>Medical record reviewed</li>
                <li>Follow-up scheduled next week</li>
              </ul>
            </section>
          </div>

          {/* RIGHT */}
          <div className="space-y-12">
            {/* HEALTH TIPS */}
            <section className="bg-gradient-to-br from-green-50 to-white dark:from-slate-800 dark:to-slate-900 p-8 rounded-3xl space-y-4">
              <h3 className="text-xl font-semibold dark:text-slate-100">Health Tips</h3>

              <ul className="space-y-2 text-sm text-accent dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <HeartPulse className="w-4 h-4 text-green-500" />
                  Maintain a balanced diet today
                </li>
                <li className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-blue-500" />
                  Walk at least 30 minutes
                </li>
                <li className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-purple-500" />
                  Aim for 7–8 hours of sleep
                </li>
              </ul>
            </section>

            {/* DOCTORS */}
            <section className="space-y-4">
              <h3 className="text-xl font-bold dark:text-slate-100">Recommended Doctors</h3>

              <div className="grid grid-cols-2 gap-4">
                <DoctorMiniCard />
                <DoctorMiniCard />
                <DoctorMiniCard />
                <DoctorMiniCard />
              </div>

              <p className="text-sm text-accent dark:text-slate-400">
                Doctors recommended based on your medical history.
              </p>
            </section>

            {/* EMERGENCY */}
            <EmergencyCard />
          </div>
        </div>
      </main>
    </div>
  );
}
