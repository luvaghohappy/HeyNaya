import React from "react";
import { Mic, Brain, MessageCircle, Sparkles, ShieldCheck, Lock, Heart, Play } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

export default function HowItWorks() {
  const { t } = useTranslation();

  return (
    <div className="w-full text-slate-900 dark:text-white bg-transparent transition-colors duration-500 overflow-hidden">

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/20 dark:bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-8 shadow-sm dark:shadow-none focus:ring-2">
          <Play className="w-3 h-3 text-purple-600 dark:text-purple-400 fill-purple-600 dark:fill-purple-400" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-purple-600 dark:text-purple-300">{t("howItWorks.hero.badge")}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-6 relative z-10 leading-tight text-slate-900 dark:text-white">
          <Trans i18nKey="howItWorks.hero.title" components={{ 1: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 dark:from-purple-400 dark:to-indigo-400" /> }} />
        </h1>

        <p className="text-slate-600 dark:text-white/60 max-w-xl relative z-10 text-lg md:text-xl font-medium">
          {t("howItWorks.hero.subtitle")}
        </p>
      </section>

      {/* Progress Section */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Visual Connection Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent hidden lg:block -translate-y-1/2 transition-colors duration-500" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            <Step 
              number="01"
              icon={Mic} 
              title={t("howItWorks.steps.s1.title")} 
              desc={t("howItWorks.steps.s1.desc")} 
              color="purple"
            />
            <Step 
              number="02"
              icon={Brain} 
              title={t("howItWorks.steps.s2.title")} 
              desc={t("howItWorks.steps.s2.desc")} 
              color="indigo"
            />
            <Step 
              number="03"
              icon={MessageCircle} 
              title={t("howItWorks.steps.s3.title")} 
              desc={t("howItWorks.steps.s3.desc")} 
              color="purple"
            />
            <Step 
              number="04"
              icon={Sparkles} 
              title={t("howItWorks.steps.s4.title")} 
              desc={t("howItWorks.steps.s4.desc")} 
              color="indigo"
            />
          </div>
        </div>
      </section>

      {/* Voice Experience Section */}
      <section className="relative py-20 md:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto glass-card p-8 sm:p-12 md:p-20 text-center relative overflow-hidden bg-white/80 dark:bg-white/5">
          <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-indigo-600/20 dark:bg-indigo-600/10 blur-[100px] rounded-full" />
          
          <div className="relative flex items-center justify-center mb-12">
            
            {/* Pulsing Rings */}
            <div className="absolute w-44 h-44 rounded-full border border-purple-400/40 dark:border-purple-500/20 animate-ping" />
            <div className="absolute w-48 h-48 rounded-full border border-indigo-400/40 dark:border-indigo-500/10 animate-ping delay-500" />
            
            {/* The Mic Circle */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center shadow-[0_0_50px_rgba(168,85,247,0.3)] relative z-10">
              <Mic className="w-10 h-10 text-white animate-bounce-slow" />
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            {t("howItWorks.experience.title")} <span className="text-purple-600 dark:text-purple-400">“Hey Naya”</span>
          </h2>
          
          <p className="text-slate-600 dark:text-white/60 text-lg leading-relaxed max-w-md mx-auto mb-10">
            {t("howItWorks.experience.subtitle")}
          </p>

          <button className="px-10 py-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-[#0b0f1a] font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform active:scale-95 shadow-xl">
            {t("howItWorks.experience.cta")}
          </button>
        </div>
      </section>

      {/* Core Values / Trust Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-12">
          <div className="inline-flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-16 px-6 sm:px-10 py-6 rounded-[2rem] bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 backdrop-blur-md">
            <TrustItem icon={ShieldCheck} text={t("howItWorks.values.protected")} />
            <TrustItem icon={Lock} text={t("howItWorks.values.secure")} />
            <TrustItem icon={Brain} text={t("howItWorks.values.informed")} />
          </div>

          <p className="flex items-center gap-2 text-slate-500 dark:text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">
            {t("howItWorks.values.note")} <Heart className="w-3 h-3 text-purple-500" />
          </p>
        </div>
      </section>

    </div>
  );
}

function Step({ number, icon: Icon, title, desc, color }) {
  const colorClass = color === "purple" ? "text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-500/10" : "text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-500/10";
  
  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 group">
      <div className="relative">
        <span className="absolute -top-4 -left-4 text-4xl font-black text-slate-200 dark:text-white/5 select-none">{number}</span>
        <div className={`w-20 h-20 rounded-3xl ${colorClass} flex items-center justify-center shadow-lg border border-white/50 dark:border-white/5 backdrop-blur-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
          <Icon className="w-8 h-8" />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">{title}</h3>
        <p className="text-slate-600 dark:text-white/40 text-sm leading-relaxed max-w-[240px]">
          {desc}
        </p>
      </div>
    </div>
  );
}

function TrustItem({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="w-5 h-5 text-purple-500 dark:text-purple-400/70" />
      <span className="text-slate-700 dark:text-white/60 font-black text-xs uppercase tracking-widest">{text}</span>
    </div>
  );
}
