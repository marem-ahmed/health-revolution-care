import { Routes, Route, Navigate } from "react-router-dom";

/* Auth */
import AuthLayout from "../auth/layout/AuthLayout";
import Login from "../auth/pages/Login";
import Register from "../auth/pages/Register";

/* App */
import AppLayout from "../layout/AppLayout";
import PatientHome from "../app/home/Pages/PatientHome";

/* Profile */
import ProfileLayout from "../layout/ProfileLayout";
import PersonalInfo from "../app/profile/sections/PersonalInfo";
import MedicalInfo from "../app/profile/sections/MedicalInfo";
import MedicalRecords from "../app/profile/sections/MedicalRecord";
import ChangePassword from "../app/profile/sections/ChangePassword";
import Notifications from "../app/profile/sections/Notifications";
import PrivacySecurity from "../app/profile/sections/PrivacySecurity";

/* Doctor */
import DoctorLayout from "../layout/DoctorLayout";
import DoctorDashboard from "../app/doctor/pages/DoctorDashboard";
import DoctorPatients from "../app/doctor/pages/DoctorPatients";
import DoctorMessages from "../app/doctor/pages/DoctorMessages";
import DoctorPrescriptions from "../app/doctor/pages/DoctorPrescriptions";
import DoctorAppointments from "../app/doctor/pages/DoctorAppointement";

/* Home pages */
import BookAppointment from "../app/home/Pages/BookAppointment";
import AppointmentConfirmation from "../app/home/Pages/AppointmentConfirmation";
import OnlinePayment from "../app/home/Pages/OnlinePayment";
import FindHospitals from "../app/home/Pages/FindHospitals";
import MyAppointments from "../app/home/Pages/MyAppointments";
import Doctors from "../app/home/Pages/Doctor";
import ViewAppointment from "../app/home/Pages/ViewAppointment";
import EditProfile from "../app/profile/sections/EditProfile";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Redirect root to login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* ========== Auth ========== */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* ========== App (Patient) ========== */}
      <Route element={<AppLayout />}>
        <Route path="/home" element={<PatientHome />} />
        <Route path="/home/view-appointment" element={<ViewAppointment />} />
        <Route path="/home/book-appointment" element={<BookAppointment />} />
        <Route path="/home/appointment-confirmation" element={<AppointmentConfirmation />} />
        <Route path="/home/online-payment" element={<OnlinePayment />} />
        <Route path="/home/hospitals" element={<FindHospitals />} />
        <Route path="/home/doctors" element={<Doctors />} />
        <Route path="/home/my-appointments" element={<MyAppointments />} />

        {/* Profile */}
        <Route path="/profile" element={<ProfileLayout />}>
          <Route index element={<PersonalInfo />} />
          <Route path="medical" element={<MedicalInfo />} />
          <Route path="medical-records" element={<MedicalRecords />} />
          <Route path="password" element={<ChangePassword />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="edit" element={<EditProfile />} />
          <Route path="security" element={<PrivacySecurity />} />
        </Route>

        {/* Doctor */}
        <Route path="/doctor" element={<DoctorLayout />}>
          <Route index element={<DoctorDashboard />} />
          <Route path="appointments" element={<DoctorAppointments />} />
          <Route path="patients" element={<DoctorPatients />} />
          <Route path="messages" element={<DoctorMessages />} />
          <Route path="prescriptions" element={<DoctorPrescriptions />} />
        </Route>
      </Route>
    </Routes>
  );
}
