import { Routes, Route } from "react-router-dom";

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

export default function AppRoutes() {
  return (
    <Routes>
      {/* ========== Auth ========== */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* ========== App (with Navbar) ========== */}
      <Route element={<AppLayout />}>
        {/* Home */}
        <Route path="/" element={<PatientHome />} />

        {/* Profile */}
        <Route path="/profile" element={<ProfileLayout />}>
          <Route index element={<PersonalInfo />} />
          <Route path="medical" element={<MedicalInfo />} />
          <Route path="medicalrecord" element={<MedicalRecords />} />
          <Route path="password" element={<ChangePassword />} />
          <Route path="notifications" element={<Notifications />} />
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
