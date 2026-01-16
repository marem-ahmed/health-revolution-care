import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/assets/logo.png" className="h-8" />
          <span className="font-bold text-secondary text-lg">
            HealthConnect
          </span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          {/* Notification */}
          <div className="relative cursor-pointer">
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
              1
            </span>
            🔔
          </div>

          {/* Profile */}
          <Link
            to="/profile"
            className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center cursor-pointer hover:opacity-90 transition"
          >
            M
          </Link>
        </div>
      </div>
    </header>
  );
}
