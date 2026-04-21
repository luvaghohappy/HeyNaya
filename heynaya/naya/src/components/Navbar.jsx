import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/logo.png";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { t } = useTranslation();
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
  }, [location.pathname, t]); // Re-run when language changes as text width might change

  const linkClass = (path) =>
    `relative py-2 px-1 text-sm font-medium transition-colors duration-300 ${
      location.pathname === path
        ? "text-slate-800 dark:text-white"
        : "text-slate-500 dark:text-white/60 hover:text-slate-800 dark:hover:text-white"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/70 dark:bg-[#0b0f1a]/40 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl shadow-xl dark:shadow-2xl transition-colors duration-500">
          <div className="px-6 flex justify-between items-center h-16">
            
            {/* Logo & Slogan */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500/20 blur-lg rounded-full group-hover:bg-purple-500/30 transition-all duration-500" />
                <img 
                  src={logo} 
                  alt="HeyNaya Logo" 
                  className="h-10 w-10 md:h-12 md:w-12 rounded-full relative z-10 border border-white/50 dark:border-white/10 group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900 dark:text-white font-bold leading-tight tracking-tight transition-colors duration-500">
                  naya
                </span>
                <span className="text-[10px] text-purple-600 dark:text-purple-400 font-medium tracking-wider uppercase transition-colors duration-500">
                  {t('navbar.slogan')}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              ref={navRef}
              className="hidden md:flex items-center gap-8 relative"
            >
              <Link to="/" data-path="/" className={linkClass("/")}>
                {t("navbar.home")}
              </Link>
              <Link to="/AboutUs" data-path="/AboutUs" className={linkClass("/AboutUs")}>
                {t("navbar.about")}
              </Link>
              <Link to="/HowItWorks" data-path="/HowItWorks" className={linkClass("/HowItWorks")}>
                {t("navbar.howItWorks")}
              </Link>
              <Link to="/Sources" data-path="/Sources" className={linkClass("/Sources")}>
                {t("navbar.sources")}
              </Link>

              {/* Moving Indicator */}
              <span
                className="absolute -bottom-1 w-1.5 h-1.5 bg-purple-500 dark:bg-purple-400 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.5)] dark:shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all duration-300 ease-out"
                style={{
                  left: indicatorStyle.left,
                  transform: "translateX(-50%)",
                }}
              />
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <LanguageSwitcher />
              <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300">
                {t("navbar.getStarted")}
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden flex flex-col gap-1.5 group p-2"
              onClick={() => setOpen(true)}
            >
              <span className="w-6 h-0.5 bg-slate-800 dark:bg-white/70 group-hover:bg-slate-500 dark:group-hover:bg-white transition-colors" />
              <span className="w-6 h-0.5 bg-slate-800 dark:bg-white/70 group-hover:bg-slate-500 dark:group-hover:bg-white transition-colors" />
              <span className="w-4 h-0.5 bg-slate-800 dark:bg-white/70 group-hover:bg-slate-500 dark:group-hover:bg-white transition-colors self-end" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-[#0b0f1a] border-l border-slate-200 dark:border-white/10 z-[70] p-8 shadow-2xl transform transition-transform duration-500 ease-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-3">
            <img src={logo} className="h-10 w-10 rounded-full border border-slate-200 dark:border-white/10" alt="Naya" />
            <span className="text-xl font-bold text-slate-900 dark:text-white">naya</span>
          </div>
          <button
            className="p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full transition-colors text-slate-600 dark:text-white/70"
            onClick={() => setOpen(false)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-6">
          <MobileLink to="/" label={t("navbar.home")} active={location.pathname === "/"} onClick={() => setOpen(false)} />
          <MobileLink to="/AboutUs" label={t("navbar.about")} active={location.pathname === "/AboutUs"} onClick={() => setOpen(false)} />
          <MobileLink to="/HowItWorks" label={t("navbar.howItWorks")} active={location.pathname === "/HowItWorks"} onClick={() => setOpen(false)} />
          <MobileLink to="/Sources" label={t("navbar.sources")} active={location.pathname === "/Sources"} onClick={() => setOpen(false)} />
        </nav>

        <div className="mt-auto pt-10 border-t border-slate-200 dark:border-white/5 flex flex-col gap-6 w-full">
          <div className="flex items-center justify-between">
            <span className="text-slate-500 dark:text-white/40 font-bold uppercase tracking-widest text-xs">{t('navbar.theme')}</span>
            <ThemeToggle />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500 dark:text-white/40 font-bold uppercase tracking-widest text-xs">{t('navbar.language')}</span>
            <LanguageSwitcher />
          </div>
          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
            {t("navbar.getStarted")}
          </button>
        </div>
      </div>
    </header>
  );
}

function MobileLink({ to, label, active, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-2xl font-semibold transition-all duration-300 ${
        active ? "text-purple-600 dark:text-purple-400 translate-x-2" : "text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white"
      }`}
    >
      {label}
    </Link>
  );
}

