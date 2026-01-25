import { Link } from "react-router-dom";
import DarkModeToggle from "../components/DarkmodeToggle";
import { Bell, User } from "lucide-react";

export default function Navbar() {
  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        bg-white/90 dark:bg-slate-800/90
        backdrop-blur-md
        border-b border-slate-200 dark:border-slate-800
        shadow-sm
        transition-colors
      "
    >
      <div className="mx-auto max-w-[1400px] px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/assets/logo.png" className="h-8" />
          <span className="font-bold text-secondary dark:text-slate-100 text-lg">
            HealthConnect
          </span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">
          {/* Notification */}
          <div className="relative cursor-pointer">
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full px-1">
              1
            </span>
            <Bell className="w-5 h-5 text-primary dark:text-blue-400 hover:opacity-80 transition" />
          </div>

          {/* Profile */}
          <Link
            to="/profile"
            className="
              w-9 h-9 rounded-full 
              bg-primary/10 dark:bg-slate-700 
              flex items-center justify-center 
              hover:bg-primary/20 transition
            "
          >
            <User className="w-5 h-5 text-primary dark:text-slate-200" />
          </Link>

          {/* Dark Mode */}
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}
