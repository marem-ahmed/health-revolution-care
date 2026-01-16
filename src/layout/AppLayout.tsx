import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import ConnectHealthBot from "../app/chatbot/Bot";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-primary-50">
      <Navbar />

      {/* Page content */}
      <main>
        <Outlet />
        <ConnectHealthBot />
      </main>
    </div>
  );
}
