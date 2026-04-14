import React from "react";
import { Mic, Brain, MessageCircle, Sparkles, ShieldCheck, Lock, Heart } from "lucide-react";

export default function HowItWorks() {
    return (
        <div className="w-full text-white bg-[#0b0f1a] overflow-hidden">

            {/* HERO */}
            <section className="relative flex flex-col items-center justify-center text-center px-6 py-32">

                {/* Glow */}
                <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full animate-pulse" />

                <h1 className="text-5xl md:text-6xl font-bold mb-6 relative z-10">
                    How <span className="text-purple-400">Naya</span> Works
                </h1>

                <p className="text-white/70 max-w-xl relative z-10">
                    A simple natural conversation designed to support you step by step.
                </p>
            </section>

            {/* STEPS ORBIT */}
            <section className="relative flex flex-col items-center justify-center px-6 py-20">

                {/* Line */}
                <div className="absolute w-[70%] h-[2px] bg-white/10" />

                {/* Moving Dot */}
                <div className="absolute w-[70%] h-[2px] animate-orbit">
                    <div className="w-3 h-3 bg-purple-400 rounded-full shadow-lg" />
                </div>

                <div className="flex flex-wrap justify-center gap-16 relative z-10">

                    <Step icon={Mic} title="Speak" desc="Start by talking to Naya" />
                    <Step icon={Brain} title="Understand" desc="AI listens and interprets" />
                    <Step icon={MessageCircle} title="Respond" desc="Receive thoughtful support" />
                    <Step icon={Sparkles} title="Grow" desc="Feel calmer and guided" />

                </div>
            </section>

            {/* VOICE EXPERIENCE */}
            <section className="relative flex flex-col items-center justify-center text-center px-6 py-20">

                {/* Glow */}
                <div className="absolute w-[400px] h-[400px] bg-indigo-500/20 blur-3xl rounded-full animate-pulse" />

                <div className="relative flex items-center justify-center mb-10">

                    {/* Orbit Ring */}
                    <div className="absolute w-[250px] h-[250px] border border-white/10 rounded-full animate-orbit" />

                    {/* Circle */}
                    <div className="w-56 h-56 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center shadow-2xl">

                        <div className="flex flex-col items-center gap-3">
                            <Mic className="w-8 h-8 text-white animate-pulse" />
                            <p className="text-white/80">Just say</p>
                            <p className="text-lg font-semibold">“Hey Naya”</p>
                        </div>

                    </div>
                </div>

                <p className="text-white/60 max-w-md">
                    No typing, no complexity. Just your voice, your thoughts, and a space that listens.
                </p>
            </section>

            {/* TRUST SECTION */}
            <section className="flex flex-col items-center justify-center text-center px-6 py-20">

                <div className="px-8 py-6 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md">

                    <div className="flex flex-wrap justify-center gap-10">

                        <TrustItem icon={ShieldCheck} text="Protected" />
                        <TrustItem icon={Lock} text="Secure" />
                        <TrustItem icon={Brain} text="Trauma-informed" />

                    </div>

                </div>

                {/* Text below */}
                <div className="flex items-center gap-2 text-white/80 text-sm mt-4">
                    <span>Designed with care, privacy, and emotional safety at its core.</span>
                    <Heart className="w-4 h-4 text-purple-400" />
                </div>
            </section>

        </div>
    );
}

/* STEP COMPONENT */
function Step({ icon: Icon, title, desc }) {
    return (
        <div className="flex flex-col items-center text-center gap-3">

            <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md hover:scale-110 transition">
                <Icon className="w-6 h-6 text-purple-400" />
            </div>

            <h3 className="text-white font-semibold">{title}</h3>

            <p className="text-white/60 text-sm max-w-[120px]">
                {desc}
            </p>
        </div>
    );
}

/* TRUST ITEM */
function TrustItem({ icon: Icon, text }) {
    return (
        <div className="flex items-center gap-2">
            <Icon className="w-5 h-5 text-purple-400" />
            <span className="text-white/80 text-sm">{text}</span>
        </div>
    );
}