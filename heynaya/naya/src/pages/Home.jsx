import React from "react";
import { Mic, Sparkles, MessageCircle, Wind, BookOpen, Shield, ShieldCheck, Lock, Brain, Heart, Apple, Smartphone } from "lucide-react";
import { useTranslation } from "react-i18next";
import bg from "../assets/images/image.png";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="w-full text-slate-900 dark:text-white bg-transparent transition-colors duration-500">
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden">
        
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 dark:bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 dark:bg-indigo-600/10 blur-[120px] rounded-full animate-pulse delay-700" />
        </div>

        {/* Hero Background Image */}
        <div className="absolute inset-0 z-1 pointer-events-none">
          <img
            src={bg}
            alt="Atmospheric background"
            className="w-full h-full object-cover opacity-10 dark:opacity-30 scale-105 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 relative dark:from-[#0b0f1a] via-transparent to-slate-50 dark:to-[#0b0f1a] opacity-80 dark:opacity-100 mix-blend-overlay dark:mix-blend-normal" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 dark:bg-white/5 border border-purple-100 dark:border-white/10 shadow-sm dark:shadow-none mb-8 animate-float">
            <Sparkles className="w-4 h-4 text-purple-500 dark:text-purple-400" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-purple-600 dark:text-purple-300">{t("home.hero.badge")}</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-tight text-slate-900 dark:text-white">
            {t("home.hero.title")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 dark:from-purple-400 dark:to-indigo-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.2)] dark:drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">naya</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-white/70 font-medium mb-8 max-w-2xl leading-relaxed">
            {t("home.hero.tagline")}
          </p>
          
          <p className="text-slate-500 dark:text-white/40 max-w-xl text-sm md:text-base mb-12 leading-relaxed">
            {t("home.hero.description")}
          </p>

          {/* Download Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-24">
            <DownloadButton icon={Apple} text="App Store" subtext={t("home.download.downloadOn")} primary />
            <DownloadButton icon={Smartphone} text="Play Store" subtext={t("home.download.getOn")} />
          </div>

          {/* Interaction Hub (Orbit) */}
          <div className="relative flex items-center justify-center mb-32 md:mb-48 scale-50 sm:scale-[0.65] md:scale-90 lg:scale-100 mt-12 md:mt-0">
            
            {/* Ambient Glows */}
            <div className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-[100px] rounded-full animate-pulse pointer-events-none" />
            
            {/* Rings */}
            <div className="absolute w-[360px] h-[360px] rounded-full border border-slate-300 dark:border-white/5 ring-1 ring-slate-200 dark:ring-white/5 pointer-events-none transition-colors duration-500" />
            <div className="absolute w-[480px] h-[480px] rounded-full border border-slate-300 dark:border-white/5 pointer-events-none transition-colors duration-500" />
            <div className="absolute w-[600px] h-[600px] rounded-full border border-slate-200 dark:border-white/5 pointer-events-none transition-colors duration-500" />

            {/* Orbiting Elements */}
            <div className="absolute w-[360px] h-[360px] rounded-full animate-orbit pointer-events-none">
              <div className="absolute top-0 left-1/2 -ms-1 w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_#a855f7]" />
            </div>
            <div className="absolute w-[480px] h-[480px] rounded-full animate-orbit-slow pointer-events-none">
              <div className="absolute bottom-0 left-1/2 -ms-1 w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_10px_#6366f1]" />
            </div>

            {/* Central Naya Core */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center group cursor-pointer z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 dark:from-purple-600/40 to-indigo-500/30 dark:to-indigo-600/40 blur-2xl rounded-full group-hover:scale-110 transition-transform duration-700" />
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-purple-400 dark:from-purple-500 to-indigo-500 dark:to-indigo-600 p-0.5 shadow-2xl overflow-hidden shadow-purple-500/20">
                <div className="w-full h-full rounded-full bg-slate-50/90 dark:bg-[#0b0f1a]/80 backdrop-blur-xl flex flex-col items-center justify-center p-8 gap-4 transition-colors duration-500">
                  <span className="text-slate-500 dark:text-white/40 text-[10px] uppercase font-bold tracking-[0.2em]">{t("home.orbit.ready")}</span>
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-500/20 dark:bg-white/20 blur-xl rounded-full animate-pulse" />
                    <Mic className="w-10 h-10 text-purple-600 dark:text-white relative z-10 animate-bounce-slow" />
                  </div>
                  <span className="text-slate-900 dark:text-white font-bold text-xl tracking-wide">Hey Naya</span>
                </div>
              </div>
            </div>

            {/* Floating Action Circles */}
            <div className="absolute -top-16 -left-20 animate-float z-20">
              <CircleButton icon={MessageCircle} title={t("home.orbit.talk.title")} subtitle={t("home.orbit.talk.subtitle")} />
            </div>
            <div className="absolute -top-16 -right-20 animate-float delay-300 z-20">
              <CircleButton icon={Wind} title={t("home.orbit.ground.title")} subtitle={t("home.orbit.ground.subtitle")} />
            </div>
            <div className="absolute -bottom-16 -left-20 animate-float delay-700 z-20">
              <CircleButton icon={BookOpen} title={t("home.orbit.learn.title")} subtitle={t("home.orbit.learn.subtitle")} />
            </div>
            <div className="absolute -bottom-16 -right-20 animate-float delay-1000 z-20">
              <CircleButton icon={Shield} title={t("home.orbit.safe.title")} subtitle={t("home.orbit.safe.subtitle")} />
            </div>
          </div>

          {/* trust indicators */}
          <div className="glass-card px-6 sm:px-10 py-6 mb-8 w-full max-w-3xl">
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 sm:gap-12">
              <Benefit icon={ShieldCheck} label={t("home.benefits.privacy")} />
              <Benefit icon={Lock} label={t("home.benefits.secure")} />
              <Benefit icon={Brain} label={t("home.benefits.trauma")} />
            </div>
          </div>

          <p className="flex items-center gap-2 text-slate-500 dark:text-white/40 text-xs font-bold uppercase tracking-widest mt-8">
            {t("home.footer_note")} <Heart className="w-3 h-3 text-purple-500" />
          </p>
        </div>
      </section>
    </div>
  );
}

function DownloadButton({ icon: Icon, text, subtext, primary }) {
  return (
    <button className={`flex items-center gap-5 px-8 py-3 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg dark:shadow-2xl ${
      primary 
      ? "bg-slate-900 dark:bg-white text-white dark:text-[#0b0f1a] hover:bg-slate-800" 
      : "bg-white/80 dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20"
    }`}>
      <Icon className={`w-7 h-7 ${primary ? "text-white dark:text-[#0b0f1a]" : "text-purple-600 dark:text-purple-400"}`} />
      <div className="flex flex-col items-start translate-y-0.5">
        <span className="text-[9px] font-black uppercase tracking-widest opacity-60 leading-none mb-1">{subtext}</span>
        <span className="text-lg font-black tracking-tight leading-none">{text}</span>
      </div>
    </button>
  );
}

function CircleButton({ title, subtitle, icon: Icon }) {
  return (
    <div className="w-28 h-28 md:w-32 md:h-32 rounded-full glass-card flex flex-col items-center justify-center text-center gap-1 hover:scale-110 hover:bg-slate-50 dark:hover:bg-white/10 dark:hover:border-white/30 transition-all duration-500 cursor-pointer group shadow-lg dark:shadow-xl bg-white/80 dark:bg-white/5">
      <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-500/10 mb-2 group-hover:bg-purple-200 dark:group-hover:bg-purple-500/20 transition-colors">
        <Icon className="w-5 h-5 text-purple-600 dark:text-purple-400 group-hover:text-purple-800 dark:group-hover:text-white transition-colors" />
      </div>
      <div className="text-[11px] font-black text-slate-900 dark:text-white uppercase tracking-wider">{title}</div>
      <div className="text-[9px] text-slate-500 dark:text-white/40 leading-tight px-3">{subtitle}</div>
    </div>
  );
}

function Benefit({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-lg bg-slate-100 dark:bg-white/5">
        <Icon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
      </div>
      <span className="text-[10px] md:text-xs font-bold text-slate-600 dark:text-white/60 tracking-wide uppercase">{label}</span>
    </div>
  );
}

