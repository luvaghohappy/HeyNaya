// src/components/Navbar.jsx

import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef = useRef(null);

  useEffect(() => {
    const activeLink = navRef.current?.querySelector(
      `[data-path="${location.pathname}"]`
    );

    if (activeLink) {
      const rect = activeLink.getBoundingClientRect();
      const parentRect = navRef.current.getBoundingClientRect();

      setIndicatorStyle({
        left: rect.left - parentRect.left + rect.width / 2,
      });
    }
  }, [location.pathname]);

  const linkClass = (path) =>
    `relative cursor-pointer transition ${
      location.pathname === path
        ? "text-white"
        : "text-white/70 hover:text-white"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-gradient-to-r from-[#0b0f1a]/80 to-[#0b0f1a]/60 backdrop-blur-xl border-b border-white/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="h-16 w-16 rounded-full" />
              <span className="text-lg font-semibold text-white">
                Your voice. Your healing
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="relative">
              <nav
                ref={navRef}
                className="hidden md:flex items-center gap-8 text-sm font-medium relative"
              >
                <Link to="/" data-path="/" className={linkClass("/")}>
                  Home
                </Link>

                <Link to="/AboutUs" data-path="/AboutUs" className={linkClass("/AboutUs")}>
                  About Us
                </Link>

                <Link to="/HowItWorks" data-path="/HowItWorks" className={linkClass("/HowItWorks")}>
                  How It Works
                </Link>

                <Link to="/Sources" data-path="/Sources" className={linkClass("/Sources")}>
                  Sources
                </Link>

                {/* 🔥 Moving Dot */}
                <span
                  className="absolute -bottom-2 w-2 h-2 bg-purple-400 rounded-full transition-all duration-300"
                  style={{
                    left: indicatorStyle.left,
                    transform: "translateX(-50%)",
                  }}
                />
              </nav>
            </div>

            {/* Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm">
                LOG IN
              </button>
              <button className="px-4 py-2 rounded-full border border-white/20 text-white/80 text-sm">
                NAYA
              </button>
            </div>

            {/* Mobile */}
            <button
              className="md:hidden text-3xl text-white"
              onClick={() => setOpen(true)}
            >
              ☰
            </button>

          </div>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#0b0f1a] border-r border-white/10 p-6 transform transition-transform duration-300 md:hidden
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          className="text-2xl mb-6 text-white"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        <nav className="flex flex-col space-y-6 text-white/80 text-lg">
          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/AboutUs">About</Link>
          <Link onClick={() => setOpen(false)} to="/HowItWorks">How It Works</Link>
          <Link onClick={() => setOpen(false)} to="/Sources">Sources</Link>
        </nav>
      </div>
    </header>
  );
}