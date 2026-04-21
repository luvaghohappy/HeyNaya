import React from "react";
import { HeartHandshake, Sparkles, Brain, ShieldCheck, Lock, Heart, ArrowRight } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";
import nayaImg from "../assets/images/logo.png";
import mentalImg from "../assets/images/mental.jpg";

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <div className="w-full text-slate-900 dark:text-white bg-transparent transition-colors duration-500 overflow-hidden">
      
      {/* Header Section */}
      <section className="relative px-4 sm:px-6 pt-32 md:pt-40 pb-16 md:pb-20 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/20 dark:bg-purple-600/10 blur-[120px] rounded-full" />
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-6 relative z-10 text-slate-900 dark:text-white">
          {t("about.header.title")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 dark:from-purple-400 dark:to-indigo-400">Naya</span>
        </h1>
        <p className="text-slate-600 dark:text-white/60 max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-medium relative z-10">
          {t("about.header.subtitle")}
        </p>
      </section>

      {/* Mission Section */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          
          <div className="relative group">
            <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full group-hover:bg-purple-500/40 dark:group-hover:bg-purple-500/30 transition-all duration-700" />
            <div className="relative aspect-square max-w-sm mx-auto p-8 rounded-[3rem] bg-gradient-to-br from-purple-400 dark:from-purple-500 to-indigo-500 dark:to-indigo-600 shadow-xl dark:shadow-2xl overflow-hidden shadow-purple-500/20">
              <div className="w-full h-full rounded-[2.5rem] bg-slate-50 dark:bg-[#0b0f1a] flex items-center justify-center p-6 border border-slate-200 dark:border-white/5 transition-colors duration-500">
                <img 
                  src={nayaImg} 
                  alt="Naya Mission" 
                  className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(168,85,247,0.2)] dark:drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]" 
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold uppercase tracking-widest text-xs">
              <HeartHandshake className="w-4 h-4" />
              <span>{t("about.mission.tag")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <Trans i18nKey="about.mission.title" components={{ 1: <span className="text-slate-800 dark:text-white/90" /> }} />
            </h2>
            <p className="text-slate-600 dark:text-white/60 text-lg leading-relaxed">
              {t("about.mission.desc")}
            </p>
            <div className="flex items-center gap-4 text-slate-700 dark:text-white font-bold group cursor-pointer">
              <span>{t("about.mission.valuesLink")}</span>
              <ArrowRight className="w-5 h-5 text-purple-600 dark:text-purple-400 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* Origins Section */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-slate-100 dark:bg-white/[0.02] transition-colors duration-500">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          
          <div className="order-2 md:order-1 flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-widest text-xs">
              <Sparkles className="w-4 h-4" />
              <span>{t("about.journey.tag")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <Trans i18nKey="about.journey.title" components={{ 1: <span className="text-slate-800 dark:text-white/90" /> }} />
            </h2>
            <p className="text-slate-600 dark:text-white/60 text-lg leading-relaxed">
              {t("about.journey.desc")}
            </p>
          </div>

          <div className="order-1 md:order-2 relative group">
            <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full group-hover:bg-indigo-500/40 dark:group-hover:bg-indigo-500/30 transition-all duration-700" />
            <div className="relative aspect-square max-w-sm mx-auto p-1 bg-gradient-to-tr from-slate-300 dark:from-white/10 to-transparent rounded-[3rem] shadow-xl dark:shadow-2xl">
              <img 
                src={nayaImg} 
                alt="Creation" 
                className="w-full h-full object-cover rounded-[2.9rem] opacity-90 dark:opacity-80" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          
          <div className="relative group">
            <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full group-hover:bg-purple-500/40 dark:group-hover:bg-purple-500/30 transition-all duration-700" />
            <div className="relative aspect-[4/3] max-w-md mx-auto overflow-hidden rounded-[3rem] border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl">
              <img 
                src={mentalImg} 
                alt="Mental Health Matters" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-[#0b0f1a] via-transparent to-transparent opacity-80 dark:opacity-60" />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold uppercase tracking-widest text-xs">
              <Brain className="w-4 h-4" />
              <span>{t("about.wellbeing.tag")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <Trans i18nKey="about.wellbeing.title" components={{ 1: <span className="text-slate-800 dark:text-white/90" /> }} />
            </h2>
            <p className="text-slate-600 dark:text-white/60 text-lg leading-relaxed">
              {t("about.wellbeing.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* Trust Quote / CTA Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto glass-card p-8 sm:p-12 md:p-20 text-center relative overflow-hidden bg-white/80 dark:bg-white/5">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/20 dark:bg-purple-500/10 blur-[100px] rounded-full" />
          
          <Heart className="w-12 h-12 text-purple-500 dark:text-purple-400 mx-auto mb-10 animate-pulse" />
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-8 text-slate-900 dark:text-white">
            <Trans i18nKey="about.trust.quote" components={{ 1: <span className="text-purple-600 dark:text-purple-400" /> }} />
          </h2>
          
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 sm:gap-10 mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-slate-200 dark:border-white/5">
            <TrustItem icon={ShieldCheck} text={t("about.trust.protected")} />
            <TrustItem icon={Lock} text={t("about.trust.secure")} />
            <TrustItem icon={Brain} text={t("about.trust.informed")} />
          </div>
        </div>
      </section>

    </div>
  );
}

function TrustItem({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-lg bg-slate-100 dark:bg-white/5">
        <Icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
      </div>
      <span className="text-slate-700 dark:text-white/80 font-bold text-sm tracking-wide uppercase">{text}</span>
    </div>
  );
}
