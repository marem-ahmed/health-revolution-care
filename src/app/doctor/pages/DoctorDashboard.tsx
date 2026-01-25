import ProfileSummaryCard from "../../../components/profileSummaryCard";
import MedicalAnalytics from "../components/MedicalAnalytics";
import PatientsList from "../components/PatientsList";
import RecentPrescriptions from "../components/RecentPrescriptions";
import UpcomingAppointments from "../components/UpcomingAppointemnts";

export default function DoctorDashboard() {
  return (
    <div className="space-y-8">
      {/* Header / Profile */}
      <ProfileSummaryCard
        name="Dr. Malik Ahmed"
        subtitle="Cardiologist"
        avatarText="D"
        welcomeMessage="Welcome back, Dr. Malik!"
      />

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left */}
        <div className="lg:col-span-2 space-y-6">
          <UpcomingAppointments />
          <MedicalAnalytics />
        </div>

        {/* Right */}
        <div className="space-y-6">
          <PatientsList />
          <RecentPrescriptions />
        </div>
      </div>
    </div>
  );
}
