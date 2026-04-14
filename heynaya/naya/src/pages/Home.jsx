import React from "react";
import { Mic, Sparkles, MessageCircle, Wind, BookOpen, Shield, ShieldCheck, Lock, Brain, Heart } from "lucide-react";
import bg from "../assets/images/image.png";
// import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="w-full text-white">

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center text-center px-4 py-32 overflow-hidden">

        {/* Background */}
        <img
          src={bg}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a]/20 via-[#0b0f1a]/50 to-[#0b0f1a]/40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-6">

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-light font-bold">
            Meet{" "}
            <span className="text-purple-400 font-semibold inline-flex items-center gap-2">
              naya
              <Sparkles className="w-6 h-6 text-purple-300 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
            </span>
          </h1>

          <p className="text-white/80 max-w-xl text-xl mb-2">
            Your voice assistant for trauma support and healing.
          </p>
          <p className="text-white/40 max-w-xl text-sm mb-4">
            Naya is here to listen, support and guide you.
            
            <br />
            one conversation at time. 
          </p>
          <p className="text-white/80 max-w-xl text-sm mb-40">
            Naya is more than just a voice assistant it is a space where you can be heard. In moments of stress, confusion, or emotional weight, Naya offers a calm presence that listens deeply and responds with care. It helps you slow down, reconnect with yourself, and navigate your thoughts at your own pace, without pressure or judgment.
          </p>


          {/* Circle + Orbit */}
          <div className="relative flex items-center justify-center mb-40">

            {/* Glow */}
            <div className="w-72 h-56 rounded-[50%] bg-gradient-to-tr from-purple-200 to-indigo-200 opacity-20 blur-2xl absolute animate-pulse" />

            {/* Orbit Rings */}
            <div className="absolute w-[320px] h-[320px] rounded-full border border-white/5" />
            <div className="absolute w-[420px] h-[420px] rounded-full border border-white/10" />
            <div className="absolute w-[520px] h-[520px] rounded-full border border-white/5" />

            {/* Rotating Dot 1 */}
            <div className="absolute w-[320px] h-[320px] rounded-full animate-orbit">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-600 rounded-full" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-600 rounded-full" />
            </div>

            {/* Rotating Dot 2 */}
            <div className="absolute w-[420px] h-[420px] rounded-full animate-orbit">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full" />
            </div>

            {/* Rotating Dot 3 */}
            <div className="absolute w-[520px] h-[520px] rounded-full animate-orbit">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-800 rounded-full" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-800 rounded-full" />
            </div>

            {/* Main Oval */}
            <div className="w-72 h-56 rounded-[50%] bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center shadow-2xl">
              <div className="text-center flex flex-col items-center">
                <p className="text-lg font-medium text-white mb-4">Talk to</p>

                <div className="flex items-center gap-2 text-2xl text-white/80 font-bold mb-4">
                  <span>Naya</span>
                </div>

                <Mic className="w-6 h-6 text-white animate-pulse" />
              </div>
            </div>

            {/* Orbit Buttons */}

            {/* Top Left */}
            <div className="absolute -top-16 -left-20 animate-float mb-20">
              <CircleButton
                icon={MessageCircle}
                title="Talk"
                subtitle="I'm here to listen"
              />
            </div>

            <div className="absolute -top-16 -right-20 animate-float delay-200">
              <CircleButton
                icon={Wind}
                title="Ground"
                subtitle="Find calm together"
              />
            </div>

            <div className="absolute -bottom-16 -left-20 animate-float delay-300">
              <CircleButton
                icon={BookOpen}
                title="Learn"
                subtitle="Heal at your pace"
              />
            </div>

            <div className="absolute -bottom-16 -right-20 animate-float delay-500">
              <CircleButton
                icon={Shield}
                title="Safe Space"
                subtitle="Always no judgment"
              />
            </div>
          </div>

          {/* Transparent Box */}
          <div className="px-6 py-4 rounded-2xl border border-white/30 bg-white/5 backdrop-blur-md mb-2">
            <div className="flex items-center gap-8">

              {/* Item 1 */}
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-purple-300" />
                <span className="text-sm">Protected</span>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-purple-300" />
                <span className="text-sm">Secure</span>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-300" />
                <span className="text-sm">Trauma-informed</span>
              </div>

            </div>
          </div>

          {/* Text below */}
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <span>Designed with care, privacy, and emotional safety at its core.</span>
            <Heart className="w-4 h-4 text-purple-400" />
          </div>
        </div>
      </section>
    </div>

  );
}

/* Reusable Button */
function CircleButton({ title, subtitle, icon: Icon }) {
  return (
    <div className="w-28 h-28 rounded-full bg-white/10 backdrop-blur-lg border border-white/60 flex flex-col items-center justify-center text-center gap-1 hover:scale-110 transition cursor-pointer shadow-lg">

      {/* Icon on top */}
      {Icon && <Icon className="w-5 h-5 text-white mb-4" />}

      {/* Title */}
      <div className="text-xs font-semibold text-white leading-none">
        {title}
      </div>

      {/* Subtitle */}
      <div className="text-[10px] text-white/70 leading-tight px-1">
        {subtitle}
      </div>

    </div>
  );
}