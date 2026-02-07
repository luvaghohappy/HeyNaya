import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <header className="bg-amber-50/90 backdrop-blur-sm border-b border-amber-200 shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="Logo" className="h-10 w-10 mr-2 rounded-full" />
            <span className="text-2xl font-bold text-amber-900 tracking-wide">
              ANTIQUE <span className="text-sm ml-1">STORE</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 font-medium">
            <Link to="/" className="text-amber-900 hover:text-amber-700">Home</Link>
            <Link to="/products" className="text-amber-900 hover:text-amber-700">Shop</Link>
            <Link to="/Cart" className="text-amber-900 hover:text-amber-700">Cart</Link>
            <Link to="/orders" className="text-amber-900 hover:text-amber-700">My Orders</Link>  
            <Link to="/ContactPage" className="text-amber-900 hover:text-amber-700">Contact</Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-amber-900 font-medium">
                  Welcome, {user.firstName}
                </span>
                <button
                  onClick={() => logout()}
                  className="bg-amber-800 text-white px-4 py-1.5 rounded hover:bg-amber-900 transition"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="bg-amber-50 border border-amber-700 text-amber-900 px-4 py-1.5 rounded hover:bg-amber-100 transition"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/register")}
                  className="bg-amber-800 text-white px-4 py-1.5 rounded hover:bg-amber-900 transition"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl text-amber-900 p-2"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Side Menu Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Mobile Side Menu Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-amber-50 shadow-xl border-r border-amber-200 p-6 transform 
        transition-transform duration-300 md:hidden
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          className="text-2xl mb-6 text-amber-900"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        {/* Mobile Navigation */}
        <nav className="flex flex-col space-y-5 font-medium text-lg text-amber-900">
          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/aboutPage">About</Link>
          <Link onClick={() => setOpen(false)} to="/HowitWorks">How It Works</Link>
          <Link onClick={() => setOpen(false)} to="/ContactPage">Contact</Link>
          <Link onClick={() => setOpen(false)} to="/Blog">Blog</Link>
        </nav>

        {/* Mobile Auth */}
        <div className="mt-6 flex flex-col space-y-4">
          {user ? (
            <>
              <span className="text-amber-900 font-medium">Welcome, {user.firstName}</span>
              <button
                onClick={() => { logout(); setOpen(false); }}
                className="bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-900 transition"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => { navigate("/login"); setOpen(false); }}
                className="bg-amber-50 border border-amber-700 text-amber-900 px-4 py-2 rounded hover:bg-amber-100 transition"
              >
                Login
              </button>
              <button
                onClick={() => { navigate("/register"); setOpen(false); }}
                className="bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-900 transition"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
