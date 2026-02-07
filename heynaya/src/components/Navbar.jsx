import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-gradient-to-r from-[#f5efe6] to-[#dbeafe] border-b border-white/30">
      <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 items-center">

        {/* Logo (left) */}
        <div className="flex items-center gap-2">
  <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm">
    <img
      src={logo}
      alt="Naya logo"
      className="h-7 w-7 object-contain"
    />
  </div>
  <span className="text-lg font-semibold tracking-wide text-slate-700">
    
  </span>
</div>

        {/* Navigation (centered) */}
        <div className="flex justify-center gap-10 text-sm text-slate-600">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-slate-800 font-medium border-b-2 border-slate-800 pb-1"
                : "hover:text-slate-800 transition-colors"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-slate-800 font-medium border-b-2 border-slate-800 pb-1"
                : "hover:text-slate-800 transition-colors"
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/how-it-works"
            className={({ isActive }) =>
              isActive
                ? "text-slate-800 font-medium border-b-2 border-slate-800 pb-1"
                : "hover:text-slate-800 transition-colors"
            }
          >
            How It Works
          </NavLink>

          <NavLink
            to="/sources"
            className={({ isActive }) =>
              isActive
                ? "text-slate-800 font-medium border-b-2 border-slate-800 pb-1"
                : "hover:text-slate-800 transition-colors"
            }
          >
            Sources
          </NavLink>
        </div>

        {/* Right spacer (keeps center aligned) */}
        <div />
      </div>
    </nav>
  );
}
