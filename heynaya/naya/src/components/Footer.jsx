import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { Heart, Sparkles, Shield, Mail } from "lucide-react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-[#0b0f1a] pt-16 md:pt-20 pb-8 md:pb-10 border-t border-slate-200 dark:border-white/5 px-4 sm:px-6 md:px-12 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="HeyNaya Logo" className="h-10 w-10 rounded-full border border-slate-300 dark:border-white/10 shadow-sm dark:shadow-[0_0_15px_rgba(168,85,247,0.2)]" />
              <span className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">naya</span>
            </div>
            <p className="text-slate-600 dark:text-white/60 text-sm leading-relaxed max-w-xs">
              {t("footer.mission_desc")}
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={FaInstagram} href="#" />
              <SocialIcon icon={FaFacebookF} href="#" />
              <SocialIcon icon={FaYoutube} href="#" />
              <SocialIcon icon={FaLinkedinIn} href="#" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-bold mb-6 text-lg">{t("footer.quickLinks")}</h3>
            <nav>
              <ul className="flex flex-col gap-4">
                <FooterLink to="/" label={t("navbar.home")} />
                <FooterLink to="/AboutUs" label={t("navbar.about")} />
                <FooterLink to="/HowItWorks" label={t("navbar.howItWorks")} />
                <FooterLink to="/Sources" label={t("navbar.sources")} />
              </ul>
            </nav>
          </div>

          {/* Support & Community */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-bold mb-6 text-lg">{t("footer.support")}</h3>
            <nav>
              <ul className="flex flex-col gap-4">
                <FooterLink to="#" label={t("footer.privacy_policy")} />
                <FooterLink to="#" label={t("footer.terms")} />
                <FooterLink to="#" label={t("footer.contact")} />
              </ul>
            </nav>
          </div>

          {/* Contact / Newsletter */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-bold mb-6 text-lg">{t("footer.newsletter")}</h3>
            <p className="text-slate-600 dark:text-white/60 text-sm mb-6">
              {t("footer.newsletter_desc")}
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder={t("footer.email_placeholder")}
                className="w-full bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl py-3 px-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-purple-500 dark:focus:border-purple-500/50 transition-all shadow-sm dark:shadow-none"
              />
              <button className="absolute right-2 top-1.5 p-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
                <Mail className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-slate-500 dark:text-white/40 text-xs uppercase tracking-widest font-semibold">
            <span>© {currentYear} Naya AI</span>
            <span className="w-1 h-1 bg-slate-300 dark:bg-white/20 rounded-full" />
            <span>{t("footer.copyright")}</span>
          </div>
          
          <div className="flex items-center gap-6">
            <TrustBadge icon={Shield} label={t("footer.privacy")} />
            <TrustBadge icon={Heart} label={t("footer.care")} />
            <TrustBadge icon={Sparkles} label={t("footer.ai")} />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ to, label }) {
  return (
    <li>
      <Link to={to} className="text-slate-500 dark:text-white/50 hover:text-purple-600 dark:hover:text-purple-400 text-sm transition-colors duration-300 flex items-center gap-2 group">
        <span className="w-1.5 h-1.5 bg-purple-500/0 rounded-full group-hover:bg-purple-600 dark:group-hover:bg-purple-500 transition-all duration-300" />
        {label}
      </Link>
    </li>
  );
}

function SocialIcon({ icon: Icon, href }) {
  return (
    <a href={href} className="w-9 h-9 rounded-full bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-white/60 hover:text-white hover:bg-purple-600 dark:hover:bg-purple-600 hover:border-purple-600 transition-all duration-300 shadow-sm dark:shadow-none">
      <Icon className="w-4 h-4" />
    </a>
  );
}

function TrustBadge({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 text-slate-400 dark:text-white/30 text-[10px] uppercase font-bold tracking-wider">
      <Icon className="w-3.5 h-3.5 text-purple-600 dark:text-purple-500/50" />
      {label}
    </div>
  );
}

