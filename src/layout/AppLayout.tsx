import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import ConnectHealthBot from "../app/chatbot/Bot";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-primary-50 dark:bg-slate-900 transition-colors">
      <Navbar />

      {/* Page content */}
      <main className="pt-20">
        <Outlet />
        <ConnectHealthBot />
      </main>
    </div>
  );
}
