import DoctorHeader from "../components/DoctorHeader";
import MedicalAnalytics from "../components/MedicalAnalytics";
import PatientsList from "../components/PatientsList";
import RecentPrescriptions from "../components/RecentPrescriptions";
import UpcomingAppointments from "../components/UpcomingAppointemnts";

export default function DoctorDashboard() {
  return (
    <>
      <DoctorHeader />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <UpcomingAppointments />
          <MedicalAnalytics />
        </div>

        <div className="space-y-6">
          <PatientsList />
          <RecentPrescriptions />
        </div>
      </div>
    </>
  );
}
