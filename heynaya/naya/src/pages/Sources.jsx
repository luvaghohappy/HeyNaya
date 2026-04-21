import React from "react";
import { BookOpen, Brain, FileText, Download, Apple, Smartphone, ShieldCheck, Lock, Heart, ExternalLink } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

export default function Sources() {
  const { t } = useTranslation();

  return (
    <div className="w-full text-slate-900 dark:text-white bg-transparent transition-colors duration-500 overflow-hidden px-4 sm:px-6 md:px-12 pt-32 md:pt-40 pb-16 md:pb-20">

      {/* Hero Section */}
      <div className="text-center mb-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-600/20 dark:bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-8 shadow-sm dark:shadow-none">
          <BookOpen className="w-3 h-3 text-purple-600 dark:text-purple-400" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-purple-600 dark:text-purple-300">{t("sources.hero.badge")}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-6 relative z-10 leading-tight text-slate-900 dark:text-white">
          <Trans i18nKey="sources.hero.title" components={{ 1: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 dark:from-purple-400 dark:to-indigo-400" /> }} />
        </h1>

        <p className="text-slate-600 dark:text-white/60 max-w-2xl mx-auto relative z-10 text-lg md:text-xl font-medium">
          {t("sources.hero.subtitle")}
        </p>
      </div>

      {/* Resources Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20 md:mb-32 relative z-10">
        <SourceCard
          icon={BookOpen}
          title={t("sources.categories.essential")}
          items={[
            { name: "The Body Keeps the Score", author: "Bessel van der Kolk" },
            { name: "Emotional Intelligence", author: "Daniel Goleman" },
            { name: "Man’s Search for Meaning", author: "Viktor Frankl" },
          ]}
        />
        <SourceCard
          icon={FileText}
          title={t("sources.categories.clinical")}
          items={[
            { name: "AI in Mental Health Care", author: "Nature Medicine" },
            { name: "Trauma Response Patterns", author: "Psychology Today" },
            { name: "Digital Therapy Efficacy", author: "The Lancet" },
          ]}
        />
        <SourceCard
          icon={Brain}
          title={t("sources.categories.tech")}
          items={[
            { name: "AI Ethics in Support Systems", author: "MIT Press" },
            { name: "Voice-Based Emotional AI", author: "Stanford Research" },
            { name: "Privacy in Health-Tech", author: "Cyber Security Journal" },
          ]}
        />
      </div>

      {/* Download CTA Section */}
      <section className="max-w-5xl mx-auto mb-32 px-4 sm:px-0 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 dark:from-purple-600/20 to-indigo-500/20 dark:to-indigo-600/20 blur-[100px] rounded-[3rem]" />
        <div className="relative glass-card p-8 sm:p-12 md:p-20 text-center flex flex-col items-center gap-10 bg-white/80 dark:bg-white/5">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
              <Trans i18nKey="sources.cta.title" components={{ 1: <span className="text-purple-600 dark:text-purple-400" /> }} />
            </h2>
            <p className="text-slate-500 dark:text-white/50 text-lg font-medium">
              {t("sources.cta.subtitle")}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <DownloadButton icon={Apple} text="App Store" subtext={t("home.download.downloadOn")} primary />
            <DownloadButton icon={Smartphone} text="Play Store" subtext={t("home.download.getOn")} />
          </div>
        </div>
      </section>

      {/* Trust & Foundation Section */}
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-12 text-center pb-12 px-4">
        <div className="inline-flex flex-wrap justify-center gap-6 sm:gap-10 px-6 sm:px-10 py-6 rounded-[2rem] bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 backdrop-blur-md">
          <TrustItem icon={ShieldCheck} text={t("home.benefits.privacy")} />
          <TrustItem icon={Lock} text={t("home.benefits.secure")} />
          <TrustItem icon={Brain} text={t("home.benefits.trauma")} />
        </div>

        <p className="flex items-center gap-2 text-slate-400 dark:text-white/30 text-[10px] font-black uppercase tracking-[0.2em] max-w-sm">
          {t("howItWorks.values.note")} <Heart className="w-3 h-3 text-purple-500" />
        </p>
      </div>

    </div>
  );
}

function SourceCard({ icon: Icon, title, items }) {
  return (
    <div className="group relative p-8 rounded-3xl bg-white/80 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 hover:border-purple-300 dark:hover:border-purple-500/30 transition-all duration-500 flex flex-col gap-8 shadow-lg dark:shadow-xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/5">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-500">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">{title}</h3>
      </div>

      <ul className="flex flex-col gap-5">
        {items.map((item, index) => (
          <li key={index} className="flex items-start justify-between group/item cursor-pointer">
            <div className="flex flex-col">
              <span className="text-slate-700 dark:text-white/80 font-bold group-hover/item:text-purple-600 dark:group-hover/item:text-purple-400 transition-colors">{item.name}</span>
              <span className="text-slate-500 dark:text-white/30 text-xs font-medium uppercase tracking-wider">{item.author}</span>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-300 dark:text-white/10 group-hover/item:text-purple-500 dark:group-hover/item:text-purple-400/50 transition-colors" />
          </li>
        ))}
      </ul>
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

function TrustItem({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="w-5 h-5 text-purple-600 dark:text-purple-400/70" />
      <span className="text-slate-600 dark:text-white/60 font-black text-xs uppercase tracking-widest">{text}</span>
    </div>
  );
}
